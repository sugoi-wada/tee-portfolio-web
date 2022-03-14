export interface Photo {
  slug: string
  shootingDate: string
  photo: {
    src: string
  }
  character: string
  photographer: Photographer
}

export interface Photographer {
  name: string
}
