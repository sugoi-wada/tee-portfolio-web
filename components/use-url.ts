import { useLocale } from 'locales'
import { useRouter } from 'next/router'

export const useUrl = () => {
  const router = useRouter()
  const { locale } = useLocale()
  const localePath = locale === undefined ? '' : `/${locale}`

  const url = `${process.env['NEXT_PUBLIC_SITE_URL']}${localePath}${router.asPath}`

  return {
    url,
    canonical: url,
  }
}
