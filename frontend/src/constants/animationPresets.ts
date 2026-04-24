export const animationPresets = {
  small: {
    distance: 10,
    duration: 0.2,
    delay: 0,
    blurAmount: 2,
  },
  medium: {
    distance: 20,
    duration: 0.3,
    delay: 0.3,
    blurAmount: 4,
  },
  large: {
    distance: 30,
    duration: 0.4,
    delay: 0.5,
    blurAmount: 6,
  },
  extralarge: {
    distance: 60,
    duration: 0.8,
    delay: 0.8,
    blurAmount: 10,
  },
} as const;
