import type { CSS } from '@stitches/react'
import { styled } from 'stitches.config'

export function StyledSvg(originalColorCss?: CSS) {
  const originalColorVariant = originalColorCss
    ? {
        original: {
          ...originalColorCss,
        },
      }
    : {}

  return styled('svg', {
    variants: {
      frame: {
        hovered: {
          filter: 'drop-shadow(0px 4px 4px $shadows-card)',
        },
      },
      color: {
        white: {
          color: 'white',
        },
        blackAlpha: {
          color: '$blackAlpha',
        },
        ...originalColorVariant,
      },
    },
    defaultVariants: {
      color: originalColorCss ? 'original' : 'white',
    },
  })
}

export const Svg = StyledSvg()
