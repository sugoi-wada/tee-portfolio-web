import type { CSS } from '@stitches/react'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { styled } from 'stitches.config'

const StyledImage = styled(Image, {})

export type NextImageProps = ImageProps & { css?: CSS }

export const NextImage = (props: NextImageProps) => {
  return <StyledImage {...props} alt={props.alt} />
}
