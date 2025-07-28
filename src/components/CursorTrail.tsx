import React, { useEffect, useRef, useState } from 'react';

const DARK_TRAIL_COLORS = ['#ffe600', '#ff9900', '#00fff7']; // yellow, orange, cyan
// More visible, saturated colors for stars on white background
const STAR_COLORS = ['#fbbf24', '#f87171', '#38bdf8', '#22d3ee', '#34d399', '#6366f1']; // gold, red, blue, cyan, green, indigo
const TRAIL_LENGTH = 12;
const TRAIL_FADE_DELAY = 400; // ms after mouse stops

export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; color: string }[]>([]);
  const fadeTimeout = useRef<number | null>(null);

  // Detect dark mode
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const color = isDarkMode
          ? DARK_TRAIL_COLORS[Math.floor(Math.random() * DARK_TRAIL_COLORS.length)]
          : STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
        const next = [
          { x: e.clientX, y: e.clientY, color },
          ...prev,
        ];
        return next.slice(0, TRAIL_LENGTH);
      });
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      fadeTimeout.current = window.setTimeout(() => setTrail([]), TRAIL_FADE_DELAY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, [isDarkMode]);

  if (trail.length === 0) return null;

  if (isDarkMode) {
    // Dots effect in dark mode
    return (
      <>
        {trail.map((dot, i) => (
          <span
            key={i}
            style={{
              position: 'fixed',
              left: dot.x - 8,
              top: dot.y - 8,
              width: `${16 - i * 0.8}px`,
              height: `${16 - i * 0.8}px`,
              borderRadius: '50%',
              background: dot.color,
              opacity: 0.8 - i * (0.6 / TRAIL_LENGTH),
              pointerEvents: 'none',
              zIndex: 2147483647,
              filter: `drop-shadow(0 0 8px ${dot.color})`,
              transition: 'left 0.1s, top 0.1s, opacity 0.2s',
              userSelect: 'none',
              display: 'inline-block',
            }}
          />
        ))}
      </>
    );
  } else {
    // Shining stars effect in light mode
    return (
      <>
        {trail.map((dot, i) => (
          <span
            key={i}
            style={{
              position: 'fixed',
              left: dot.x - 12,
              top: dot.y - 12,
              fontSize: `${22 - i * 1.2}px`,
              color: dot.color,
              opacity: 0.85 - i * (0.7 / TRAIL_LENGTH),
              pointerEvents: 'none',
              zIndex: 2147483647,
              filter: `drop-shadow(0 0 16px ${dot.color}) brightness(1.4)`,
              transition: 'left 0.1s, top 0.1s, opacity 0.2s',
              userSelect: 'none',
              fontWeight: 900,
              textShadow: `0 0 8px ${dot.color}, 0 0 16px #fff`,
            }}
          >
            ★
          </span>
        ))}
      </>
    );
  }
}; 