export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 2.333-2.329 4-5.226 4-3.266 0-5.77-2.477-5.77-6.1 0-3.45 2.39-6.1 5.94-6.1 2.87 0 4.86 1.78 5.28 4.43H21.2c-.314-1.28-1.28-2.08-2.78-2.08-1.89 0-3.17 1.49-3.17 3.83 0 2.36 1.28 3.84 3.14 3.84 1.62 0 2.54-.88 2.78-2.27h-2.78V14h7.18v3zM2 7h7v2H2V7zm0 10h7.2c3.24 0 5.2-1.77 5.2-4.6 0-2.04-1.16-3.48-3.32-3.87.94-.5 1.48-1.4 1.48-2.6 0-1.72-1.36-2.8-3.56-2.8H2v13.87zm2-2V9h4.5c1.24 0 1.9.52 1.9 1.36 0 .88-.66 1.4-1.9 1.4H4zm0 4h5c1.5 0 2.3.58 2.3 1.5S9.5 21 8 21H4v-2z" />
    </svg>
  );
}
