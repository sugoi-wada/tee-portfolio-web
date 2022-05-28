import type { TargetAndTransition, Variants } from 'framer-motion'
import { m } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'stitches.config'

const StyledMotionBox = styled(m.div, {})

export const MotionBox = ({
  children,
  ...props
}: ComponentPropsWithoutRef<typeof StyledMotionBox> & {
  whileHover?:
    | keyof typeof motionVariants
    | (keyof typeof motionVariants)[]
    | TargetAndTransition
}) => {
  return (
    <StyledMotionBox variants={motionVariants} {...props}>
      {children}
    </StyledMotionBox>
  )
}

export const motionVariants: Variants = {
  touchableImage: {
    scale: 1.05,
    opacity: 0.8,
    transition: { ease: 'easeOut' },
  },
}
