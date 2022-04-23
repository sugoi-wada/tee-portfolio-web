import { useEffect, useState } from 'react'

declare global {
  interface Window {
    DocumentTouch: unknown
  }
}

function isTouchDevice() {
  if (typeof window === 'undefined') return false
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  function mq(query: string) {
    return typeof window !== 'undefined' && window.matchMedia(query).matches
  }
  if (
    'ontouchstart' in window ||
    (window?.DocumentTouch && document instanceof Document)
  )
    return true
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('') // include the 'heartz' - https://git.io/vznFH
  return mq(query)
}

export default function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    const {
      isAndroid,
      isIPad13,
      isIPhone13,
      isWinPhone,
      isMobileSafari,
      isTablet,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
    } = require('react-device-detect')
    setIsTouch(
      isTouch ||
        isAndroid ||
        isIPad13 ||
        isIPhone13 ||
        isWinPhone ||
        isMobileSafari ||
        isTablet ||
        isTouchDevice()
    )
  }, [isTouch])

  return isTouch
}
