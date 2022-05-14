import { useRouter } from 'next/router'
import { arrayIncludes } from 'ts-extras'
import en from './en'
import ja from './ja'
import type { I18N, LocaleKey } from './language'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from './language'
import tw from './tw'

const t: Record<LocaleKey, I18N> = { ja, en, tw }

export const useLocale = (): {
  /** パスに指定されたロケール */
  locale?: LocaleKey
  /** ロケールに基づく辞書オブジェクト */
  t: I18N
} => {
  const { locale } = useRouter()

  if (isAvailable(locale)) {
    return {
      locale,
      t: t[locale],
    }
  }

  return {
    t: t[DEFAULT_LOCALE],
  }
}

/** 引数のロケールが対応言語かどうかを判定して返します */
function isAvailable(localeKey: string | undefined): localeKey is LocaleKey {
  if (!localeKey) return false
  return arrayIncludes(AVAILABLE_LOCALES, localeKey)
}
