import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepo: Repository<Post>,
  ) {}

  async findPublished(): Promise<Post[]> {
    return this.postsRepo.find({
      where: { publishedAt: Not(IsNull()) },
      order: { publishedAt: 'DESC' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        tags: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findPublishedBySlug(slug: string): Promise<Post> {
    const post = await this.postsRepo.findOne({
      where: { slug, publishedAt: Not(IsNull()) },
    });
    if (!post) {
      throw new NotFoundException(`Post "${slug}" not found`);
    }
    return post;
  }

  async create(dto: CreatePostDto): Promise<Post> {
    await this.ensureSlugAvailable(dto.slug);

    const post = this.postsRepo.create({
      title: dto.title,
      slug: dto.slug,
      excerpt: dto.excerpt,
      content: dto.content,
      tags: dto.tags ?? [],
      publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
    });

    return this.postsRepo.save(post);
  }

  async update(slug: string, dto: UpdatePostDto): Promise<Post> {
    const post = await this.postsRepo.findOne({ where: { slug } });
    if (!post) {
      throw new NotFoundException(`Post "${slug}" not found`);
    }

    if (dto.slug && dto.slug !== post.slug) {
      await this.ensureSlugAvailable(dto.slug);
      post.slug = dto.slug;
    }

    if (dto.title !== undefined) post.title = dto.title;
    if (dto.excerpt !== undefined) post.excerpt = dto.excerpt;
    if (dto.content !== undefined) post.content = dto.content;
    if (dto.tags !== undefined) post.tags = dto.tags;
    if (dto.publishedAt !== undefined) {
      post.publishedAt = dto.publishedAt ? new Date(dto.publishedAt) : null;
    }

    return this.postsRepo.save(post);
  }

  async remove(slug: string): Promise<void> {
    const result = await this.postsRepo.delete({ slug });
    if (!result.affected) {
      throw new NotFoundException(`Post "${slug}" not found`);
    }
  }

  private async ensureSlugAvailable(slug: string): Promise<void> {
    const existing = await this.postsRepo.findOne({ where: { slug } });
    if (existing) {
      throw new ConflictException(`Slug "${slug}" is already in use`);
    }
  }
}
