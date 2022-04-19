import { ComponentProps, PropsWithChildren } from 'react'
import { styled } from 'stitches.config'

const Anchor = styled('a', {
  textDecoration: 'none',
  textTransform: 'uppercase',
})

export type ExternalLinkProps = ComponentProps<typeof Anchor>

export const ExternalLink = ({
  children,
  ...props
}: PropsWithChildren<ExternalLinkProps>) => {
  return <Anchor {...props}>{children}</Anchor>
}
