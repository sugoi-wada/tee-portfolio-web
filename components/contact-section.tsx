import { DEFAULT_LOCALE, useLocale } from 'locales'
import { styled } from 'stitches.config'
import { Link, Text } from './common'
import { Section } from './section'
import { SectionTitle } from './section-title'
import { SocialLinkList } from './sns'

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '$tablet',
  mx: 'auto',
})

const ChevronRight = styled('div', {
  position: 'relative',
  display: 'inline-block',
  width: '8px',
  height: '30px',
  '&:before': {
    content: '""',
    width: '8px',
    height: '3px',
    borderRadius: '2px',
    backgroundColor: '$black',
    position: 'absolute',
    display: 'inline-block',
    top: 'calc(50% - 4px)',
    transform: 'rotate(45deg)',
  },
  '&:after': {
    content: '""',
    width: '8px',
    height: '3px',
    borderRadius: '2px',
    backgroundColor: '$black',
    position: 'absolute',
    display: 'inline-block',
    bottom: 'calc(50% - 4px)',
    transform: 'rotate(-45deg)',
  },
})

export const ContactSection = () => {
  const { t, locale } = useLocale()

  return (
    <Section
      id="contact"
      css={{
        backgroundColor: '$pink',
      }}
    >
      <SectionTitle>Contact</SectionTitle>
      <Flex>
        <Text
          fontLocale={locale ?? DEFAULT_LOCALE}
          css={{
            textAlign: 'center',
            marginLeft: '$4',
            marginRight: '$4',
          }}
        >
          {t['CONTACT_DESC']}
        </Text>
        <SocialLinkList css={{ width: '200px', my: '$5' }} color="blackAlpha" />
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE-fj4wvnzr2YWSqW9MqWbV3q4jV32bKySycYBEJZBob9knA/viewform"
          frame="circle"
          card="hovered"
          fontLocale={locale ?? DEFAULT_LOCALE}
          css={{
            display: 'flex',
            alignItems: 'center',
            px: '$6',
            py: '$4',
            color: '$black',
            fontSize: '$5',
          }}
          externalLink
        >
          {t['CONTACT_GOOGLE_FORM_BUTTON']}
          <ChevronRight
            as="span"
            css={{
              paddingLeft: '$2',
            }}
          />
        </Link>
      </Flex>
    </Section>
  )
}
