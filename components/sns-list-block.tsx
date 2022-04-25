import { CSS } from '@stitches/react'
import { ExternalLink, NextImage } from 'components/common'
import { motion } from 'framer-motion'
import { styled } from 'stitches.config'

const snsSources = [
  {
    image: {
      src: '/assets/twitter.svg',
      alt: 'twitter',
    },
    link: {
      href: 'https://twitter.com/teeee_7777',
    },
  },
  {
    image: {
      src: '/assets/instagram.svg',
      alt: 'instagram',
    },
    link: {
      href: 'https://instagram.com/teeee_7777',
    },
  },
  {
    image: {
      src: '/assets/facebook.svg',
      alt: 'facebook',
    },
    link: {
      href: 'https://facebook.com/teeee_7777',
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

export const SNSListBlock = ({ css }: { css?: CSS }) => {
  return (
    <SNSList css={css}>
      {snsSources.map((sns, i) => (
        <SNSListItem key={i}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <ExternalLink
              {...sns.link}
              css={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            >
              <NextImage
                height={36}
                width={36}
                {...sns.image}
                alt={sns.image.alt}
              />
            </ExternalLink>
          </motion.div>
        </SNSListItem>
      ))}
    </SNSList>
  )
}
