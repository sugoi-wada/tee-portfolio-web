import Head from 'next/head'
import { Box } from '../components/Box'
import Header from '../components/Header'
import { styled } from '../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})
const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})
const Container = styled('div', {
  marginX: 'auto',
  // paddingX: '$3',
  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})
export default function Home() {
  return (
    <Box>
      <Head>
        <title>tee - Coser from Taiwan</title>
      </Head>
      <Container>
        <Header />
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
      </Container>
    </Box>
  )
}
