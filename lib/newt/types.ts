export interface PhotoGroup {
  slug: string
  shootingYear: number
  images: Photo[]
  title: string
  character: string
  photographer: Photographer
}

export interface Photo {
  slug: string
  image: {
    src: string
  }
  thumbnail: {
    src: string
  }
  ratio: string
  shootingYear: number
  photographer: string | Photographer | null
  target: string | PhotoGroup
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
