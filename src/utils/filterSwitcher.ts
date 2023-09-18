export const applyEffect = (effect: string) => {
  switch (effect) {
    case 'grayscale':
      return `
          filter: grayscale(100%);
        `;
    case 'sepia':
      return `
          filter: sepia(100%);
        `;
    case 'blur':
      return `
          filter: blur(5px);
        `;
    case 'brightness':
      return `
          filter: brightness(200%);
        `;
    case 'contrast':
      return `
          filter: contrast(200%);
        `;
    case 'hue':
      return `
          filter: hue-rotate(90deg);
        `;
    case 'invert':
      return `
          filter: invert(100%);
        `;
    case 'saturate':
      return `
          filter: saturate(8);
        `;
    case 'none':
      return `
          filter: none;
        `;
  }
};
