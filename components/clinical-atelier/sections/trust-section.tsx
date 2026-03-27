import { trustPoints } from "../data";
import { MaterialIcon, SectionEyebrow } from "../shared";

export function TrustSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="trust-panel glass-card reveal">
          <div className="section-aura" />
          <div className="trust-inner">
            <div className="center-heading">
              <SectionEyebrow>Why Choose Us</SectionEyebrow>
              <h2>
                Unmatched Standards for <br />
                Facial Surgery
              </h2>
            </div>
            <div className="trust-grid">
              {trustPoints.map((point) => (
                <div className="trust-item" key={point.title}>
                  <h4>
                    <MaterialIcon name={point.icon} />
                    {point.title}
                  </h4>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
