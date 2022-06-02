import cloudinary from "cloudinary"

import { buildUrl } from 'cloudinary-build-url';

import fs from 'fs';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const getPhotos = async (tag: string) => {
  const { resources } = await cloudinary.v2.api.resources_by_tag(tag)

  return resources
}

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