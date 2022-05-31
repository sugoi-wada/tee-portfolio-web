import produce from 'immer'
import type {
  Content,
  GetContentParams,
  GetContentQuery,
  GetContentsQuery,
} from 'newt-client-js'
import { createClient } from 'newt-client-js'
import type { Character, Config, Photo } from './types'

const client = createClient({
  spaceUid: process.env['NEWT_SPACE_UID'] as string,
  token: process.env['NEWT_API_TOKEN'] as string,
  apiType: process.env['NEWT_API_TYPE'] as 'cdn' | 'api',
})

export const fetchApp = async () => {
  const app = await client.getApp({
    appUid: process.env['NEWT_APP_UID'] as string,
  })
  return app
}

export const fetchCharacters = async (query: GetContentsQuery = {}) => {
  const items = await fetchItems<Character>(
    process.env['NEWT_TARGET_MODEL_UID'] as string,
    {
      order: ['-createdAt'],
      ...query,
    }
  )

  return items
}

export const fetchPhotos = async (query: GetContentsQuery = {}) => {
  const items = await fetchItems<Photo>(
    process.env['NEWT_PHOTO_MODEL_UID'] as string,
    {
      order: ['-createdAt'],
      ...query,
    }
  )

  return items
}

export const fetchCurrentPhoto = async (
  id: string,
  options: Omit<GetContentsQuery, 'limit'> = {}
) => {
  return await fetchItem<Photo>(
    process.env['NEWT_PHOTO_MODEL_UID'] as string,
    id,
    options
  )
}

export const fetchConfig = async () => {
  const items = await fetchItems<Config>(
    process.env['NEWT_CONFIG_MODEL_UID'] as string,
    {
      depth: 1,
      limit: 1,
    }
  )

  return items[0] || null
}

const fetchItems: <T>(
  modelUid: string,
  options: GetContentsQuery
) => Promise<(Content & T)[]> = async <T>(
  modelUid: string,
  query: GetContentsQuery
) => {
  const { items } = await client.getContents<Content & T>({
    appUid: process.env['NEWT_APP_UID'] as string,
    modelUid,
    query: {
      depth: 1,
      order: ['-createdAt'],
      ...query,
    },
  })
  return items
}

const fetchItem: <T>(
  modelUid: string,
  contentId: GetContentParams['contentId'],
  query?: GetContentQuery
) => Promise<Content & T> = async <T>(
  modelUid: string,
  contentId: GetContentParams['contentId'],
  query?: GetContentQuery
) => {
  const item = await client.getContent<Content & T>(
    produce<GetContentParams>(
      {
        appUid: process.env['NEWT_APP_UID'] as string,
        modelUid,
        contentId,
      },
      (params) => {
        if (query) params.query = query
      }
    )
  )
  return item
}
