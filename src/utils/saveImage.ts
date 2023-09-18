import { applyEffect } from './applyEffect';

export const SaveImage = (name: string, file: string, filter: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.src = file || '';

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    if (ctx) {
      ctx.filter = applyEffect(filter || 'none');
    }

    if (ctx) {
      ctx.drawImage(image, 0, 0);
    }

    const link = document.createElement('a');
    link.download = `${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
};
