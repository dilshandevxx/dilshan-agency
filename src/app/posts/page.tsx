import Image from "next/image";
import Link from "next/link";
import { posts } from "../lib/posts";

export const metadata = {
  title: "Posts — Alexis",
  description: "Writing on design, typography, brand identity and craft.",
};

export default function PostsPage() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="header-text">
          Writing on design,<br />
          typography & brand identity.
        </div>
        <div className="header-logo">Alexis</div>
      </header>

      <main>
        <section className="posts-page-hero">
          <h1 className="posts-page-title">All Posts</h1>
          <p className="posts-page-subtitle">
            Thoughts on craft, systems, and the practice of design.
          </p>
        </section>

        <section className="posts-full-list">
          {posts.map((post, index) => (
            <Link href={`/posts/${post.id}`} key={post.id} className="post-list-item">
              <div className="post-list-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="post-list-image-wrap">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="post-list-image"
                />
              </div>
              <div className="post-list-body">
                <div className="post-card-meta">
                  <span className="post-card-category">{post.category}</span>
                  <span className="post-card-date">{post.date}</span>
                  <span className="post-card-date">{post.readTime}</span>
                </div>
                <h2 className="post-list-title">{post.title}</h2>
                <p className="post-card-excerpt">{post.excerpt}</p>
              </div>
              <div className="post-list-arrow">→</div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="footer">
        <span>© 2025 Alexis</span>
        <Link href="/" className="btn-pill">← Back Home</Link>
      </footer>
    </div>
  );
}
