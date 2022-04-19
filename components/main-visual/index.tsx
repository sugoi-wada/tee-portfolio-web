import { NextImage } from 'components/common'
import mainLogo from 'public/assets/main-logo.webp'
import { styled } from 'stitches.config'
import { Config } from 'types'
import { Background } from './background'
import { SNSListBlock } from './sns-list-block'

const ContentsArea = styled('div', {
  padding: '$4',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
  height: '100%',
  display: 'flex',
})

const BannerBox = styled('div', {
  marginTop: 'auto',
  marginBottom: '$4',
  marginLeft: 'auto',
  maxWidth: '250px',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  color: '$pink',
  zIndex: 2,
  marginRight: 'auto',
  '@tablet': {
    marginRight: '$6',
  },
})

const Header = styled('header', {
  height: '100vh',
  width: '100%',
  position: 'relative',
})

export const MainVisual = ({ bgImages }: { bgImages: Config['bgImages'] }) => {
  return (
    <Header>
      <Background bgImages={bgImages} />
      <ContentsArea>
        <BannerBox>
          <NextImage
            src={mainLogo}
            width={250}
            height={190}
            alt="台湾コスプレイヤーTeeのロゴ画像"
          />
          <SNSListBlock />
        </BannerBox>
      </ContentsArea>
    </Header>
  )
}
