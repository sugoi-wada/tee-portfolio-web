import { styled } from '@stitches/react'

export const Box = styled('div', {
  variants: {
    frame: {
      rounded: {
        overflow: 'hidden',
        borderRadius: '10px',
      },
    },
  },
})

export const Text = styled('p', {})
