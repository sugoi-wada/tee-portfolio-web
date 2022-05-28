import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'stitches.config'
import { StyledBox } from './base'

const StyledLink = styled(StyledBox('a'), {})

export type LinkProps = ComponentPropsWithoutRef<typeof StyledLink> & {
  externalLink?: boolean
}

export const Link = ({
  children,
  externalLink = false,
  ...props
}: LinkProps) => {
  const externalLinkProps = externalLink
    ? {
        target: '_blank',
        rel: 'noopener',
      }
    : {}

  return (
    <StyledLink {...externalLinkProps} {...props}>
      {children}
    </StyledLink>
  )
}
