import Image from 'next/image'
import avatar from 'public/assets/avatar.webp'
import { styled } from 'stitches.config'
import { Text } from './common'
import { Section } from './layout'
import { SectionTitle } from './SectionTitle'

const Avatar = styled('div', {
  marginX: '$1',
  marginY: '$2',
  width: '100%',
  height: '100%',
  maxWidth: '300px',
  maxHeight: '300px',
  '@tablet': {
    marginX: '$2',
  },
  borderStyle: 'solid',
  borderTopRightRadius: '30%',
  borderBottomLeftRadius: '30%',
  borderTopLeftRadius: '70%',
  borderBottomRightRadius: '70%',
  borderColor: 'transparent',
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
})

const ContactButton = styled('a', {})

const List = styled('ul', {})

const ListItem = styled('li', {
  listStyle: 'none',
})

export const ProfileSection = () => {
  return (
    <Section
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
              台湾在住コスプレイヤー
            </Text>
          </Text>
          <Description css={{ paddingTop: '$4' }}>
            自分が好きなキャラクターの
            <wbr />
            コスプレをしています
          </Description>
          {/* <List>
            <ListItem>仕事の依頼</ListItem>
            <ListItem>フォトグラファーとして撮影したい方</ListItem>
            <ListItem>コスプレイヤーとして一緒に撮影したい方</ListItem>
          </List> */}
          {/* <ContactButton>Contact</ContactButton> */}
        </Flex>
        <Avatar>
          <Image
            src={avatar}
            layout="responsive"
            width={160}
            height={160}
            alt="プロフィール画像"
          />
        </Avatar>
      </RootFlex>
    </Section>
  )
}
