import Image from "next/image";
import { expertHighlights } from "../data";
import { MaterialIcon, PrimaryButton, SectionEyebrow } from "../shared";

export function ExpertiseSection() {
  return (
    <section className="section section-surface" id="expertise">
      <div className="shell">
        <div className="expertise-panel glass-card">
          <div className="expertise-portrait reveal">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_0tRoSUX4OdTJMHYFo97r5C8j1ajvE0kUNwe5mlHsTBmMFhLDkt3qhpSWu6XIdG2MqDRWWxoETibsHUO-sISYuwLFUcGCl7-cOi5ZUV12cdicSmYqUXn96-UFRJKnHP7G91L_wGlPOVXnbnoVLLFrBeujza63KsQFghJ44hQs0G1pNAMRyPiEHbmmmetokMosD9RZCY4X62J99IbE1mgKdeVtHDrjbMnDzwsD0npd9Mmd-moIvrdh92eU9Ew0CChWH4oWfVTUUyo"
              alt="Dr. Priyanka Raj"
              fill
              className="portrait-image"
            />
            <div className="portrait-overlay" />
            <div className="portrait-copy reveal delay-2">
              <h3>
                Dr. Priyanka <br />
                <span className="accent italic">Raj</span>
              </h3>
              <p>MDS Maxillofacial Surgery Specialist</p>
            </div>
          </div>

          <div className="expertise-content reveal delay-1">
            <div>
              <SectionEyebrow>Medical Authority</SectionEyebrow>
              <h2>
                Led by a Maxillofacial <br />
                <span className="accent">Surgical Specialist</span>
              </h2>
              <p className="section-copy">
                Unlike general cosmetic approaches, maxillofacial expertise
                focuses on the foundation of the face, bone and structure,
                ensuring long-lasting and anatomically correct results.
              </p>
            </div>
            <div className="highlight-list">
              {expertHighlights.map((item, index) => (
                <div className="highlight-row" key={item}>
                  <div className="highlight-main">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                  <MaterialIcon name="arrow_outward" />
                </div>
              ))}
            </div>
            <PrimaryButton className="wide-on-mobile">
              Book a Consultation with the Expert
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
