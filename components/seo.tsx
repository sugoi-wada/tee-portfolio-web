import { deepmerge } from 'deepmerge-ts'
import {
  AVAILABLE_LANG,
  DEFAULT_LOCALE,
  LANG_TO_LOCALE_MAP_TABLE,
  LOCALE_TO_LANG_MAP_TABLE,
  useLocale,
} from 'locales'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export const Seo = (props: NextSeoProps) => {
  const localeBasedSeo = useLocaleBasedSeo()
  return <NextSeo {...deepmerge(localeBasedSeo, props)} />
}

const useLocaleBasedSeo = (): NextSeoProps => {
  const router = useRouter()
  const { t, locale } = useLocale()
  const localePath = locale === undefined ? '' : `/${locale}`

  return {
    defaultTitle: t['SEO_DEFAULT_TITLE'],
    canonical: `${process.env['NEXT_PUBLIC_SITE_URL']}${localePath}${router.asPath}`,
    openGraph: {
      locale: LOCALE_TO_LANG_MAP_TABLE[locale || DEFAULT_LOCALE].replace(
        '-',
        '_'
      ),
      site_name: t['OGP_SITE_NAME'],
      url: `${process.env['NEXT_PUBLIC_SITE_URL']}${localePath}${router.asPath}`,
      profile: {
        username: t['OGP_USERNAME'],
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
    languageAlternates: AVAILABLE_LANG.map((lang) => {
      const locale = LANG_TO_LOCALE_MAP_TABLE[lang]
      return {
        href: `${process.env['NEXT_PUBLIC_SITE_URL']}/${locale}${router.asPath}`,
        hrefLang: lang,
      }
    }),
  }
}
