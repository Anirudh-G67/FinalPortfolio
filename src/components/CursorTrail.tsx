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
    // Lightning effect in dark mode
    if (trail.length < 2) return null;
    function lightningPath(x1: number, y1: number, x2: number, y2: number, segments = 4, seed = 0) {
      const points = [{ x: x1, y: y1 }];
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
        const offset = Math.sin(seed + i) * 12 * (1 - Math.abs(0.5 - t));
        const nx = x1 + (x2 - x1) * t + Math.cos(angle) * offset;
        const ny = y1 + (y2 - y1) * t + Math.sin(angle) * offset;
        points.push({ x: nx, y: ny });
      }
      points.push({ x: x2, y: y2 });
      return points;
    }
    return (
      <svg style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 2147483647 }}>
        {trail.slice(0, trail.length - 1).map((point, i) => {
          const next = trail[i + 1];
          if (!next) return null;
          const color = point.color;
          const pathPoints = lightningPath(point.x, point.y, next.x, next.y, 4, i);
          const pathData = pathPoints.map((p, idx) => idx === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`).join(' ');
          return (
            <path
              key={i}
              d={pathData}
              stroke={color}
              strokeWidth={2.5 - i * (1.5 / TRAIL_LENGTH)}
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity={0.7 - i * (0.5 / TRAIL_LENGTH)}
              filter={`drop-shadow(0 0 12px ${color})`}
              fill="none"
            />
          );
        })}
      </svg>
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