import React from 'react';

export const FairyLights: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none z-20 h-28 sm:h-36">
      {/* SVG Wire Strands */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wire 1 */}
        <path
          d="M0,15 Q300,75 600,20 Q900,80 1200,15"
          stroke="rgba(218, 165, 32, 0.4)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Wire 2 */}
        <path
          d="M0,35 Q200,95 450,40 Q750,90 1000,45 Q1100,70 1200,35"
          stroke="rgba(255, 215, 0, 0.25)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      {/* Bulbs positioned along top */}
      <div className="absolute top-2 left-0 right-0 flex justify-around px-4 sm:px-12">
        {Array.from({ length: 14 }).map((_, i) => {
          const isGold = i % 2 === 0;
          const delay = (i * 0.25) % 2;
          return (
            <div
              key={i}
              className="flex flex-col items-center animate-pulse"
              style={{
                animationDuration: `${2 + (i % 3) * 0.5}s`,
                animationDelay: `${delay}s`,
                transform: `translateY(${Math.sin((i / 13) * Math.PI) * 28 + (i % 2 === 0 ? 8 : 16)}px)`,
              }}
            >
              {/* Bulb Cap */}
              <div className="w-1.5 h-1.5 bg-yellow-900 rounded-sm" />
              {/* Glowing Bulb */}
              <div
                className={`w-3.5 h-4.5 rounded-full ${
                  isGold
                    ? 'bg-amber-300 shadow-[0_0_15px_#ffb300]'
                    : 'bg-rose-300 shadow-[0_0_15px_#ff758f]'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
