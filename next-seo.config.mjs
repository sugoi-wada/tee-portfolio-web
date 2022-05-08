/** @type {import("next-seo").NextSeoProps} */
const seo = {
  titleTemplate: '%s - Tee',
  defaultTitle: 'Tee - Cosplayer from Taiwan',
  openGraph: {
    type: 'website',
    // locale: 'ja_JP',
    site_name: 'Tee Official',
    url: process.env['NEXT_PUBLIC_SITE_URL'] || '',
    profile: {
      username: 'Tee',
    },
    images: [
      {
        url: `${process.env['NEXT_PUBLIC_SITE_URL']}/assets/avatar.jpg`,
        width: 500,
        height: 500,
        alt: 'Avatar',
        type: 'image/jpeg',
      },
    ],
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
