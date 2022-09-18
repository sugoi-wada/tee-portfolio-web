import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import type { CSS } from '@stitches/react'
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  NextImage,
  Separator,
  StyledBox,
} from 'components/common'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from 'components/common/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from 'components/common/dropdown'
import { SocialLinkList } from 'components/sns'
import useMediaQuery from 'components/use-media-query'
import { WebIcon } from 'lib/icons'
import type { I18NJa, LocaleKey } from 'locales'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, isLocale, useLocale } from 'locales'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import avatar from 'public/assets/avatar.jpg'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { styled } from 'stitches.config'

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

type MenuItem =
  | {
      type: 'text'
      key: keyof I18NJa
      en: string
      location: string
    }
  | {
      type: 'lang'
    }

const menuItems: MenuItem[] = [
  {
    type: 'text',
    key: 'HOME',
    en: 'Home',
    location: '/',
  },
  {
    type: 'text',
    key: 'PROFILE',
    en: 'Profile',
    location: '/#profile',
  },
  {
    type: 'text',
    key: 'GALLERY',
    en: 'Gallery',
    location: '/#gallery',
  },
  {
    type: 'text',
    key: 'CONTACT',
    en: 'Contact',
    location: '/#contact',
  },
  {
    type: 'lang',
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
          {item.type === 'text' && (
            <Link
              href={item.location}
              css={{
                paddingLeft: '$3',
                paddingRight: '$3',
                color: 'white',
                verticalAlign: 'middle',
              }}
              externalLink={false}
              fontLocale="en"
              uppercase
            >
              {item.en}
            </Link>
          )}
          {item.type === 'lang' && (
            <LanguageSelectMenu>
              <WebIcon
                css={{
                  size: '$4',
                }}
              ></WebIcon>
            </LanguageSelectMenu>
          )}
        </ListItem>
      ))}
    </List>
  )
}

const LOCALE_TO_LABEL_TABLE: Record<LocaleKey, string> = {
  en: 'English',
  ja: '日本語',
  tw: '中文',
} as const

const LanguageSelectMenu = ({ children }: PropsWithChildren<unknown>) => {
  const router = useRouter()
  const { locale } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={2} alignOffset={-5}>
        <DropdownMenuRadioGroup
          value={locale ?? DEFAULT_LOCALE}
          onValueChange={(value: string) => {
            router.push(router.asPath, undefined, {
              locale: value as LocaleKey,
              scroll: false,
              shallow: true,
            })
          }}
        >
          {AVAILABLE_LOCALES.map((l, i) => (
            <DropdownMenuRadioItem key={i} fontLocale={l} value={l}>
              <DropdownMenuItemIndicator>
                <CheckIcon />
              </DropdownMenuItemIndicator>
              {LOCALE_TO_LABEL_TABLE[l]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
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
                {item.type === 'text' && (
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
                )}
                {item.type === 'lang' && (
                  <DialogClose
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'end',
                      width: '100%',
                    }}
                  >
                    {AVAILABLE_LOCALES.map((l, i) => (
                      <Button
                        key={i}
                        fontLocale={l}
                        css={{
                          px: '$2',
                          py: '$2',
                          color: (locale ?? 'en') === l ? '$black' : '$gray600',
                          fontWeight:
                            (locale ?? 'en') === l ? '$w700' : '$regular',
                        }}
                        onClick={() => {
                          router.push(router.asPath, undefined, {
                            locale: l,
                            scroll: false,
                            shallow: true,
                          })
                        }}
                      >
                        {LOCALE_TO_LABEL_TABLE[l]}
                      </Button>
                    ))}
                  </DialogClose>
                )}
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
