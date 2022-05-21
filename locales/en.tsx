import { Wbr } from 'components/common'

const descriptionTexts = [
  'Welcome to the Tee&apos;s official website!',
  'I&apos;m a cosplayer based in Taiwan.',
]

export const en = {
  COSPLAYER: 'Cosplayer',
  MENU: 'Menu',
  PROFILE_DESC: descriptionTexts.join(''),
  PROFILE_DESC_JSX: descriptionTexts.map((t, i) => {
    return <Wbr key={i}>{t}</Wbr>
  }),
  CONTACT_DESC:
    'Please use message via SNS, or use Google forms below to contact me.',
  CONTACT_GOOGLE_FORM_BUTTON: 'Google forms',
  SEO_DEFAULT_TITLE: 'Tee - Cosplayer from Taiwan',
  OGP_SITE_NAME: 'Cosplayer Tee Official',
  OGP_USERNAME: 'Tee',
  FOOTER_DESC: 'Cosplayer from 🇹🇼',
  UNIT_YEAR: '',
  AVATAR: 'Avatar',
}

export type I18NEn = typeof en

export default en
