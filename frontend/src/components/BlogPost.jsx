import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { fetchPostBySlug } from '../api/posts';
import './BlogPost.css';

function formatDate(value) {
  if (!value) return '';
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(value));
  } catch {
    return '';
  }
}

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setPost(null);

    fetchPostBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        setPost(data);
        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        const msg = String(err?.message || '');
        if (msg.includes('404') || msg.toLowerCase().includes('not found')) {
          setStatus('missing');
        } else {
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === 'loading') {
    return (
      <main className="blog-post-page">
        <section className="blog-post-hero">
          <p className="s-label">// blog</p>
          <h1 className="blog-post-title">Carregando…</h1>
        </section>
      </main>
    );
  }

  if (status === 'missing') {
    return (
      <main className="blog-post-page">
        <section className="blog-post-hero blog-post-missing">
          <p className="s-label">// post não encontrado</p>
          <h1 className="blog-post-title">Esse post não existe.</h1>
          <a href="/#blog" className="blog-post-back">
            Voltar para o blog
          </a>
        </section>
      </main>
    );
  }

  if (status === 'error' || !post) {
    return (
      <main className="blog-post-page">
        <section className="blog-post-hero blog-post-missing">
          <p className="s-label">// erro</p>
          <h1 className="blog-post-title">Não foi possível carregar o post.</h1>
          <a href="/#blog" className="blog-post-back">
            Voltar para o blog
          </a>
        </section>
      </main>
    );
  }

  const html = marked.parse(post.content || '', { async: false });

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <p className="s-label">// blog</p>
        <time className="blog-post-date" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-excerpt">{post.excerpt}</p>
        {post.tags?.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="section blog-post-section">
        <article
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blog-post-footer">
          <a href="/#blog" className="blog-post-back">
            ← Todos os posts
          </a>
        </div>
      </section>
    </main>
  );
}
