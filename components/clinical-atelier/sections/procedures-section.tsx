import { procedures } from "../data";
import { MaterialIcon, OutlineButton, SectionEyebrow } from "../shared";

export function ProceduresSection() {
  return (
    <section className="section section-surface" id="procedures">
      <div className="section-aura" />
      <div className="shell relative-layer">
        <div className="section-header reveal">
          <div>
            <SectionEyebrow>The Surgical Suite</SectionEyebrow>
            <h2>
              Surgical Solutions Designed for <br />
              <span className="accent italic">Facial Balance</span>
            </h2>
          </div>
          <OutlineButton className="button-with-icon" modal>
            Talk to a Specialist <MaterialIcon name="arrow_forward" />
          </OutlineButton>
        </div>

        <div className="procedures-grid">
          {procedures.map((procedure, index) => (
            <article
              className={`glass-card procedure-card reveal delay-${index + 1}`}
              key={procedure.title}
            >
              <div className="card-top">
                <div className="icon-box">
                  <MaterialIcon name={procedure.icon} />
                </div>
                <h3>{procedure.title}</h3>
                <p>{procedure.description}</p>
              </div>
              <a href="#results" className="card-link">
                View Case Studies <span className="card-line" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
