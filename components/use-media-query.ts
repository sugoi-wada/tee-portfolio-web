import { useEffect, useState } from 'react'
import { config } from 'stitches.config'

export type QueryType = keyof typeof config.media

/** usehook-ts の useMediaQuery を参考にカスタマイズしたもの
 * ref: https://usehooks-ts.com/react-hook/use-media-query
 */
function useMediaQuery(queryType: QueryType): boolean {
  const query = config.media[queryType]

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery
