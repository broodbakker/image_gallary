import type { ResourceApiResponse } from "cloudinary";

export interface Iphoto {
  imageLink: ResourceApiResponse["resources"][0]
  handleClick: (imageLink: ResourceApiResponse["resources"][0]) => void
}

export interface Iphotos {
  photos: ResourceApiResponse["resources"]
  handleClick: (imageLink: ResourceApiResponse["resources"][0]) => void
}

export interface IHome {
  resources: ResourceApiResponse["resources"]
}

export interface IHomeView {
  mainPhoto: string
  resources: ResourceApiResponse["resources"]
  handleClick: (imageLink: ResourceApiResponse["resources"][0]) => void
}