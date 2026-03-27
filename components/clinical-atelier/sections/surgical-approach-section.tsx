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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwoybL7GUkjHGlJahngQdbYV8aQU9qBkXDkLskhtfF-MzXtPtDnQInC_9DoKyvLTZggTWdg3pw9GnbMWIRHUW4OmgPUNq4SyPLP1s_PUsZd3DMGNYl_QtjJAIxoygkiY6_991YCyTY20s7fQE78EEThGnGHjTu1C69fIWEIV-R_MHjTk82vGBSlZTyPhyuDHb6C8izBowghxivGT095RjjyO4UxF3dKMDZXkLkN-AXPwqrbCUQrM_YVriDtCkOKs6dTFJlQ79utUM"
                alt="Anatomical precision"
                width={520}
                height={740}
                className="rounded-image mid-image"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFPKQERTnA49taVe-GmAGQnmKPLathoj-_8WI8QeYVdwvxz0_6gfJThgSxvN8YtB29bWxGs7BRwShGI_dZfXq0yBhzGG3MgU_DkkU6CJKNz99BPx7A6onfSl6QgsGnqiihfZe6yThBm6zJ8SFyMW-pQlW0FYcl-3XZSgaAqv-NMb3R8gL5DB8CaCciPSwHdByDtpD8pumWJV-6xW5tPs8HWuyuvMqjs2ppCiUC9_0IvZ6Kb95-Yw-AbW_7Mb0rJcHS_Gc4wVxz2EQ"
                alt="Digital planning"
                width={520}
                height={740}
                className="rounded-image mid-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
