import type { Metadata } from "next";
import Link from "next/link";
import Calendar from "@/components/Calendar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "What’s On — Catalyst Collective",
  description:
    "See what’s coming up with Catalyst Collective in November 2026.",
};

export default function WhatsOnPage() {
  return (
    <>
      <Navbar />
      <main className="calendar-page">
        <div className="calendar-heading">
          <div>
            <p className="eyebrow">A reason to get together</p>
            <h1>What’s on</h1>
            <p>November 2026</p>
          </div>
          <p className="calendar-note">
            A couple of things in the diary. Tap a date to find out more.
          </p>
        </div>
        <Calendar />
        <Link className="calendar-back-link" href="/#join">
          Interested in coming along? Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
