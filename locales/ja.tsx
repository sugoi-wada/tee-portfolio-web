import { Wbr } from 'components/common'

export const ja = {
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
}

export default ja

export function isJa(locale: string | undefined, t: unknown): t is typeof ja {
  return locale === 'ja'
}
