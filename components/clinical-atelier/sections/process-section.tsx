import { processSteps } from "../data";
import { MaterialIcon, SectionEyebrow } from "../shared";

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="shell">
        <div className="center-heading reveal">
          <SectionEyebrow>The Journey</SectionEyebrow>
          <h2>
            Your Surgical Journey <br />
            <span className="accent italic">Step by Step</span>
          </h2>
        </div>
        <div className="steps-grid reveal">
          {processSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="icon-box">
                  <MaterialIcon name={step.icon} />
                </div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
