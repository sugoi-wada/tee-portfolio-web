import { styled } from '../stitches.config'
import { NextLink } from './common'

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

const TabletMenu = styled('div', {
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

const MenuListItem = styled('li', {
  listStyle: 'none',
})

const UnstyledButton = styled('button', {
  textDecoration: 'none',
  outline: 'none',
  border: '1px solid transparent',
  backgroundColor: 'transparent',
})

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

export const Navigation = () => {
  return (
    <Nav>
      <div />
      <TabletMenu>
        <UnstyledButton>Menu</UnstyledButton>
      </TabletMenu>
      <PCMenu>
        {menuItems.map((item, i) => (
          <MenuListItem key={i}>
            <NextLink
              href="/#TODO"
              css={{
                paddingLeft: '$3',
                paddingRight: '$3',
              }}
            >
              {item.title}
            </NextLink>
          </MenuListItem>
        ))}
      </PCMenu>
    </Nav>
  )
}
