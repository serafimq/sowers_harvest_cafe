export type Direction = 'up' | 'down' | 'left' | 'right';

export interface AnimationVariant {
  hidden: {
    y?: number;
    x?: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
      ease: number[];
    };
  };
  show: {
    y: number;
    x: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
      ease: number[];
    };
  };
} 