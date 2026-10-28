export default function JoinSection() {
  return (
    <section className="join-section" id="join" aria-labelledby="join-title">
      <div className="join-copy">
        <p className="eyebrow">Start with a hello</p>
        <h2 id="join-title">
          Come <em>along.</em>
        </h2>
        <p>Want to meet people figuring it out too?</p>
        <a
          className="button-light"
          href="mailto:catalystcollective@gmail.com?subject=Catalyst%20Collective%20%E2%80%94%20Register%20Interest"
        >
          Register your interest <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
