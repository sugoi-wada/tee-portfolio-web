export interface PhotoGroup {
  slug: string
  shootingDate: string
  images: Image[]
  character: string
  photographer: Photographer
}

export interface Image {
  slug: string
  image: {
    src: string
  }
  thumbnail: {
    src: string
  }
  ratio: string
}

export interface Photographer {
  slug: string
  name: string
}
