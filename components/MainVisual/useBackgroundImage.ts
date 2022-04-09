import { useAnimationFrame } from 'framer-motion'
import { splitArray } from 'lib/utils'
import { useRef } from 'react'
import { Config } from 'types'

const baseDuration = 7000 as const
const opacityDuration = 2000 as const

export const useBackgroundImage = ({
  bgImages,
}: {
  bgImages: Config['bgImages']
}) => {
  const firstImageRef = useRef<HTMLDivElement>(null)
  const secondImageRef = useRef<HTMLDivElement>(null)

  const bgImageColumns = splitArray(bgImages)

  useAnimationFrame((time) => {
    if (firstImageRef.current === null) return
    if (secondImageRef.current === null) return

    const offsetTime = Math.max(0, time - baseDuration)

    const [fScaleValue, sScaleValue] = [time, offsetTime].map((t) =>
      calcTransformValue(
        t,
        baseDuration + opacityDuration,
        1.2,
        1,
        baseDuration - opacityDuration
      )
    )

    const [fOpacityValue, sOpacityValue] = [
      Math.floor(time / baseDuration) === 0 ? baseDuration : time,
      offsetTime,
    ].map((t) =>
      calcTransformValue(
        t,
        opacityDuration,
        0,
        1,
        baseDuration * 2 - opacityDuration
      )
    )

    const [fZindexValue, sZindexValue] = [
      calcBinaryValue(time, baseDuration, 1, 0),
      calcBinaryValue(time, baseDuration, 0, 1),
    ]

    const [fBgIndex, sBgIndex] = [time, offsetTime].map(
      (t, i) => Math.floor(t / (baseDuration * 2)) % bgImageColumns[i].length
    )

    firstImageRef.current.style.opacity = `${fOpacityValue}`
    firstImageRef.current.style.scale = `${fScaleValue}`
    firstImageRef.current.style.zIndex = `${fZindexValue}`
    firstImageRef.current.style.backgroundImage = `url(${bgImageColumns[0][fBgIndex].srcUrl})`

    secondImageRef.current.style.opacity = `${sOpacityValue}`
    secondImageRef.current.style.scale = `${sScaleValue}`
    secondImageRef.current.style.zIndex = `${sZindexValue}`
    secondImageRef.current.style.backgroundImage = `url(${bgImageColumns[1][sBgIndex].srcUrl})`
  })

  return {
    firstImageRef,
    secondImageRef,
  }
}

function calcTransformValue(
  currentTime: number,
  duration: number,
  fromValue: number,
  toValue: number,
  freeze = 0
): number {
  const minValue = Math.min(fromValue, toValue)
  const range = Math.abs(toValue - fromValue)
  const rate = (currentTime % (duration + freeze)) / duration

  if (rate > 1) {
    return toValue
  }

  return (fromValue < toValue ? rate : 1 - rate) * range + minValue
}

function calcBinaryValue(
  currentTime: number,
  duration: number,
  evenValue: number,
  oddValue: number
): number {
  return Math.floor(currentTime / duration) % 2 === 0 ? evenValue : oddValue
}
