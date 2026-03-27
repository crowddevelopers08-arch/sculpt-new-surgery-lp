"use client";

import Image from "next/image";
import { HeroSection } from "./sections/hero-section";
import { PhilosophySection } from "./sections/philosophy-section";
import { ProceduresSection } from "./sections/procedures-section";
import { SurgicalApproachSection } from "./sections/surgical-approach-section";
import { ExpertiseSection } from "./sections/expertise-section";
import { ProcessSection } from "./sections/process-section";
import { ResultsSection } from "./sections/results-section";
import { TrustSection } from "./sections/trust-section";
import { FaqSection } from "./sections/faq-section";
import { CtaSection } from "./sections/cta-section";
import { SiteFooter } from "./sections/site-footer";
import { ConsultationModal } from "./consultation-modal";

function openModal() {
  window.dispatchEvent(new Event("openConsultationModal"));
}

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="shell nav-inner">
        <div className="brand">
          <Image
            src="/bglogo.png"
            alt="Sculpt The Maxillofacial Clinic"
            width={130}
            height={44}
            className="nav-logo"
            priority
          />
        </div>
        <div className="nav-links">
          <a href="#procedures">Procedures</a>
          <a href="#expertise">Expertise</a>
          <a href="#process">Process</a>
          <a href="#results">Results</a>
          <a href="#faq">FAQ</a>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
        <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </label>
        <button className="btn-primary nav-cta" onClick={openModal}>
          <span className="btn-label">Consultation</span>
        </button>
      </div>
      <div className="mobile-menu">
        <a href="#procedures">Procedures</a>
        <a href="#expertise">Expertise</a>
        <a href="#process">Process</a>
        <a href="#results">Results</a>
        <a href="#faq">FAQ</a>
        <button className="btn-primary mobile-cta-btn" onClick={openModal}>
          <span className="btn-label">Book Consultation</span>
        </button>
      </div>
    </nav>
  );
}

export function ClinicalAtelierPage() {
  return (
    <main className="atelier-page">
      <TopNav />
      <HeroSection />
      <PhilosophySection />
      <ProceduresSection />
      <SurgicalApproachSection />
      <ExpertiseSection />
      <ProcessSection />
      <ResultsSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
      <ConsultationModal />
    </main>
  );
}
