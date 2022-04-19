import axios from 'axios'
import axiosRetry from 'axios-retry'
import { errorHandler } from './error-handler'
import {
  Contents,
  CreateClientParams,
  Field,
  GetIgMedia,
  GetIgMediaFields,
} from './types'

export const createClient = ({
  accessToken,
  version = 'v13.0',
  retryOnError = true,
  retryLimit = 3,
}: CreateClientParams) => {
  if (!accessToken) throw new Error('accessToken parameter is required.')
  if (retryLimit > 10)
    throw new Error('retryLimit should be a value less than or equal to 10.')

  const baseUrl = new URL(`https://graph.facebook.com/${version}`)

  const axiosInstance = axios.create({
    baseURL: baseUrl.toString(),
    params: { access_token: accessToken },
  })
  if (retryOnError) {
    axiosRetry(axiosInstance, {
      retries: retryLimit,
      retryCondition: (error) => {
        return error.response?.status === 400 || error.response?.status === 500
      },
      retryDelay: (retryCount) => {
        return retryCount * 1000
      },
    })
  }

  const getIgMedia = async ({
    igMediaId,
    fields,
  }: GetIgMedia): Promise<
    Contents<Pick<GetIgMediaFields, typeof fields[number]>>
  > => {
    if (!igMediaId) throw new Error('igMediaId parameter is required.')

    const url = new URL(`/${igMediaId}/media`, baseUrl.toString())
    if (fields && fields.length) {
      const { encoded } = parseFields(fields)
      url.search = encoded
    }

    try {
      const { data } = await axiosInstance.get(url.pathname + url.search)
      return data
    } catch (err) {
      return errorHandler(err)
    }
  }

  return {
    getIgMedia,
  }
}

function parseFields(fields: Array<keyof Field>) {
  const raw = fields.join(',')
  const encoded = encodeURIComponent(raw)
  return { raw: `fields=${raw}`, encoded: `fields=${encoded}` }
}
