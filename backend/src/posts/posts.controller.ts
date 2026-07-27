import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post as HttpPost,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiKeyGuard } from '../auth/api-key.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postsService.findPublished();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string): Promise<Post> {
    return this.postsService.findPublishedBySlug(slug);
  }

  @HttpPost()
  @UseGuards(ApiKeyGuard)
  create(@Body() dto: CreatePostDto): Promise<Post> {
    return this.postsService.create(dto);
  }

  @Put(':slug')
  @UseGuards(ApiKeyGuard)
  update(
    @Param('slug') slug: string,
    @Body() dto: UpdatePostDto,
  ): Promise<Post> {
    return this.postsService.update(slug, dto);
  }

  @Delete(':slug')
  @UseGuards(ApiKeyGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('slug') slug: string): Promise<void> {
    await this.postsService.remove(slug);
  }
}
