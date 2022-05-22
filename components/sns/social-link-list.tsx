import type { VariantProps } from '@stitches/react'
import { ExternalLink, MotionBox, StyledBox } from 'components/common'
import type { SVG } from 'lib/icons'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lib/icons'
import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'stitches.config'
import type { OwnedSNSName } from './types'

const StyledSocialLinkList = styled(StyledBox('ul'), {
  display: 'flex',
  paddingLeft: '0',
  marginY: '0',
  justifyContent: 'space-around',
})

const StyledSocialLinkListItem = styled(StyledBox('li'), {
  listStyle: 'none',
})

export const SocialLinkList = ({
  color,
  list = ['instagram', 'twitter', 'facebook'],
  ...props
}: ComponentPropsWithoutRef<typeof StyledSocialLinkList> & {
  color?: VariantProps<typeof SVG>['color']
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
  color: VariantProps<typeof SVG>['color']
}) => {
  switch (type) {
    case 'twitter':
      return (
        <ExternalLink href="https://twitter.com/teeee_7777">
          <TwitterIcon
            color={color ?? 'white'}
            frame="hovered"
            height={36}
            width={36}
          />
        </ExternalLink>
      )
    case 'facebook':
      return (
        <ExternalLink href="https://facebook.com/100065661465929">
          <FacebookIcon
            color={color ?? 'white'}
            frame="hovered"
            height={36}
            width={36}
          />
        </ExternalLink>
      )
    case 'instagram':
      return (
        <ExternalLink href="https://instagram.com/teeee_7777">
          <InstagramIcon
            color={color ?? 'white'}
            frame="hovered"
            height={36}
            width={36}
          />
        </ExternalLink>
      )
  }
}
