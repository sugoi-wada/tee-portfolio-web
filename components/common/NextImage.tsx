import { CSS } from '@stitches/react'
import Image, { ImageProps } from 'next/image'
import { Box } from './Base'

export type NextImageProps = ImageProps & {
  css?: CSS
}

export const NextImage = ({ css, ...imageProps }: NextImageProps) => {
  return <Box as={Image} css={css} {...imageProps} alt={imageProps.alt} />
}
