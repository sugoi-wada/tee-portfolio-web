import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import en from './en'
import ja from './ja'
import tw from './tw'

export type LangTypeJa = typeof ja
export type LangTypeEn = typeof en
export type LangTypeTw = typeof tw

export type LangType = LangTypeJa | LangTypeEn | LangTypeTw

const t: Record<string, LangType> = { ja, en, tw }

export const useLocale = (): {
  locale: NextRouter['locale']
  t: LangType
} => {
  const { locale } = useRouter()
  return {
    locale,
    t: locale !== undefined && t.hasOwnProperty(locale) ? t[locale] ?? ja : ja,
  }
}
