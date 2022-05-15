import { Wbr } from 'components/common'
import type { ReactNode } from 'react'

export const ja: Record<string, ReactNode> = {
  COSPLAYER: 'コスプレイヤー',
  MENU: 'メニュー',
  HOME: 'ホーム',
  INSTAGRAM: 'インスタグラム',
  PROFILE: 'プロフィール',
  GALLERY: 'ギャラリー',
  CONTACT: 'お問合わせ',
  PROFILE_DESC: (
    <>
      <Wbr>台湾を拠点にしてコスプレイヤーをしています。</Wbr>
      <Wbr>中国語の他に、日本語・英語が話せます。</Wbr>
      <Wbr>SNSを通じてグローバルに活動中です！</Wbr>
      <Wbr>大きい犬と漫画が好きです。</Wbr>
    </>
  ),
  CONTACT_DESC:
    'お問い合せは、各種SNSのDM、またはGoogleフォームにて承っております。',
  CONTACT_GOOGLE_FORM_BUTTON: 'Googleフォームでお問い合せ',
  SEO_DEFAULT_TITLE: 'Tee - 台湾コスプレイヤー ',
  OGP_SITE_NAME: '台湾コスプレイヤー Tee',
  OGP_USERNAME: 'Tee',
  FOOTER_DESC: '台湾コスプレイヤー 🇹🇼',
  UNIT_YEAR: '年',
  AVATAR: 'プロフィール',
}

export type I18NJa = typeof ja

export default ja
