import Image from "next/image";
import Link from "next/link";
import { posts } from "../../lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};
  return { title: `${post.title} — Alexis`, description: post.excerpt };
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) notFound();

  const others = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="container">
      <header className="header">
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="header-text" />
        <div className="header-logo">Alexis</div>
      </header>

      <main>
        <article className="post-detail">
          <div className="post-detail-meta">
            <span className="post-card-category">{post.category}</span>
            <span className="post-card-date">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-detail-excerpt">{post.excerpt}</p>

          <div className="post-detail-image-wrap">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="post-detail-image"
              priority
            />
          </div>

          <div className="post-detail-content">
            <p>{post.content}</p>
          </div>
        </article>

        {/* More Posts */}
        {others.length > 0 && (
          <section className="latest-news" style={{ paddingTop: "80px" }}>
            <div className="latest-news-header">
              <div className="latest-news-label">More Posts</div>
              <Link href="/posts" className="latest-news-link">All Posts →</Link>
            </div>
            <div className="posts-grid">
              {others.map((p) => (
                <Link href={`/posts/${p.id}`} key={p.id} className="post-card">
                  <div className="post-card-image-wrap">
                    <Image src={p.image} alt={p.title} fill className="post-card-image" />
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-meta">
                      <span className="post-card-category">{p.category}</span>
                      <span className="post-card-date">{p.date}</span>
                    </div>
                    <h3 className="post-card-title">{p.title}</h3>
                    <p className="post-card-excerpt">{p.excerpt}</p>
                    <span className="post-card-read">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <span>© 2025 Alexis</span>
        <Link href="/posts" className="btn-pill">← All Posts</Link>
      </footer>
    </div>
  );
}
