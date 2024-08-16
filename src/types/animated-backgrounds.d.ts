declare module 'animated-backgrounds' {
    import * as React from 'react';
  
    export interface AnimatedBackgroundProps {
      animationName: string;
      className?: string;
    }
  
    export class AnimatedBackground extends React.Component<AnimatedBackgroundProps> {}
  }
  