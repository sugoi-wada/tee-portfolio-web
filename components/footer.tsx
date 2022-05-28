import type { CSS } from '@stitches/react'
import { DEFAULT_LOCALE, useLocale } from 'locales'
import { Box, Text } from './common'

export type FooterProps = {
  css?: CSS
}

export const Footer = ({ css }: FooterProps) => {
  const { t, locale } = useLocale()

  return (
    <Box css={{ textAlign: 'center', ...css }}>
      <Text fontLocale={locale ?? DEFAULT_LOCALE}>&copy; Tee</Text>
      <Text
        fontLocale={locale ?? DEFAULT_LOCALE}
        css={{
          marginTop: '$2',
          marginBottom: '$2',
        }}
      >
        {t['FOOTER_DESC']}
      </Text>
    </Box>
  )
}
