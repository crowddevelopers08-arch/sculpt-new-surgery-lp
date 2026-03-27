import Image from "next/image";
import { MaterialIcon, PrimaryButton, SectionEyebrow } from "../shared";

export function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <Image
        src="/shome.webp"
        alt="Clinic interior"
        fill
        priority
        className="hero-image"
      />
      <div className="hero-aura" />

      <div className="shell hero-content reveal">
        <div className="hero-kicker">
          <span className="line" />
          <SectionEyebrow>Surgical Excellence Redefined</SectionEyebrow>
        </div>
        <h1>
          Concerned About Your <br />
          <span className="text-gradient">Facial Features?</span>
        </h1>
        <p className="hero-copy">
          Advanced maxillofacial procedures for jawline definition, nose
          reshaping, eye rejuvenation, and facial balance are planned with
          precision and performed safely.
        </p>
        <div className="hero-trust-row">
          <div className="hero-trust-item">
            <MaterialIcon name="verified" />
            MDS Maxillofacial Surgeon-Led
          </div>
          <div className="hero-trust-item">
            <MaterialIcon name="military_tech" />
            Advanced Surgical Expertise
          </div>
          <div className="hero-trust-item">
            <MaterialIcon name="favorite" />
            Proven Patient Results
          </div>
        </div>

        <div className="hero-actions">
          <PrimaryButton>Book My Consultation</PrimaryButton>
          <div className="stat-block">
            <div className="stat-divider" />
            <div>
              <strong>15+ Years</strong>
              <span>Clinical Excellence</span>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="scroll-indicator">
        <span>Explore More</span>
        <div />
      </div> */}
    </header>
  );
}
