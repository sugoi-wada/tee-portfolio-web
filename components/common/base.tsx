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

export const buttonStyles = {
  frame: {
    rounded: {
      borderRadius: '10px',
    },
    circle: {
      borderRadius: '9999px',
    },
  },
  card: {
    hovered: {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 6px',
      transition: 'box-shadow .3s',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 16px',
      },
    },
  },
}
