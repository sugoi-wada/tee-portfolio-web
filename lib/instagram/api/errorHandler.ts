import axios, { AxiosRequestHeaders } from 'axios'

export const errorHandler = (errorResponse: unknown): never => {
  if (!axios.isAxiosError(errorResponse)) {
    throw errorResponse
  }

  const { config, response } = errorResponse
  if (!response?.data) {
    throw errorResponse
  }

  const { data } = response
  const errorData: {
    code: number
    type: string
    message: string
    user_title: string
    user_msg: string
    request?: {
      method?: string
      headers?: AxiosRequestHeaders
      url?: string
    }
  } = {
    code: data.error.code,
    type: data.error.type,
    message: data.error.message,
    user_title: data.error.error_user_title,
    user_msg: data.error.error_user_msg,
  }

  if (config) {
    errorData.request = {
      method: config.method,
      headers: config.headers,
    }

    if (config.url) {
      const url = new URL(config.url, config.baseURL)
      errorData.request.url = url.toString()
    }
  }

  const error = new Error()
  error.name = `${data.status} ${data.code}`
  try {
    error.message = JSON.stringify(errorData, null, 2)
  } catch {
    error.message = data.message
  }
  throw error
}
