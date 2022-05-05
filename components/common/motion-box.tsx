import { HTMLMotionProps, m } from 'framer-motion'
import { styled } from 'stitches.config'

export const MotionBox = styled(m.div, {})

export const tappableImageAnim: HTMLMotionProps<'div'> = {
  whileHover: {
    scale: 1.05,
    opacity: 0.8,
    transition: { ease: 'easeOut' },
  },
}
