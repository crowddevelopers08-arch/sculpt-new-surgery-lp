"use client";

import type { ReactNode } from "react";

export function MaterialIcon({ name }: { name: string }) {
  return <span className="material-symbols-outlined">{name}</span>;
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function openModal() {
  window.dispatchEvent(new Event("openConsultationModal"));
}

export function PrimaryButton({
  children,
  className = "",
  modal = true,
}: {
  children: ReactNode;
  className?: string;
  modal?: boolean;
}) {
  return (
    <button
      className={`btn-primary ${className}`.trim()}
      onClick={modal ? openModal : undefined}
    >
      <span className="btn-label">{children}</span>
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  modal = false,
}: {
  children: ReactNode;
  className?: string;
  modal?: boolean;
}) {
  return (
    <button
      className={`btn-outline ${className}`.trim()}
      onClick={modal ? openModal : undefined}
    >
      <span className="btn-label">{children}</span>
    </button>
  );
}
