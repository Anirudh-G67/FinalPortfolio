import React from 'react';
import { useAmbientLight } from '../hooks/useAmbientLight';

export const AmbientLight: React.FC = () => {
  const { ambientColor, ambientColors } = useAmbientLight();
  
  const currentColor = ambientColors.find(color => color.name === ambientColor);
  
  if (!currentColor) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 opacity-5"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${currentColor.value} 0%, transparent 50%),
                     radial-gradient(circle at 80% 80%, ${currentColor.value} 0%, transparent 50%),
                     radial-gradient(circle at 40% 70%, ${currentColor.value} 0%, transparent 50%)`
      }}
    />
  );
};