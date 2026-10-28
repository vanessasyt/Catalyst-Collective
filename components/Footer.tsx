import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="site-footer page-gutter">
      <div className="footer-brand">
        <Link className="wordmark" href="/" aria-label="Catalyst Collective home">
          <span className="wordmark-mark" aria-hidden="true">
            <BrandMark />
          </span>
          <span>CATALYST COLLECTIVE</span>
        </Link>
        <p>A community for people figuring out what’s next.</p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/#about">About</Link>
        <Link href="/whats-on">What’s On</Link>
        <Link href="/#join">Join</Link>
        <a href="mailto:catalystcollective@gmail.com">Email</a>
      </nav>
      <a className="footer-email" href="mailto:catalystcollective@gmail.com">
        catalystcollective@gmail.com
      </a>
    </footer>
  );
}
