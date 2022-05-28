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
  background: {
    alt: string
    image: {
      src: string
    }
  }[]
}
