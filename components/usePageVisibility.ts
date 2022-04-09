import { useEffect, useState } from 'react'

export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true)
  const onVisibilityChange = () => {
    setIsVisible(document.visibilityState === 'visible')
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  return {
    isVisible,
    isHidden: !isVisible,
  }
}
