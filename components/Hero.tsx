import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">A small community for what’s next</p>
        <h1 id="hero-title">
          You don’t have to figure it out <em>alone.</em>
        </h1>
        <p className="hero-description">
          Catalyst is a small community for ambitious people exploring what
          comes next — from startups and VC to consulting, biotech and beyond.
        </p>
        <div className="hero-actions">
          <a className="button-dark" href="mailto:catalystcollective@gmail.com?subject=Catalyst%20Collective%20%E2%80%94%20Register%20Interest">
            Join the community <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="/whats-on">
            What’s on <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src="/images/panel-discussion.png"
          alt="Four speakers share a panel conversation while attendees listen from their seats"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 52vw"
        />
        <span className="image-caption">A conversation that carries on.</span>
      </div>
    </section>
  );
}
