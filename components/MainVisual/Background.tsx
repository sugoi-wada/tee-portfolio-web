import { CSS } from '@stitches/react'
import { Box } from 'components/common'
import { styled } from 'stitches.config'
import { Config } from 'types'
import { useBackgroundImage } from './useBackgroundImage'

const BackgroundImage = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  overflow: 'hidden',
})

export const Background = ({
  css,
  bgImages,
}: {
  css?: CSS
  bgImages: Config['bgImages']
}) => {
  const { firstImageRef, secondImageRef } = useBackgroundImage({ bgImages })

  return (
    <Box
      css={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden',
        ...css,
      }}
    >
      <BackgroundImage ref={firstImageRef} />
      <BackgroundImage ref={secondImageRef} />
    </Box>
  )
}
