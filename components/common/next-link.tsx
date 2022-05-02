import Link, { LinkProps } from 'next/link'
import { ComponentProps, PropsWithChildren } from 'react'
import { Anchor } from './base'

export type NextLinkProps = LinkProps & ComponentProps<typeof Anchor>

export const NextLink = ({
  children,
  css,
  ...linkProps
}: PropsWithChildren<NextLinkProps>) => {
  return (
    <Link {...linkProps} passHref>
      <Anchor css={css}>{children}</Anchor>
    </Link>
  )
}
