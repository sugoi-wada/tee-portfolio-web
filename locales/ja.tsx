import { Wbr } from 'components/common'

const descriptionTexts = [
  '台湾を拠点にしてコスプレイヤーをしています。',
  '中国語の他に、日本語・英語が話せます。',
  'SNSを通じてグローバルに活動中です！',
  '大きい犬と漫画が好きです。',
]

export const ja = {
  COSPLAYER: 'コスプレイヤー',
  MENU: 'メニュー',
  HOME: 'ホーム',
  INSTAGRAM: 'インスタグラム',
  PROFILE: 'プロフィール',
  GALLERY: 'ギャラリー',
  CONTACT: 'お問合わせ',
  PROFILE_DESC: descriptionTexts.join(''),
  PROFILE_DESC_JSX: descriptionTexts.map((t, i) => {
    return <Wbr key={i}>{t}</Wbr>
  }),
  CONTACT_DESC:
    'お問い合せは、各種SNSのDM、またはGoogleフォームにて承っております。',
  CONTACT_GOOGLE_FORM_BUTTON: 'Googleフォームでお問い合せ',
  SEO_DEFAULT_TITLE: 'Tee - 台湾コスプレイヤー ',
  OGP_SITE_NAME: '台湾コスプレイヤー Tee',
  OGP_USERNAME: 'Tee',
  FOOTER_DESC: '台湾コスプレイヤー 🇹🇼',
  UNIT_YEAR: '年',
  AVATAR: 'プロフィール',
  SHARE: 'シェア',
}

export type I18NJa = typeof ja

export default ja
