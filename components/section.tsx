import type { ComponentProps, PropsWithChildren } from 'react'
import { styled } from 'stitches.config'
import { MotionBox } from './common'

const StyledSection = styled('section', {
  paddingTop: '$6',
  paddingBottom: '$8',
  paddingX: '$1',
  backgroundColor: 'white',
})

export const Section = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof StyledSection>>) => {
  return (
    <StyledSection {...props}>
      <MotionBox
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 50 }}
        transition={{
          duration: 0.25,
          delay: 0.25,
          ease: 'easeInOut',
        }}
        viewport={{ once: true }}
      >
        {children}
      </MotionBox>
    </StyledSection>
  )
}
