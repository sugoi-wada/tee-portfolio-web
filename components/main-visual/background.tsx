import { CSS } from '@stitches/react'
import { Box, NextImage } from 'components/common'
import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { PropsWithChildren } from 'react'
import { Config } from 'types'
import { useBackgroundImage } from './use-background-image'

const ParallaxYMotionDiv = ({ children }: PropsWithChildren<unknown>) => {
  const { scrollY } = useViewportScroll()
  const smoothScrollY = useSpring(scrollY, {
    damping: 100,
    stiffness: 500,
    mass: 3,
  })
  const translateY = useTransform(
    smoothScrollY,
    (smoothScrollY) => smoothScrollY / 2
  )
  const translateYMotion = useMotionTemplate`translateY(${translateY}px)`

  return (
    <Box
      as={motion.div}
      style={{ transform: translateYMotion }}
      css={{
        height: '100%',
        width: '100%',
      }}
    >
      {children}
    </Box>
  )
}

export const Background = ({
  css,
  bgImages,
}: {
  css?: CSS
  bgImages: Config['bgImages']
}) => {
  const { refs } = useBackgroundImage({ length: bgImages.length })

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
        {bgImages.map((bgImage, i) => (
          <Box
            key={i}
            ref={refs.current[i]}
            css={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              overflow: 'hidden',
              zIndex: i === 0 ? 1 : 0,
            }}
          >
            <NextImage
              src={bgImage.srcUrl}
              layout="fill"
              sizes="(min-aspect-ratio: 1) 100vw, 100vh"
              objectPosition="top"
              objectFit="cover"
              alt="background image"
              priority={i === 0}
            />
          </Box>
        ))}
      </ParallaxYMotionDiv>
    </Box>
  )
}
