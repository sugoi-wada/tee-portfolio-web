import { CSS } from '@stitches/react'
import { styled } from 'stitches.config'
import { Config } from 'types'

const BackgroundImage = styled('header', {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'absolute',
})

export const Background = ({
  css,
  bgImages,
}: {
  css?: CSS
  bgImages: Config['bgImages']
}) => {
  const imageUrl = bgImages[0]

  return (
    <BackgroundImage
      css={{
        backgroundImage: `url(${imageUrl})`,
        ...css,
      }}
    ></BackgroundImage>
  )
}
