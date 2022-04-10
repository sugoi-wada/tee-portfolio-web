import Image from 'next/image'
import avatar from 'public/assets/avatar.webp'
import { styled } from 'stitches.config'
import { Text } from './common'
import { Section } from './layout'
import { SectionTitle } from './SectionTitle'

const Avatar = styled('div', {
  width: '120px',
  height: '120px',
  '@tablet': {
    width: '160px',
    height: '160px',
  },
  borderStyle: 'solid',
  borderRadius: '64px',
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
})

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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
    <Section>
      <SectionTitle>PROFILE</SectionTitle>
      <RootFlex>
        <Flex>
          <Text css={{ textAlign: 'center' }}>
            <Text
              as="strong"
              css={{
                fontSize: '$10',
                lineHeight: '1.1em',
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
          <Image src={avatar} width={160} height={160} alt="プロフィール画像" />
        </Avatar>
      </RootFlex>
    </Section>
  )
}
