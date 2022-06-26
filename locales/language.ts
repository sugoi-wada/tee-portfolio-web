import type { I18NEn } from './en'
import type { I18NJa } from './ja'
import type { I18NTw } from './tw'

export const AVAILABLE_LANG = ['en-US', 'ja-JP', 'zh-TW'] as const
export type LangKey = typeof AVAILABLE_LANG[number]

export const LANG_TO_LOCALE_MAP_TABLE: Record<LangKey, LocaleKey> = {
  'en-US': 'en',
  'ja-JP': 'ja',
  'zh-TW': 'tw',
} as const

export const LOCALE_TO_LANG_MAP_TABLE: Record<LocaleKey, LangKey> = {
  en: 'en-US',
  ja: 'ja-JP',
  tw: 'zh-TW',
} as const

export const AVAILABLE_LOCALES = ['en', 'ja', 'tw'] as const
export const DEFAULT_LOCALE: LocaleKey = 'en' as const

export type LocaleKey = typeof AVAILABLE_LOCALES[number]
export type I18N = I18NJa | I18NEn | I18NTw

type LocaleToI18N = {
  ja: I18NJa
  en: I18NEn
  tw: I18NTw
}

export function isLocale<T extends LocaleKey>(
  locale: string | undefined,
  localeKey: T,
  _t: unknown
): _t is LocaleToI18N[T] {
  return locale === localeKey
}
