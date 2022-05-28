import { keyframes } from '@stitches/react'
import { StyledBox } from 'components/common'
import { styled } from 'stitches.config'

const scrolldownAnim = keyframes({
  '0%': {
    height: 0,
    top: 0,
    opacity: 0,
  },
  '30%': {
    height: '70%',
    opacity: 1,
  },
  '100%': {
    height: 0,
    top: '100%',
    opacity: 0,
  },
})

const StyledScrollDown = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bottom: 0,
  height: 150,
  '@tablet': {
    height: 80,
  },
  '@pc-small': {
    transform: 'translateX(-50%)',
    left: '50%',
    height: 80,
  },
})

const Arrow = styled('div', {
  position: 'relative',
  width: 1,
  height: '100%',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '$pink',
    animation: `${scrolldownAnim} 1800ms ease-in-out infinite`,
    opacity: 0,
  },
})

const ScrollText = styled(StyledBox('p'), {
  color: '$pink',
  marginX: '$2',
  letterSpacing: '0.5rem',
  display: 'none',
  defaultVariants: {
    fontLocale: 'en',
  },
  '@tablet': {
    display: 'block',
  },
})

export const ScrollDown = () => {
  return (
    <StyledScrollDown>
      <ScrollText>Scroll</ScrollText>
      <Arrow />
    </StyledScrollDown>
  )
}
