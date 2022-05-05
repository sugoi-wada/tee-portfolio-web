export interface Character {
  slug: string
  title: string
  name: string
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
  character: string | Character
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
