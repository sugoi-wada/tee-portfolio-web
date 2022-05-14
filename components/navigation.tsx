import { Cross2Icon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import type { CSS } from '@stitches/react'
import type { I18NJa } from 'locales'
import { isLocale, useLocale } from 'locales'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import avatar from 'public/assets/avatar.jpg'
import React, { useEffect } from 'react'
import { useDisclosure } from 'react-use-disclosure'
import { styled } from 'stitches.config'
import {
  Anchor,
  Box,
  Button,
  List,
  ListItem,
  NextImage,
  Separator,
} from './common'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  IconButton,
} from './common/dialog'
import { SNSListBlock } from './sns-list-block'
import useMediaQuery from './use-media-query'

const Nav = styled('nav', {
  width: '100%',
  paddingY: '$3',
  justifyContent: 'space-between',
  display: 'flex',
  position: 'fixed',
  zIndex: '$nav',
  textTransform: 'capitalize',
  mixBlendMode: 'difference',
})

const menuItems: { key: keyof I18NJa; en: string; location: string }[] = [
  {
    key: 'HOME',
    en: 'Home',
    location: '/',
  },
  {
    key: 'INSTAGRAM',
    en: 'Instagram',
    location: '/#instagram',
  },
  {
    key: 'PROFILE',
    en: 'Profile',
    location: '/#profile',
  },
  {
    key: 'GALLERY',
    en: 'Gallery',
    location: '/#gallery',
  },
  {
    key: 'CONTACT',
    en: 'Contact',
    location: '/#contact',
  },
]

export const Navigation = dynamic(() => Promise.resolve(NavigationImpl), {
  ssr: false,
})

const NavigationImpl = () => {
  const isOverTablet = useMediaQuery('tablet')

  return (
    <Nav>
      {!isOverTablet && <PhoneMenu />}
      {isOverTablet && <PCMenu />}
    </Nav>
  )
}

const PCMenu = () => {
  return (
    <List css={{ marginLeft: 'auto', marginRight: '$4', display: 'flex' }}>
      {menuItems.map((item, i) => (
        <ListItem key={i}>
          <Anchor
            href={item.location}
            css={{
              paddingLeft: '$3',
              paddingRight: '$3',
              color: 'white',
            }}
            uppercase
          >
            {item.en}
          </Anchor>
        </ListItem>
      ))}
    </List>
  )
}

const PhoneMenu = (props: { css?: CSS }) => {
  const { isOpen, open, close } = useDisclosure()
  const { locale, t } = useLocale()
  const router = useRouter()

  useEffect(() => {
    const eventHandler = () => {
      if (isOpen) close()
    }
    addEventListener('hashchange', eventHandler)
    return () => {
      removeEventListener('hashchange', eventHandler)
    }
  }, [isOpen, close])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(opened) => {
        opened && open()
        !opened && close()
      }}
      {...props}
    >
      <DialogTrigger onClick={() => open()} asChild>
        <Button
          css={{
            marginLeft: 'auto',
            marginRight: '$4',
            color: 'white',
          }}
        >
          Menu
        </Button>
      </DialogTrigger>
      <DialogContent fullscreen>
        <DialogTitle>
          <Box
            frame="circle"
            css={{
              width: 60,
              height: 60,
            }}
          >
            <NextImage src={avatar} width={60} height={60} alt="Avatar" />
            <VisuallyHidden>t.MENU</VisuallyHidden>
          </Box>
        </DialogTitle>
        <List
          css={{
            paddingLeft: 0,
          }}
        >
          {menuItems.map((item, i) => (
            <React.Fragment key={i}>
              {i !== 0 && <Separator decorative />}
              <ListItem
                css={{
                  paddingTop: '$2',
                  paddingBottom: '$2',
                  paddingLeft: '$2',
                  paddingRight: '$2',
                }}
              >
                <Anchor
                  href={item.location}
                  onClick={(e) => {
                    if (window.location.hash === item.location) {
                      // 同じリンクをタップしたときは hashchange イベントが呼ばれないので、無理やりタップしたことにする
                      e.preventDefault()
                      router.push(item.location)
                      isOpen && close()
                    }
                  }}
                  css={{
                    paddingTop: '$2',
                    paddingBottom: '$2',
                    display: 'block',
                    fontSize: '$8',
                    color: '$black',
                  }}
                >
                  {item.en}
                  {isLocale(locale, 'ja', t) && (
                    <Box
                      as="span"
                      css={{
                        display: 'block',
                        lineHeight: '1rem',
                        fontSize: '$1',
                      }}
                    >
                      {t[item.key]}
                    </Box>
                  )}
                </Anchor>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Box>
          <SNSListBlock
            color="$blackAlpha"
            css={{ maxWidth: '400px', marginX: 'auto' }}
          />
        </Box>
        <DialogClose onClick={() => close()} asChild>
          <IconButton
            css={{
              width: 40,
              height: 40,
              top: '$4',
              right: '$4',
            }}
          >
            <Cross2Icon width={30} height={30} />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
