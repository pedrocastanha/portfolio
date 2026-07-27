const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export function fetchPosts() {
  return request('/posts');
}

export function fetchPostBySlug(slug) {
  return request(`/posts/${encodeURIComponent(slug)}`);
}
