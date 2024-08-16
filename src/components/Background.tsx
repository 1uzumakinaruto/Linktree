// background.tsx
// background.tsx
import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <AnimatedBackground
        animationName="starryNight" // Ensure this is a valid animation name
        className="absolute inset-0"
      />
    </div>
  );
};

export default Background;

