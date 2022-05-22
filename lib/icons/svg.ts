import { styled } from 'stitches.config'

export const SVG = styled('svg', {
  variants: {
    frame: {
      hovered: {
        filter: 'drop-shadow(0px 4px 4px $shadows-card)',
      },
    },
  },
})
