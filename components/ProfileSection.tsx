import Image from 'next/image'
import avatar from 'public/assets/avatar.webp'
import { styled } from 'stitches.config'
import { Text } from './common'
import { Section } from './layout'
import { SectionTitle } from './SectionTitle'

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
    rotate: '-20deg',
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
  wordBreak: 'keep-all',
  paddingTop: '$4',
  paddingX: '$2',
  maxWidth: '560px',
})

const ContactButton = styled('a', {})

const List = styled('ul', {})

const ListItem = styled('li', {
  listStyle: 'none',
})

export const ProfileSection = () => {
  return (
    <Section
      id="profile"
      css={{
        backgroundColor: '$brownLight',
      }}
    >
      <SectionTitle visuallyHidden>PROFILE</SectionTitle>
      <RootFlex>
        <Flex>
          <Text css={{ textAlign: 'center' }}>
            <Text
              as="strong"
              css={{
                fontSize: '$10',
                lineHeight: '1.5em',
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
            台湾生まれ、台湾在住。たまに日本に遊びに行きます。
            <wbr />
            中国語の他に、日本語・英語が話せます。
            <wbr />
            大きい犬と漫画が好きです。
            <wbr />
          </Description>
          {/* <List>
            <ListItem>仕事の依頼</ListItem>
            <ListItem>フォトグラファーとして撮影したい方</ListItem>
            <ListItem>コスプレイヤーとして一緒に撮影したい方</ListItem>
          </List> */}
          {/* <ContactButton>Contact</ContactButton> */}
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
