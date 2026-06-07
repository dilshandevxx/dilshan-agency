import Image from "next/image";
import Link from "next/link";
import { posts } from "./lib/posts";

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="container">
      {/* Top Navigation */}
      <header className="header">
        <nav className="nav-links">
          <Link href="#work">Work</Link>
          <Link href="/posts">Posts</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="header-text">
          I am a designer from London<br />
          working with agencies and creatives.
        </div>
        <div className="header-logo">Alexis</div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Alexis</h1>
          <div className="hero-image-container">
            <Image
              src="/assets/hero.png"
              alt="Alexis"
              className="hero-image"
              width={1600}
              height={900}
              priority
            />
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro">
          <h2 className="intro-heading">
            Eget lacus diam, morbi<br />
            nulla pellentesque<br />
            molestie sollicitudin est<br />
            nulla vulputate viverra.<br />
            Lacus molestie est .
          </h2>
          <div className="intro-content">
            <div className="intro-label">About me</div>
            <div className="intro-text">
              <p>
                Luctus faucibus ac sollicitudin feugiat sit. Ac<br />
                tellus sit commodo duis mi interdum. Eget eget<br />
                sed phasellus lacus turpis. Auctor congue urna<br />
                consectetur adipiscing. Sit dui iaculis varius.
              </p>
              <p>
                Morbi a turpis aliquam dictum dolor eu lacus, quis.<br />
                Volutpat duis feugiat diam pretium sagittis proin pretium.<br />
                Nibh sed hendrerit maecenas turpis non. Nunc, cursus<br />
                neque in lectus sem. Convallis imperdiet leo imperdiet.
              </p>
              <Link href="#about-me" className="btn-pill">
                Read more about me
              </Link>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="latest-news">
          <div className="latest-news-header">
            <div className="latest-news-label">Latest News</div>
            <Link href="/posts" className="latest-news-link">
              All Posts →
            </Link>
          </div>

          <div className="posts-grid">
            {latestPosts.map((post) => (
              <Link href={`/posts/${post.id}`} key={post.id} className="post-card">
                <div className="post-card-image-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="post-card-image"
                  />
                </div>
                <div className="post-card-body">
                  <div className="post-card-meta">
                    <span className="post-card-category">{post.category}</span>
                    <span className="post-card-date">{post.date}</span>
                  </div>
                  <h3 className="post-card-title">{post.title}</h3>
                  <p className="post-card-excerpt">{post.excerpt}</p>
                  <span className="post-card-read">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2025 Alexis</span>
        <Link href="/posts" className="btn-pill">All Posts →</Link>
      </footer>
    </div>
  );
}
