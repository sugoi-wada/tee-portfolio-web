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

export interface Config {
  slug: string
  bgImage01: {
    src: string
  }
  bgImage02: {
    src: string
  }
  bgImage03: {
    src: string
  }
  bgImage04: {
    src: string
  }
}
