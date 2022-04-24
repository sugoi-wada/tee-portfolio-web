import { Box, NextImage } from 'components/common'
import useIsTouchDevice from 'components/use-is-touch-device'
import mainLogo from 'public/assets/main-logo.webp'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { use100vh } from 'react-div-100vh'
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

const Header = ({ children }: PropsWithChildren<unknown>) => {
  const ref = useRef<HTMLDivElement>(null)
  const screenHeight = use100vh()
  const isTouchDevice = useIsTouchDevice()

  useEffect(() => {
    if (ref.current === null) return
    if (screenHeight === null) return
    if (!isTouchDevice) return
    if (ref.current.style.height.endsWith('px')) return // 一度変更されたら再度変更しない

    ref.current.style.height = `${screenHeight}px`
  }, [screenHeight, isTouchDevice])

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
          <NextImage
            src={mainLogo}
            width={250}
            height={199}
            alt="台湾コスプレイヤーTeeのロゴ画像"
          />
          <SNSListBlock />
        </BannerBox>
      </ContentsArea>
    </Header>
  )
}
