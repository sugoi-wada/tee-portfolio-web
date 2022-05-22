import type { IconProps } from '@radix-ui/react-icons/dist/types'
import type { CSS } from '@stitches/react'
import { ExternalLink } from 'components/common'
import { m } from 'framer-motion'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lib/icons'
import { styled } from 'stitches.config'

const snsSources = [
  {
    image: TwitterIcon,
    link: {
      href: 'https://twitter.com/teeee_7777',
    },
  },
  {
    image: InstagramIcon,
    link: {
      href: 'https://instagram.com/teeee_7777',
    },
  },
  {
    image: FacebookIcon,
    link: {
      href: 'https://facebook.com/100065661465929',
    },
  },
]

const SNSList = styled('ul', {
  display: 'flex',
  paddingLeft: '0',
  marginY: '0',
  justifyContent: 'space-around',
})

const SNSListItem = styled('li', {
  listStyle: 'none',
})

export const SNSListBlock = ({
  css,
  color = 'white',
}: {
  css?: CSS
  color?: IconProps['color']
}) => {
  return (
    <SNSList css={css ?? {}}>
      {snsSources.map((sns, i) => (
        <SNSListItem key={i}>
          <m.div whileHover={{ scale: 1.2 }}>
            <ExternalLink
              {...sns.link}
              css={{ filter: 'drop-shadow(0px 4px 4px $shadows-card)', color }}
            >
              <sns.image height={36} width={36} />
            </ExternalLink>
          </m.div>
        </SNSListItem>
      ))}
    </SNSList>
  )
}
