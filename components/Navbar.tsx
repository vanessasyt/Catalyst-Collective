import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const interestLink =
  "mailto:catalystcollective@gmail.com?subject=Catalyst%20Collective%20%E2%80%94%20Register%20Interest";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Catalyst Collective home">
          <span className="wordmark-mark" aria-hidden="true">
            <BrandMark />
          </span>
          <span>CATALYST COLLECTIVE</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className="nav-link" href="/#about">
            About
          </Link>
          <Link className="nav-link" href="/whats-on">
            What’s On
          </Link>
          <Link className="nav-link" href="/#join">
            Join
          </Link>
          <a className="nav-cta" href={interestLink}>
            Get involved <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">Menu <span aria-hidden="true">＋</span></summary>
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            <Link href="/#about">About</Link>
            <Link href="/whats-on">What’s On</Link>
            <Link href="/#join">Join</Link>
            <a href={interestLink}>Get involved ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
