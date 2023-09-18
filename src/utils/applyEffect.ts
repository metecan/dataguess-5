export const applyEffect = (effect: string) => {
  switch (effect) {
    case 'grayscale':
      return 'grayscale(100%)';

    case 'sepia':
      return 'sepia(100%)';

    case 'blur':
      return 'blur(5px)';

    case 'brightness':
      return 'brightness(200%)';

    case 'contrast':
      return 'contrast(200%)';

    case 'hue':
      return 'hue-rotate(90deg)';

    case 'invert':
      return 'invert(100%)';

    case 'saturate':
      return 'saturate(8)';

    case 'none':
      return 'none';

    default:
      return 'none';
  }
};
