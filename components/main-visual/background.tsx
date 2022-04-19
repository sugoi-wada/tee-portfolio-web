import { CSS } from '@stitches/react'
import { Box } from 'components/common'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useViewportScroll,
} from 'framer-motion'
import { PropsWithChildren, useEffect } from 'react'
import { styled } from 'stitches.config'
import { Config } from 'types'
import { useBackgroundImage } from './use-background-image'

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

const ParallaxYMotionDiv = ({ children }: PropsWithChildren<unknown>) => {
  const { scrollY } = useViewportScroll()
  const translateY = useMotionValue(0)
  const translateYMotion = useMotionTemplate`translateY(${translateY}px)`

  useEffect(() => {
    scrollY.onChange((latest) => {
      translateY.set(latest / 2)
    })
    return () => scrollY.destroy()
  }, [scrollY, translateY])

  return (
    <motion.div
      style={{ transform: translateYMotion, height: '100%', width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

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
      <ParallaxYMotionDiv>
        <BackgroundImage ref={firstImageRef} />
        <BackgroundImage ref={secondImageRef} />
      </ParallaxYMotionDiv>
    </Box>
  )
}
