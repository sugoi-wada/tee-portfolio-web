import React from 'react'
import { styled, theme } from 'stitches.config'
import { SVG } from './svg'

const StyledFacebookIcon = styled(SVG, {
  variants: {
    color: {
      original: {
        color: theme.colors.facebookMain,
      },
      white: {
        color: 'white',
      },
      blackAlpha: {
        color: '$blackAlpha',
      },
    },
  },
  defaultVariants: {
    color: 'original',
  },
})

export const FacebookIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<typeof StyledFacebookIcon>
>((props, forwardedRef) => {
  return (
    <StyledFacebookIcon
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill="currentColor"
        d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
      />
    </StyledFacebookIcon>
  )
})

FacebookIcon.displayName = 'FacebookIcon'
