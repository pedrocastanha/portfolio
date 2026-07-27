import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import './Blog.css';

function formatDate(value) {
  if (!value) return '';
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(value));
  } catch {
    return '';
  }
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    fetchPosts()
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data) ? data : [];
        setPosts(list);
        setStatus(list.length ? 'ready' : 'empty');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section" id="blog">
      <p className="s-label">// notas e artigos</p>
      <h2 className="s-title">Blog</h2>

      {status === 'loading' && (
        <p className="blog-status">Carregando posts…</p>
      )}

      {status === 'error' && (
        <p className="blog-status blog-status-error">
          Não foi possível carregar o blog. Confira se a API está no ar.
        </p>
      )}

      {status === 'empty' && (
        <p className="blog-status">
          Ainda não há posts publicados. Em breve.
        </p>
      )}

      {status === 'ready' && (
        <div className="blog-list">
          {posts.map((post) => (
            <a key={post.id || post.slug} href={`/blog/${post.slug}`} className="blog-item">
              <div className="blog-meta">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                {post.tags?.length > 0 && (
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <span className="blog-link">ler post →</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
