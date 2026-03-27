import { faqs } from "../data";
import { MaterialIcon, SectionEyebrow } from "../shared";

export function FaqSection() {
  return (
    <section className="section section-surface" id="faq">
      <div className="faq-shell">
        <div className="center-heading reveal">
          <SectionEyebrow>Clarifications</SectionEyebrow>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list reveal delay-1">
          {faqs.map((faq) => (
            <details className="faq-item glass-card" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <MaterialIcon name="expand_more" />
                </span>
              </summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
