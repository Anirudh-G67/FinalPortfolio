import { useState, useEffect } from 'react';

export interface AmbientColor {
  name: string;
  value: string;
}

export const useAmbientLight = () => {
  const [ambientColor, setAmbientColor] = useState<string>('cyan');

  const ambientColors: AmbientColor[] = [
    { name: 'cyan', value: '#33ffda' },
    { name: 'purple', value: '#8b5cf6' },
    { name: 'pink', value: '#ec4899' },
    { name: 'orange', value: '#f97316' },
    { name: 'blue', value: '#3b82f6' }
  ];

  useEffect(() => {
    const savedColor = localStorage.getItem('ambientColor');
    if (savedColor && ambientColors.some(color => color.name === savedColor)) {
      setAmbientColor(savedColor);
    }
  }, []);

  const handleSetAmbientColor = (colorName: string) => {
    setAmbientColor(colorName);
    localStorage.setItem('ambientColor', colorName);
  };

  return {
    ambientColor,
    setAmbientColor: handleSetAmbientColor,
    ambientColors
  };
};