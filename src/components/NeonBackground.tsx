import React, { useEffect, useState } from 'react';

// Precompute random positions for 64 circles (so they don't change on every render)
const CIRCLE_POSITIONS = Array.from({ length: 64 }, (_, i) => {
  // Padding to avoid edges
  const x = Math.random() * (1920 - 180) + 90;
  const y = Math.random() * (1080 - 180) + 90;
  return { x, y };
});

export const NeonBackground: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pulse, setPulse] = useState(1);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    window.addEventListener('DOMContentLoaded', checkDark);
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('DOMContentLoaded', checkDark);
      observer.disconnect();
    };
  }, []);

  // Animate a subtle pulse for shininess
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      setPulse(0.8 + 0.25 * Math.sin(frame / 40));
      frame++;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 64 colors evenly spaced in the HSL color wheel
  const colors = Array.from({ length: 64 }, (_, i) => `hsl(${Math.round((i * 360) / 64)}, 100%, 60%)`);

  if (!isDarkMode) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        {/* 64 randomly spread colored circles for ambient lighting, with shiny pulse */}
        {colors.map((color, idx) => {
          const { x: cx, y: cy } = CIRCLE_POSITIONS[idx];
          return (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r={100}
              fill={color}
              opacity={0.22 * pulse}
              style={{ filter: `blur(48px) brightness(1.2)` }}
            />
          );
        })}
      </svg>
    </div>
  );
}; 