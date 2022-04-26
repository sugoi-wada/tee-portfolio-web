import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Image from 'next/image'
import avatar from 'public/assets/avatar.webp'
import { styled } from 'stitches.config'
import { Text } from './common'
import { Section } from './section'
import { SectionTitle } from './section-title'

const AvatarBox = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '300px',
  maxHeight: '300px',
  marginX: '$1',
  marginY: '$6',
  '@tablet': {
    marginRight: '$6',
  },
  '@pc-small': {
    marginX: '$6',
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
  paddingX: '$1',
  justifyContent: 'center',
  alignItems: 'center',
})

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginX: '0',
  '@tablet': {
    marginX: '$2',
  },
})

const Description = styled('p', {
  fontSize: '$4',
  lineHeight: '1.8em',
  textAlign: 'center',
  paddingTop: '$4',
  paddingX: '$6',
  maxWidth: '560px',
  fontWeight: '$thin',
  letterSpacing: '0.05em',
})

const Wbr = styled('span', {
  '@sp-large': {
    display: 'inline-block',
  },
})

export const ProfileSection = () => {
  return (
    <Section
      id="profile"
      css={{
        backgroundColor: '$brownLight',
      }}
    >
      <VisuallyHidden.Root asChild>
        <SectionTitle>PROFILE</SectionTitle>
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
              コスプレイヤー
            </Text>
          </Text>
          <Description>
            <Wbr>台湾を拠点にしてコスプレイヤーをしています。</Wbr>
            <Wbr>中国語の他に、日本語・英語が話せます。</Wbr>

            <Wbr>SNSを通じてグローバルに活動中です！</Wbr>

            <Wbr>大きい犬と漫画が好きです。</Wbr>
          </Description>
        </Flex>
        <AvatarBox>
          <Avatar>
            <Image
              src={avatar}
              layout="responsive"
              width={160}
              height={160}
              alt="プロフィール画像"
            />
          </Avatar>
        </AvatarBox>
      </RootFlex>
    </Section>
  )
}
