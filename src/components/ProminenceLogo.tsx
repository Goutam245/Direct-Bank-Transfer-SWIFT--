const ProminenceLogo = ({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) => {
  const sizes = {
    small: { width: 140, dotScale: 0.6, textSize: "text-sm", subSize: "text-[8px]" },
    default: { width: 200, dotScale: 0.85, textSize: "text-xl", subSize: "text-[10px]" },
    large: { width: 280, dotScale: 1.1, textSize: "text-3xl", subSize: "text-sm" },
  };
  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Dot arc icon */}
      <svg
        width={s.width}
        height={s.width * 0.45}
        viewBox="0 0 200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(0,217,255,0.5)]"
      >
        {/* Generate arc of dots */}
        {Array.from({ length: 12 }).map((_, row) => {
          const rowY = 85 - row * 7;
          const spread = Math.max(2, 14 - row * 1.2);
          const dotsInRow = Math.max(1, Math.round(spread));
          const startX = 100 - (dotsInRow - 1) * 4 + row * 3;
          const dotSize = 1.2 + row * 0.25;
          const progress = row / 11;
          const r = Math.round(0 + progress * 0);
          const g = Math.round(153 + progress * (229 - 153));
          const b = Math.round(204 + progress * (255 - 204));

          return Array.from({ length: dotsInRow }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={startX + col * 8}
              cy={rowY - Math.abs(col - (dotsInRow - 1) / 2) * (row * 0.4)}
              r={dotSize * s.dotScale}
              fill={`rgb(${r}, ${g}, ${b})`}
              opacity={0.7 + progress * 0.3}
            />
          ));
        })}
      </svg>

      {/* Text */}
      <div className="flex flex-col items-center -mt-1">
        <span
          className={`${s.textSize} font-bold tracking-[0.25em] text-prominence-cyan text-glow`}
        >
          PROMINENCE
        </span>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-prominence-cyan/60 to-transparent my-1" />
        <span
          className={`${s.subSize} font-semibold tracking-[0.5em] text-prominence-cyan/80`}
        >
          BANK
        </span>
      </div>
    </div>
  );
};

export default ProminenceLogo;
