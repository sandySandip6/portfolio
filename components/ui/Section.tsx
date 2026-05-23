import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
};

export default function Section({ id, children, className = "", alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section relative scroll-mt-24 ${alt ? "section-alt" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
