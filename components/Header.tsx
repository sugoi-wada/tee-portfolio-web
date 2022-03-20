import { default as NextImage } from 'next/image'
import { default as NextLink } from 'next/link'
import { styled } from '../stitches.config'
import { Box } from './Box'

const MainVisual = styled('header', {
  width: 'full',
  height: '100vh',
  backgroundImage:
    'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: 'White',
})
const Nav = styled('nav', {
  width: '100%',
  paddingX: '$3',
  paddingY: '$3',
  justifyContent: 'space-between',
  display: 'flex',
  position: 'fixed',
  zIndex: '10',
  textTransform: 'capitalize',
})
const Button = styled('button', {})
const TabletMenu = styled(Box, {
  '@tablet': {
    display: 'none',
  },
})
const PCMenu = styled('ul', {
  display: 'none',
  '@tablet': {
    display: 'flex',
  },
})
const Link = styled('a', {
  textDecoration: 'none',
  paddingX: '$3',
  textTransform: 'uppercase',
})
const ListItem = styled('li', {
  listStyle: 'none',
})
const Text = styled('p', {})
const Image = styled(NextImage, {})
const menuItems = [
  {
    title: 'Photos',
  },
  {
    title: 'Archives',
  },
  {
    title: 'About me',
  },
]

const Header = () => (
  <>
    <Nav>
      <div />
      <TabletMenu>
        <Button>Menu</Button>
      </TabletMenu>
      <PCMenu>
        {menuItems.map((item, i) => (
          <ListItem key={i}>
            <NextLink href="/#TODO" passHref>
              <Link>{item.title}</Link>
            </NextLink>
          </ListItem>
        ))}
      </PCMenu>
    </Nav>
    <MainVisual>
      <Text as="h1">Tee</Text>
      <Text>Taiwanese</Text>
      <Text>Cosplayer</Text>
      <Image src="/assets/twitter.svg" height={30} width={30} alt="Twitter" />
      <Image
        src="/assets/instagram.svg"
        height={30}
        width={30}
        alt="Instagram"
      />
      <Image src="/assets/facebook.svg" height={30} width={30} alt="Facebook" />
    </MainVisual>
  </>
)

export default Header
