import type { GetIgMedia } from './api'
import { createClient } from './api'

const client = createClient({
  accessToken: process.env['INSTAGRAM_TOKEN'] as string,
})

export const fetchIgMedia = async (fields: GetIgMedia['fields']) => {
  const media = await client.getIgMedia({
    igMediaId: process.env['INSTAGRAM_ACOUNT_ID'] as string,
    fields,
  })
  return media
}
