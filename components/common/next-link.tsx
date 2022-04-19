import { CSS } from '@stitches/react'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import { styled } from 'stitches.config'

const Anchor = styled('a', {
  textDecoration: 'none',
  textTransform: 'uppercase',
})

export type NextLinkProps = LinkProps & {
  css?: CSS
}

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
