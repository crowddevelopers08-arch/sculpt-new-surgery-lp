import { OutlineButton, PrimaryButton, SectionEyebrow } from "../shared";

export function CtaSection() {
  return (
    <section className="section cta-section">
      <div className="section-aura pulse-aura" />
      <div className="shell">
        <div className="cta-panel glass-card reveal">
          <SectionEyebrow>Take the Next Step</SectionEyebrow>
          <h2>
            Ready to Restore <br />
            <span className="text-gradient italic">Your Facial Harmony?</span>
          </h2>
          <p className="cta-copy">
            Experience the difference of specialized maxillofacial surgery. Book
            your one-on-one surgical consultation with Dr. Priyanka Raj today.
          </p>
          <div className="cta-actions">
            <PrimaryButton>Book My Consultation</PrimaryButton>
            <a href="#results">
            <OutlineButton>View More Results</OutlineButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
