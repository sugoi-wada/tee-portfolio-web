import { Box, NextImage } from 'components/common'
import mainLogo from 'public/assets/main-logo.webp'
import type { PropsWithChildren } from 'react'
import { useRef } from 'react'
import { styled } from 'stitches.config'
import type { Config } from 'types'
import { SNSListBlock } from '../sns-list-block'
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
    paddingY: '$4',
    paddingX: '$4',
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

const Header = ({ children }: PropsWithChildren<unknown>) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box
      as="header"
      ref={ref}
      css={{
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  )
}

export const MainVisual = ({ bgImages }: { bgImages: Config['bgImages'] }) => {
  return (
    <Header>
      <Background bgImages={bgImages} />
      <ContentsArea>
        <BannerBox>
          <NextImage src={mainLogo} width={250} height={199} alt="Tee" />
          <SNSListBlock />
        </BannerBox>
        <ScrollDown />
      </ContentsArea>
    </Header>
  )
}
