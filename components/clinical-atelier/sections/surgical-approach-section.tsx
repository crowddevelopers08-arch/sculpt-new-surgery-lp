import Image from "next/image";
import { MaterialIcon, SectionEyebrow } from "../shared";

const features = [
  ["Structurally Correct", "Anchored to the underlying anatomy for permanence."],
  ["Aesthetically Balanced", "Mathematical precision in proportion calculation."],
  ["Naturally Aligned", "Designed to complement your unique facial features."]
] as const;

export function SurgicalApproachSection() {
  return (
    <section className="section">
      <div className="shell two-column">
        <div className="content-stack reveal">
          <div>
            <SectionEyebrow>The Alternative</SectionEyebrow>
            <h2>
              When Non-Surgical Options <br />
              <span className="accent italic">Are Not Enough</span>
            </h2>
          </div>
          <p className="section-copy">
            While non-surgical treatments can improve skin and minor concerns,
            structural changes require surgical precision. Maxillofacial
            procedures address bone, cartilage, and deeper facial structures,
            delivering long-term, stable, and proportionate results.
          </p>
          <div className="feature-list">
            {features.map(([title, description]) => (
              <div className="feature-item" key={title}>
                <div className="feature-icon">
                  <MaterialIcon name="check" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-gallery reveal delay-1">
          <div className="gallery-col">
            <div className="glass-frame">
              <Image
                src="/IMG_6772 - Copy.png"
                alt="Anatomical precision"
                width={520}
                height={740}
                className="rounded-image mid-image"
                style={{ filter: "none" }}
              />
            </div>
            <div className="metric-card">
              <strong>98%</strong>
              <span>Patient Success Rate</span>
            </div>
          </div>
          <div className="gallery-col top-offset">
            <div className="metric-card">
              <strong>5.0</strong>
              <span>Patient Rating</span>
            </div>
            <div className="glass-frame">
              <Image
                src="/IMG_6772 - Copy (2).png"
                alt="Digital planning"
                width={520}
                height={740}
                className="rounded-image mid-image"
                style={{ filter: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
