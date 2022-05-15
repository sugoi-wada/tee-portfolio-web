import type { ComponentPropsWithRef } from 'react'
import { styled } from 'stitches.config'
import { StyledBox } from './base'

const Anchor = styled(StyledBox('a'), {
  paddingX: '$2',
})

export type ExternalLinkProps = ComponentPropsWithRef<typeof Anchor>

export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => {
  return (
    <Anchor target="_blank" rel="noopener" {...props}>
      {children}
    </Anchor>
  )
}
