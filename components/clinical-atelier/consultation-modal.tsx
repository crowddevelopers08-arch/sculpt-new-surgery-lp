"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openConsultationModal", handler);
    return () => window.removeEventListener("openConsultationModal", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setOpen(false);
    router.push("/thank-you");
  }

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Book a Consultation"
    >
      <div
        className="modal-panel"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &#x2715;
        </button>

        <span className="eyebrow">Get in Touch</span>
        <h3 className="modal-title">
          Book Your <span className="accent italic">Consultation</span>
        </h3>
        <p className="modal-sub">
          Share your details and Dr. Priyanka Raj&apos;s team will reach out
          within 24 hours.
        </p>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="modal-name">Full Name</label>
            <input
              id="modal-name"
              name="name"
              type="text"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="modal-email">Email Address</label>
            <input
              id="modal-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="modal-phone">Phone Number</label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              placeholder="+91 96066 01166"
              autoComplete="tel"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary modal-submit"
            disabled={loading}
          >
            <span className="btn-label">
              {loading ? "Submitting…" : "Book My Consultation"}
            </span>
          </button>
        </form>

        <p className="modal-privacy">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
