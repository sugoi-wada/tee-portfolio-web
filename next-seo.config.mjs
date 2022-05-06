/** @type {import("next-seo").NextSeoProps} */
const seo = {
  titleTemplate: '%s - tee',
  defaultTitle: 'tee - Cosplayer from Taiwan',
  openGraph: {
    type: 'website',
    // locale: 'ja_JP',
    site_name: 'コスプレイヤーteeのオフィシャルホームページ',
    // url: '',
    profile: {
      username: 'tee',
    },
  },
  twitter: {
    handle: '@teee_7777',
    site: '@teee_7777',
    cardType: 'summary_large_image',
  },
  // facebook: {
  //   appId: process.env.FACEBOOK_APP_ID
  // }
}

export default seo
