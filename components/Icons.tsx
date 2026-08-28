// Icônes au trait fin, cohérentes (strokeWidth 1.25). Inline pour la performance.
type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className} width="18" height="18"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className} width="18" height="18"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
export const ArrowDown = ({ className }: P) => (
  <svg {...base} className={className} width="18" height="18"><path d="M12 4v16M6 14l6 6 6-6" /></svg>
);
export const Phone = ({ className }: P) => (
  <svg {...base} className={className} width="20" height="20"><path d="M4.5 5.5c0 7.5 6.5 14 14 14 .8 0 1.5-.7 1.5-1.5v-2.3c0-.6-.4-1.1-1-1.3l-3-.9c-.5-.2-1.1 0-1.4.4l-.9 1.1c-2.3-1.1-4.2-3-5.3-5.3l1.1-.9c.4-.3.6-.9.4-1.4l-.9-3c-.2-.6-.7-1-1.3-1H6C5.2 4 4.5 4.7 4.5 5.5Z" /></svg>
);
export const Pin = ({ className }: P) => (
  <svg {...base} className={className} width="20" height="20"><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Menu = ({ className }: P) => (
  <svg {...base} className={className} width="20" height="20"><path d="M4 12h16" /></svg>
);
export const Instagram = ({ className }: P) => (
  <svg {...base} className={className} width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r="0.7" fill="currentColor" stroke="none" /></svg>
);
export const Facebook = ({ className }: P) => (
  <svg {...base} className={className} width="20" height="20"><path d="M14.5 8.5H16V6h-1.8C12.4 6 11 7.3 11 9v1.5H9V13h2v7h2.6v-7h1.9l.4-2.5h-2.3V9c0-.3.2-.5.5-.5Z" /></svg>
);
