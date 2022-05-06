import type { CSS } from '@stitches/react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { Anchor } from './base'

export type NextLinkProps = LinkProps & { css?: CSS }

export const NextLink = ({
  children,
  css,
  ...linkProps
}: PropsWithChildren<NextLinkProps>) => {
  return (
    <Link {...linkProps} passHref>
      <Anchor css={css ?? {}}>{children}</Anchor>
    </Link>
  )
}
