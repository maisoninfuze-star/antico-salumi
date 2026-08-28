import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number; // conservé pour l'API ; l'échelonnement vient du défilement
  className?: string;
  as?: "div" | "li" | "span" | "figure" | "section" | "ul";
};

// Simple conteneur de révélation. L'animation est entièrement en CSS
// (voir globals.css .reveal + animation-timeline: view()).
export default function Reveal({ children, className, as: Tag = "div" }: Props) {
  return <Tag className={`reveal ${className ?? ""}`}>{children}</Tag>;
}
