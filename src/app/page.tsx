import Image from "next/image";
import Link from "next/link";
import heroImg from "../../assets/hero.png";

export default function Home() {
  return (
    <div className="container">
      {/* Top Navigation */}
      <header className="header">
        <nav className="nav-links">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
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
              src={heroImg}
              alt="Alexis"
              className="hero-image"
              placeholder="blur"
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
      </main>
    </div>
  );
}
