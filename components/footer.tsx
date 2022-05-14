import type { CSS } from '@stitches/react'
import { useLocale } from 'locales'
import { Box } from './common'

export type FooterProps = {
  css?: CSS
}

export const Footer = ({ css }: FooterProps) => {
  const { t } = useLocale()

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
        {t.FOOTER_DESC}
      </Box>
    </Box>
  )
}
