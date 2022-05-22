import { Wbr } from 'components/common'

const descriptionTexts = [
  '這裡是T子（踢子）。',
  '台灣Cosplayer。',
  '中文/日文/英文。',
  '不定期更新。歡迎交流。',
]

export const tw = {
  COSPLAYER: 'Cosplayer',
  MENU: '菜單',
  PROFILE_DESC: descriptionTexts.join(''),
  PROFILE_DESC_JSX: descriptionTexts.map((t, i) => {
    return <Wbr key={i}>{t}</Wbr>
  }),
  CONTACT_DESC: '可以透過SNS的DM或Google表單聯絡我。',
  CONTACT_GOOGLE_FORM_BUTTON: '查看Google表單',
  SEO_DEFAULT_TITLE: 'Tee(T子) - 台湾Cosplayer ',
  OGP_SITE_NAME: '台湾Cosplayer Tee(T子)',
  OGP_USERNAME: 'Tee / T子',
  FOOTER_DESC: 'Cosplayer from 🇹🇼',
  UNIT_YEAR: '年',
  AVATAR: '頭像',
  SHARE: '分享',
}

export type I18NTw = typeof tw

export default tw
