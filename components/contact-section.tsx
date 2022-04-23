import { styled } from 'stitches.config'
import { ExternalLink, Text } from './common'
import { SNSListBlock } from './main-visual/sns-list-block'
import { Section } from './section'
import { SectionTitle } from './section-title'

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '$sp-large',
  marginX: 'auto',
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
  return (
    <Section
      id="contact"
      css={{
        backgroundColor: '$pink',
      }}
    >
      <SectionTitle>CONTACT</SectionTitle>
      <Flex>
        <Text css={{ textAlign: 'center', fontWeight: '$thin' }}>
          お問い合せは、各種SNSのDM、またはGoogleフォームにて承っております。
        </Text>
        <SNSListBlock css={{ marginY: '$5' }} />
        <ExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE-fj4wvnzr2YWSqW9MqWbV3q4jV32bKySycYBEJZBob9knA/viewform"
          frame="circle"
          card="hovered"
          css={{
            display: 'flex',
            alignItems: 'center',
            paddingX: '$6',
            paddingY: '$4',
            color: '$black',
            fontSize: '$5',
          }}
        >
          Googleフォームでお問い合せ
          <ChevronRight
            as="span"
            css={{
              paddingLeft: '$2',
            }}
          />
        </ExternalLink>
      </Flex>
    </Section>
  )
}
