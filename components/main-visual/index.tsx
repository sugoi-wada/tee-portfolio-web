import { Box, NextImage } from 'components/common'
import { SocialLinkList } from 'components/sns'
import mainLogo from 'public/assets/main-logo.webp'
import { styled } from 'stitches.config'
import type { Config } from 'types'
import { Background } from './background'
import { ScrollDown } from './scroll-down'

const ContentsArea = styled('div', {
  paddingTop: '$4',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
  height: '100%',
  display: 'flex',
  paddingBottom: '$8',
  boxSizing: 'border-box',
  position: 'relative',
  '@tablet': {
    py: '$4',
    px: '$4',
  },
})

const BannerBox = styled('div', {
  marginTop: 'auto',
  marginBottom: '$4',
  marginLeft: 'auto',
  maxWidth: '250px',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  color: '$pink',
  zIndex: 0,
  marginRight: 'auto',
  '@tablet': {
    marginRight: '$6',
  },
})

export const MainVisual = ({ bgImages }: { bgImages: Config['bgImages'] }) => {
  return (
    <Box
      css={{
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Background bgImages={bgImages} />
      <ContentsArea>
        <BannerBox>
          <NextImage
            src={mainLogo}
            width={250}
            height={199}
            alt="Tee Cosplay"
          />
          <SocialLinkList />
        </BannerBox>
        <ScrollDown />
      </ContentsArea>
    </Box>
  )
}
