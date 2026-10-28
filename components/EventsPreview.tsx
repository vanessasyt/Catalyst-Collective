import Link from "next/link";

const events = [
  {
    day: "20",
    title: "Pilot Panel Discussion",
    status: "Save the date",
    description: "A small conversation with people a few steps ahead.",
    link: "/whats-on",
    label: "View event",
  },
  {
    day: "27",
    title: "Cheese & Wine Evening",
    status: "Invite only",
    description: "An informal evening for members and people interested in joining.",
    link: "mailto:catalystcollective@gmail.com?subject=Catalyst%20Collective%20%E2%80%94%20Register%20Interest",
    label: "Register your interest",
  },
];

export default function EventsPreview() {
  return (
    <section className="events-section page-gutter" aria-labelledby="events-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Meet, talk, see what clicks</p>
          <h2 id="events-title">What’s on</h2>
        </div>
        <p>A few things happening soon.</p>
      </div>
      <div className="event-preview-grid">
        {events.map((event) => (
          <article className="event-preview" key={event.day}>
            <div className="event-date">
              <strong>{event.day}</strong>
              November<br />
              2026
            </div>
            <div className="event-info">
              <span className="event-tag">{event.status}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.link.startsWith("mailto:") ? (
                <a className="text-link" href={event.link}>
                  {event.label} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link className="text-link" href={event.link}>
                  {event.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
