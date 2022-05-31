import { Cross2Icon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import type { CSS } from '@stitches/react'
import type { I18NJa } from 'locales'
import { DEFAULT_LOCALE, isLocale, useLocale } from 'locales'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import avatar from 'public/assets/avatar.jpg'
import React from 'react'
import { styled } from 'stitches.config'
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  NextImage,
  Separator,
  StyledBox,
} from './common'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './common/dialog'
import { SocialLinkList } from './sns'
import useMediaQuery from './use-media-query'

const Nav = styled(StyledBox('nav'), {
  width: '100%',
  py: '$3',
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
          <Link
            href={item.location}
            css={{
              paddingLeft: '$3',
              paddingRight: '$3',
              color: 'white',
            }}
            externalLink={false}
            fontLocale="en"
            uppercase
          >
            {item.en}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

const PhoneMenu = (props: { css?: CSS }) => {
  const { locale, t } = useLocale()
  const router = useRouter()

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button
          fontLocale="en"
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
            <NextImage src={avatar} width={60} height={60} alt={t['AVATAR']} />
            <VisuallyHidden>{t['MENU']}</VisuallyHidden>
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
                <DialogClose
                  onClick={() => {
                    router.push(item.location, undefined, {
                      locale: locale ?? DEFAULT_LOCALE,
                      scroll: true,
                      shallow: true,
                    })
                  }}
                  fontLocale="en"
                  css={{
                    paddingTop: '$2',
                    paddingBottom: '$2',
                    display: 'block',
                    fontSize: '$8',
                    color: '$black',
                    textAlign: 'left',
                  }}
                >
                  {item.en}
                  {isLocale(locale, 'ja', t) && (
                    <Box
                      fontLocale="ja"
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
                </DialogClose>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Box>
          <SocialLinkList
            color="blackAlpha"
            css={{ maxWidth: '400px', mx: 'auto' }}
          />
        </Box>
        <DialogClose
          css={{
            position: 'absolute',
            top: '$4',
            right: '$4',
            width: 40,
            height: 40,
          }}
        >
          <Cross2Icon width={30} height={30} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
