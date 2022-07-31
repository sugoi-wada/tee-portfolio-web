import { omit, pick } from 'lib/utils'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { objectKeys } from 'ts-extras'
import { StyledBox } from './base'

const linkPropsItem: Required<LinkProps> = {
  href: '',
  as: '',
  replace: false,
  scroll: false,
  shallow: false,
  passHref: false,
  prefetch: false,
  locale: false,
  legacyBehavior: false,
  soft: false,
  onMouseEnter: () => {
    return
  },
  onClick: () => {
    return
  },
} as const

const linkPropsKeys = objectKeys(linkPropsItem)

const Anchor = StyledBox('a')
type AnchorProps = Omit<
  ComponentPropsWithoutRef<typeof Anchor>,
  keyof LinkProps
>
export type NextLinkProps = LinkProps & AnchorProps

export const NextLink = ({ children, ...props }: NextLinkProps) => {
  const linkProps: LinkProps = pick(props, linkPropsKeys)
  const anchorProps: AnchorProps = omit(props, linkPropsKeys)

  return (
    <Link {...linkProps} passHref>
      <Anchor {...anchorProps}>{children}</Anchor>
    </Link>
  )
}
