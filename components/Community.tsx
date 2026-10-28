import Image from "next/image";

const points = [
  {
    title: "Meet",
    description: "People in the fields you’re curious about.",
  },
  {
    title: "Explore",
    description: "Dinners and honest conversations about how they got there.",
  },
  {
    title: "Give back",
    description: "When you find your feet, help someone else find theirs.",
  },
];

export default function Community() {
  return (
    <section className="community-section" aria-labelledby="community-title">
      <div className="community-image">
        <Image
          src="/images/community-dinner.png"
          alt="Young people sharing dinner and conversation around a long table"
          fill
          sizes="(max-width: 800px) 100vw, 52vw"
        />
        <span className="image-caption">Good things start with a conversation.</span>
      </div>
      <div className="community-copy" id="about">
        <p className="eyebrow">Why we started Catalyst</p>
        <h2 id="community-title">
          The network <em>we wish we’d had.</em>
        </h2>
        <p className="community-intro">
          We studied science because we loved it. Then we realised plenty of us
          wanted to do something different, but didn’t know anyone who’d made
          that jump.
          <br />
          <br />
          At university, there were careers talks and LinkedIn swaps, but few
          chances to really get to know someone or ask what the work is actually
          like. We wanted to change that.
          <br />
          <br />
          So we’re bringing together curious people across science, biotech,
          startups, VC, consulting, finance and tech. Not just to hear from
          people a few steps ahead, but to become part of each other’s networks
          — and, in time, be there for the people coming after us.
        </p>
        <div className="community-points">
          {points.map((point) => (
            <div className="community-point" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
