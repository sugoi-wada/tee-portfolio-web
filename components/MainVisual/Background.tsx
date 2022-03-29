import { CSS } from '@stitches/react'
import { styled } from 'stitches.config'

const BackgroundImage = styled('header', {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'absolute',
})

export const Background = ({ css }: { css?: CSS }) => {
  const imageUrl =
    'https://storage.googleapis.com/p_622dfd54b065ee00185dac02/eb328ca1-a7ff-40e0-8a05-3d40c4ac049a/1000x1000/DSC_6945-D-Edit.jpg'
  return (
    <BackgroundImage
      css={{
        backgroundImage: `url(${imageUrl})`,
        ...css,
      }}
    ></BackgroundImage>
  )
}
