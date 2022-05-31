import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { DEFAULT_LOCALE, useLocale } from 'locales'
import Image from 'next/image'
import avatar from 'public/assets/avatar.jpg'
import { styled } from 'stitches.config'
import { Text } from './common'
import { Section } from './section'
import { SectionTitle } from './section-title'

const AvatarBox = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '300px',
  maxHeight: '300px',
  mx: '$1',
  my: '$6',
  '@tablet': {
    marginRight: '$6',
  },
  '@pc-small': {
    mx: '$6',
    maxWidth: '400px',
    maxHeight: '400px',
  },
  position: 'relative',
  '&:before': {
    content: '""',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: '$gray600',
    borderWidth: '1px',
    borderTopRightRadius: '30%',
    borderBottomLeftRadius: '30%',
    borderTopLeftRadius: '70%',
    borderBottomRightRadius: '70%',
    transform: 'rotate(-20deg)',
  },
})

const Avatar = styled('div', {
  width: '100%',
  height: '100%',
  borderTopRightRadius: '30%',
  borderBottomLeftRadius: '30%',
  borderTopLeftRadius: '70%',
  borderBottomRightRadius: '70%',
  overflow: 'hidden',
})

const RootFlex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@tablet': {
    flexDirection: 'row',
  },
  px: '$1',
  justifyContent: 'center',
  alignItems: 'center',
})

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mx: '0',
  '@tablet': {
    mx: '$2',
  },
})

const Description = styled(Text, {
  fontSize: '$3',
  letterSpacing: '0.02em',
  lineHeight: '1.8em',
  textAlign: 'center',
  paddingTop: '$4',
  px: '$2',
  maxWidth: '560px',
  '@tablet': {
    fontSize: '$4',
    letterSpacing: '0.05em',
    px: '$4',
  },
})

export const ProfileSection = () => {
  const { t, locale } = useLocale()

  return (
    <Section
      id="profile"
      css={{
        backgroundColor: '$brownLight',
      }}
    >
      <VisuallyHidden.Root asChild>
        <SectionTitle>Profile</SectionTitle>
      </VisuallyHidden.Root>
      <RootFlex>
        <Flex>
          <Text css={{ textAlign: 'center' }}>
            <Text
              as="strong"
              css={{
                fontSize: '$10',
                lineHeight: '1.5em',
                letterSpacing: '0.1em',
              }}
            >
              Tee / T子
            </Text>
            <br />
            <Text
              as="b"
              css={{
                fontSize: '$7',
                lineHeight: '1em',
              }}
            >
              {t['COSPLAYER']}
            </Text>
          </Text>
          <Description fontLocale={locale ?? DEFAULT_LOCALE}>
            {t['PROFILE_DESC_JSX']}
          </Description>
        </Flex>
        <AvatarBox>
          <Avatar>
            <Image
              src={avatar}
              layout="responsive"
              width={160}
              height={160}
              alt={t['AVATAR']}
            />
          </Avatar>
        </AvatarBox>
      </RootFlex>
    </Section>
  )
}
