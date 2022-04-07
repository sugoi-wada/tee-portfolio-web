import { Box, Text } from 'components/common'
import { styled } from 'stitches.config'
import { Config } from 'types'
import { Background } from './Background'
import { SNSListBlock } from './SNSListBlock'

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

const BottomText = styled('p', {
  fontSize: '$9',
  fontFamily: '$heading',
  letterSpacing: '0.22em',
  lineHeight: '1.1em',
})

const HeadingBannerLogo = () => (
  <Box
    css={{
      position: 'relative',
      fontFamily: '$heading',
      fontSize: '$8',
      letterSpacing: '0.22em',
      '&::before': {
        content: 'aiwan',
        top: '$3',
        right: '$1',
        position: 'absolute',
        zIndex: '1',
      },
    }}
  >
    <Text
      as="h1"
      css={{
        fontSize: '$13',
        lineHeight: '1em',
        letterSpacing: '0.045em',
        fontFamily: '$heading',
        textIndent: '-0.17em',
        zIndex: '0',
        position: 'relative',
        '&::before': {
          content: '""',
          zIndex: '-1',
          width: 'calc(100% + 15px)',
          height: '100%',
          left: '5px',
          position: 'absolute',
          background:
            'linear-gradient(to top, rgba(199, 92, 74, 0.8) 30%, transparent 30%)',
          transform: 'skew(-15deg)',
        },
        '&::after': {
          content: '""',
          zIndex: '-1',
          width: 'calc(100% + 15px)',
          height: '100%',
          top: '5px',
          left: '-20px',
          position: 'absolute',
          background:
            'linear-gradient(to bottom, rgba(85, 71, 69, 0.4) 30%, transparent 30%)',
          transform: 'skew(-15deg)',
        },
      }}
    >
      Tee
    </Text>
  </Box>
)

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
          <HeadingBannerLogo />
          <BottomText>Cosplayer</BottomText>
          <SNSListBlock />
        </BannerBox>
      </ContentsArea>
    </Header>
  )
}
