import Community from "@/components/Community";
import EventsPreview from "@/components/EventsPreview";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import JoinSection from "@/components/JoinSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="intro-section page-gutter" aria-labelledby="intro-title">
          <p className="eyebrow">A COMMUNITY FOR WHAT’S NEXT</p>
          <div className="intro-copy">
            <h2 id="intro-title">
              For people <em>between worlds.</em>
            </h2>
            <p>
              Studying science and thinking about VC. Building something on the
              side. Considering consulting. Wondering what comes after the lab.
            </p>
            <p>
              Catalyst brings together people figuring out those next steps,
              and the people a few steps ahead.
            </p>
          </div>
        </section>
        <Community />
        <EventsPreview />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
