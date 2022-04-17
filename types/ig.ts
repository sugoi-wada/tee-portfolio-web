export type IgMedia = IgPhoto | IgVideo

export type IgMediaCommon = {
  id: string
  srcUrl: string
  url: string
}

export type IgPhoto = IgMediaCommon

export type IgVideo = IgMediaCommon & {
  thumbUrl: string
}
