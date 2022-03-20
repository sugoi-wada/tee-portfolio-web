import { Content, createClient, GetContentsQuery } from 'newt-client-js'
import { Photo } from 'types/photo'
import { PhotoGroup } from './types'

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

export const fetchPhotoGroups = async (query: GetContentsQuery) => {
  const items = await fetchItems<PhotoGroup>(
    process.env.NEWT_PHOTO_GROUP_MODEL_UID as string,
    {
      order: ['-createdAt'],
      ...query,
    }
  )

  return items
}

export const fetchCurrentPhotoGroup = async (options: { slug: string }) => {
  return fetchSingleItem<PhotoGroup>(
    process.env.NEWT_PHOTO_GROUP_MODEL_UID as string,
    options
  )
}

export const fetchCurrentPhoto = async (options: { slug: string }) => {
  return fetchSingleItem<Photo>(
    process.env.NEWT_PHOTO_MODEL_UID as string,
    options
  )
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
  options: { slug: string }
) => {
  const { slug } = options
  if (!slug) return null
  const items = await fetchItems<T>(modelUid, {
    depth: 2,
    limit: 1,
    slug,
  })

  return items[0] || null
}
