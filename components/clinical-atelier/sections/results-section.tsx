import Image from "next/image";
import { SectionEyebrow } from "../shared";

export function ResultsSection() {
  return (
    <section className="section section-surface" id="results">
      <div className="shell results-grid">
        <div className="content-stack reveal">
          <div>
            <SectionEyebrow>The Evidence</SectionEyebrow>
            <h2>
              Real Transformations, <br />
              <span className="text-gradient italic">Natural Results</span>
            </h2>
          </div>
          <p className="section-copy">
            Before and after cases across procedures, focusing on subtle and
            proportionate changes. Results that enhance, not alter.
          </p>
          <div className="results-stats">
            <div className="mini-metric">
              <strong>2,500+</strong>
              <span>Procedures Completed</span>
            </div>
            <div className="mini-metric">
              <strong>15+</strong>
              <span>Years of Experience</span>
            </div>
          </div>
        </div>

        <div className="results-gallery reveal delay-1">
          <div className="section-aura pulse-aura" />
          <div className="results-image-stack">
            <div className="glass-frame top-shift">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOlvhn5mhLpCpCOxC8T-Qsabc9-ZxvKqgF4h_hJ-4cok4kEsMhuFlsXNv1iBEs3NKG_w3yTSo3Ifa-CRgjslPIOg--vQ7hK99K7JFP38li_cGV02_6s1t63HHsCogHeIIAcwmGHZyvy6cu4RfOjEORoK9-hRgjI_5G31zikitdDeKwbd4dcrhoIt1_cMmQcULGe0cB83wqVR_0sRbDlZHV_dEAWZn_Rb4hw1ILHdLAtcRCJTE46TvmMIuDASwqbk0w-nWe-_cRsts"
                alt="Patient result 1"
                width={480}
                height={480}
                className="rounded-image square-image"
              />
            </div>
            <div className="glass-frame">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGloRCqBu-IQiz8YXzs9UzC9kyAL_6jwUFZxNT3wUqX9XqfZuH7neKa2jCblkrc8i5HK4XH-Lcw0M6KZ8ft2HAJSkQf2Y-ZdUVYS5w51PgKNwDLIVh3_vySwGnDErcKBUHWwspzJSajyUiL2PqTfawAWHEnn919p3MCIdD2uLzrM0m5bvIdR2KCrlumvX4D5UjpQn9IPx_eaHIY1GDPJFvD1l4vhtS3Carr50ON8XqJg8e-qY9oqDMKu-rZYFY_NDoIpsAHBheX1M"
                alt="Patient result 2"
                width={480}
                height={480}
                className="rounded-image square-image"
              />
            </div>
          </div>
          <div className="floating-pill reveal delay-2">
            <span>Clinical Precision</span>
          </div>
        </div>
      </div>
    </section>
  );
}
