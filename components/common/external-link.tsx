import { ComponentProps, PropsWithChildren } from 'react'
import { styled } from 'stitches.config'
import { buttonStyles } from './base'

const Anchor = styled('a', {
  textDecoration: 'none',
  paddingX: '$2',
  variants: { ...buttonStyles },
})

export type ExternalLinkProps = ComponentProps<typeof Anchor>

export const ExternalLink = ({
  children,
  ...props
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <Anchor target="_blank" rel="noopener" {...props}>
      {children}
    </Anchor>
  )
}
