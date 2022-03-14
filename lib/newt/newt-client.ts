import { Content, createClient, GetContentsQuery } from 'newt-client-js'
import { Photo } from './types'

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

export const fetchPhotos = async (query: GetContentsQuery) => {
  const { items } = await client.getContents<Content & Photo>({
    appUid: process.env.NEWT_APP_UID as string,
    modelUid: process.env.NEWT_PHOTO_MODEL_UID as string,
    query: {
      depth: 1,
      limit: 10,
      order: ['-createdAt'],
      ...query,
    },
  })
  return items
}

export const fetchCurrentPhoto = async (options: { slug: string }) => {
  const { slug } = options
  if (!slug) return null
  const { items } = await client.getContents({
    appUid: process.env.NEWT_APP_UID as string,
    modelUid: process.env.NEWT_PHOTO_MODEL_UID as string,
    query: {
      depth: 2,
      limit: 1,
      slug,
    },
  })
  return items[0] || null
}
