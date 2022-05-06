import type { CSS } from '@stitches/react'
import { Box } from './common'

export type FooterProps = {
  css?: CSS
}

export const Footer = ({ css }: FooterProps) => {
  return (
    <Box css={{ textAlign: 'center', ...css }}>
      <Box as="p">&copy; Tee</Box>
      <Box
        as="p"
        css={{
          marginTop: '$2',
          marginBottom: '$2',
        }}
      >
        Cosplayer from 🇹🇼
      </Box>
    </Box>
  )
}
