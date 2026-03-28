"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionEyebrow } from "../shared";

const allImages = ["/one.png", "/two.jpg", "/three.png", "/four.png"];

function CyclingFrame({ images, delay = 0 }: { images: string[]; delay?: number }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % images.length);
          setFading(false);
        }, 500);
      }, 3500);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [images.length, delay]);

  return (
    <div className="glass-frame cycling-frame">
      <div className="cycling-image-wrap">
        <Image
          src={images[current]}
          alt="Patient result"
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className={`cycling-image${fading ? " cycling-fade" : ""}`}
        />
      </div>
      <div className="cycling-dots">
        {images.map((_, i) => (
          <span key={i} className={`cycling-dot${i === current ? " active" : ""}`} />
        ))}
      </div>
    </div>
  );
}

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
          <CyclingFrame images={allImages} delay={0} />
        </div>
      </div>
    </section>
  );
}
