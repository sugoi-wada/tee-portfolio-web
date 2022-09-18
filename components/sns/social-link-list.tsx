import type { VariantProps } from '@stitches/react'
import { Link, MotionBox, StyledBox } from 'components/common'
import type { StyledSvg } from 'lib/icons'
import { FacebookIcon, TwitterIcon } from 'lib/icons'
import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'stitches.config'
import type { OwnedSNSName } from './types'

const StyledSocialLinkList = styled(StyledBox('ul'), {
  display: 'flex',
  paddingLeft: '0',
  my: '0',
  justifyContent: 'space-around',
})

const StyledSocialLinkListItem = styled(StyledBox('li'), {
  listStyle: 'none',
})

export const SocialLinkList = ({
  color,
  list = ['twitter', 'facebook'],
  ...props
}: ComponentPropsWithoutRef<typeof StyledSocialLinkList> & {
  color?: VariantProps<ReturnType<typeof StyledSvg>>['color']
  list?: OwnedSNSName[]
}) => {
  return (
    <StyledSocialLinkList {...props}>
      {list.map((item, i) => (
        <StyledSocialLinkListItem key={i}>
          <MotionBox whileHover={{ scale: 1.2 }}>
            <LinkIconButton type={item} color={color} />
          </MotionBox>
        </StyledSocialLinkListItem>
      ))}
    </StyledSocialLinkList>
  )
}

const LinkIconButton = ({
  type,
  color,
}: {
  type: OwnedSNSName
  color: VariantProps<ReturnType<typeof StyledSvg>>['color']
}) => {
  switch (type) {
    case 'twitter':
      return (
        <Link href="https://twitter.com/teeee_7777" externalLink>
          <TwitterIcon
            color={color ?? 'white'}
            frame="hovered"
            height={36}
            width={36}
          />
        </Link>
      )
    case 'facebook':
      return (
        <Link href="https://facebook.com/100065661465929" externalLink>
          <FacebookIcon
            color={color ?? 'white'}
            frame="hovered"
            height={36}
            width={36}
          />
        </Link>
      )
  }
}
