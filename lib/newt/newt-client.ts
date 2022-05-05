import {
  Content,
  createClient,
  GetContentQuery,
  GetContentsQuery,
} from 'newt-client-js'
import { Config, Photo, PhotoGroup } from './types'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID as string,
  token: process.env.NEWT_API_TOKEN as string,
  apiType: process.env.NEWT_API_TYPE as 'cdn' | 'api',
})

export const fetchApp = async () => {
  const app = await client.getApp({
    appUid: process.env.NEWT_APP_UID as string,
  })
  return app
}

export const fetchPhotoGroups = async (query: GetContentsQuery = {}) => {
  const items = await fetchItems<PhotoGroup>(
    process.env.NEWT_PHOTO_GROUP_MODEL_UID as string,
    {
      order: ['-createdAt'],
      ...query,
    }
  )

  return items
}

export const fetchPhotos = async (query: GetContentsQuery = {}) => {
  const items = await fetchItems<Photo>(
    process.env.NEWT_PHOTO_MODEL_UID as string,
    {
      order: ['-createdAt'],
      ...query,
    }
  )

  return items
}

export const fetchCurrentPhotoGroup = async (
  options: Omit<GetContentsQuery, 'limit'> = {}
) => {
  return await fetchSingleItem<PhotoGroup>(
    process.env.NEWT_PHOTO_GROUP_MODEL_UID as string,
    options
  )
}

export const fetchCurrentPhoto = async (
  options: Omit<GetContentsQuery, 'limit'> = {}
) => {
  return await fetchSingleItem<Photo>(
    process.env.NEWT_PHOTO_MODEL_UID as string,
    options
  )
}

export const fetchConfig = async () => {
  const items = await fetchItems<Config>(
    process.env.NEWT_CONFIG_MODEL_UID as string,
    {
      depth: 1,
      limit: 1,
    }
  )

  return items[0] || null
}

const fetchItems = async <T>(modelUid: string, query: GetContentsQuery) => {
  const { items } = await client.getContents<Content & T>({
    appUid: process.env.NEWT_APP_UID as string,
    modelUid,
    query: {
      depth: 1,
      order: ['-createdAt'],
      ...query,
    },
  })
  return items
}

const fetchSingleItem = async <T>(
  modelUid: string,
  options: GetContentQuery
) => {
  const items = await fetchItems<T>(modelUid, {
    depth: 2,
    limit: 1,
    ...options,
  })

  return items[0] || null
}
