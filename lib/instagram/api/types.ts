export interface CreateClientParams {
  accessToken: string
  version?: string
  retryOnError?: boolean
  retryLimit?: number
}

export interface Client {
  getIgMedia: <T>(params: GetIgMedia) => Promise<Contents<GetIgMediaFields>>
}

export interface GetIgMedia {
  igMediaId: string
  fields: Array<keyof GetIgMediaFields>
}

export type Field = {
  id: string
  media_type: 'CAROUSEL_ALBUM' | 'IMAGE' | 'VIDEO'
  media_product_type: 'AD' | 'FEED' | 'STORY'
  media_url: string
  thumbnail_url?: string
  permalink: string
}

export type GetIgMediaFields = Field

export interface Contents<T> {
  data: Array<T>
  paging: {
    cursors: {
      before: string
      after: string
    }
    next: string
  }
}
