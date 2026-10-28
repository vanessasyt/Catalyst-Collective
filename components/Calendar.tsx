"use client";

import { useState } from "react";

const events = {
  20: {
    title: "Pilot Panel Discussion",
    status: "Save the date",
    description: "A small conversation with people a few steps ahead.",
  },
  27: {
    title: "Cheese & Wine Evening",
    status: "Invite only",
    description: "An informal evening for members and people interested in joining.",
  },
} as const;

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState<keyof typeof events | null>(null);

  return (
    <div>
      <div className="calendar" aria-label="November 2026 calendar">
        <div className="calendar-weekdays" aria-hidden="true">
          {weekdays.map((day) => (
            <span key={day}>{day.slice(0, 3)}</span>
          ))}
        </div>
        <div className="calendar-grid">
          {Array.from({ length: 42 }, (_, index) => {
            const day = index < 30 ? index + 1 : null;
            const eventDay = day === 20 ? 20 : day === 27 ? 27 : null;
            const event = eventDay ? events[eventDay] : null;

            return (
              <div className="calendar-cell" key={index}>
                {day && eventDay && event ? (
                  <button
                    className="calendar-day calendar-event"
                    type="button"
                    aria-label={`${event.title}, November ${eventDay}`}
                    aria-expanded={selectedDay === eventDay}
                    aria-controls="selected-event"
                    onClick={() =>
                      setSelectedDay((current) =>
                        current === eventDay ? null : eventDay,
                      )
                    }
                  >
                    {day}
                  </button>
                ) : (
                  day && <span className="calendar-day">{day}</span>
                )}
                {event && (
                  <span className="calendar-event-name">{event.title}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {selectedDay && (
        <article className="selected-event" id="selected-event" aria-live="polite">
          <div>
            <p className="eyebrow">
              November {selectedDay}, 2026 · {events[selectedDay].status}
            </p>
            <h2>{events[selectedDay].title}</h2>
          </div>
          <div className="selected-event-detail">
            <p>{events[selectedDay].description}</p>
            {selectedDay === 27 && (
              <a
                className="text-link"
                href="mailto:catalystcollective@gmail.com?subject=Catalyst%20Collective%20%E2%80%94%20Register%20Interest"
              >
                Register your interest <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      )}
    </div>
  );
}
