import type { ImageLoader, ImageLoaderProps } from 'next/image'

export const imageKitLoader: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  if (src[0] === '/') src = src.slice(1)
  const srcUrl = new URL(src)
  const searchParams = srcUrl.searchParams
  searchParams.append('tr', imageKitTransformValue(width, quality))
  return `${getEndpoint()}${srcUrl.pathname}?${searchParams.toString()}`
}

function getEndpoint(): string {
  let endpoint = process.env['NEXT_PUBLIC_CDN_URL'] as string
  if (endpoint[endpoint.length - 1] === '/')
    endpoint = endpoint.substring(0, endpoint.length - 1)
  return endpoint
}

function imageKitTransformValue(
  width: ImageLoaderProps['width'],
  quality: ImageLoaderProps['quality']
): string {
  const params = [`w-${width}`]
  if (quality) {
    params.push(`q-${quality}`)
  }
  return params.join(',')
}
