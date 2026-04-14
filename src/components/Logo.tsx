export function Logo({ className = "" }: { className?: string }) {
  // TODO: replace with <img src="/logo.png">
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label="Studio"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15" stroke="white" strokeOpacity="0.5" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontFamily="'Instrument Serif', serif"
          fontStyle="italic"
          fontSize="16"
          fill="white"
        >
          S
        </text>
      </svg>
      <span className="font-heading italic text-xl text-white">Studio</span>
    </div>
  );
}
