import { buildUrl } from 'cloudinary-build-url';

export const transformBlurred = (imageName: string) => buildUrl(imageName, {
  cloud: {
    cloudName: "dta9vptzh",
  },
  transformations: {
    effect: "blur:1000",
    type: 'scale',
    quality: 1,
    width: 500,
    height: 500,
  }
});

export const transform = (imageName: string, size: number) => buildUrl(imageName, {
  cloud: {
    cloudName: "dta9vptzh",
  },
  transformations: {
    width: size,
    height: size,
  }
});