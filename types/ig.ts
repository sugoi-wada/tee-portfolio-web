export type IgMedia = IgPhoto | IgVideo

export type IgMediaCommon = {
  id: string
  srcUrl: string
  url: string
  thumbUrl: string
}

export type IgPhoto = IgMediaCommon

export type IgVideo = IgMediaCommon
