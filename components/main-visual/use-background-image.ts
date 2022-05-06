import assert from 'assert'
import { usePageVisibility } from 'components/use-page-visibility'
import { useAnimationFrame } from 'framer-motion'
import { splitArray } from 'lib/utils'
import React, { useRef } from 'react'

const baseDuration = 7000 as const
const opacityDuration = 2000 as const

export const useBackgroundImage = ({ length }: { length: number }) => {
  const { isHidden } = usePageVisibility()

  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>([])
  for (let step = 0; step < length; step++) {
    refs.current[step] = React.createRef<HTMLDivElement>()
  }

  const indexedArray = splitArray(Array.from({ length }, (_, i) => i))

  useAnimationFrame((time) => {
    if (isHidden) return
    if (refs.current === null) return

    const offsetTime = Math.max(0, time - baseDuration)

    const [fBgIndex, sBgIndex] = [time, offsetTime].map((t, i) => {
      const rows = indexedArray[i]
      assert(rows !== undefined)
      return rows[Math.floor(t / (baseDuration * 2)) % rows.length]
    })
    assert(fBgIndex !== undefined)
    assert(sBgIndex !== undefined)

    const fRef = refs.current[fBgIndex]
    const sRef = refs.current[sBgIndex]

    assert(fRef)
    assert(sRef)

    if (fRef.current === null) return
    if (sRef.current === null) return

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

    fRef.current.style.opacity = `${fOpacityValue}`
    fRef.current.style.transform = `scale(${fScaleValue})`
    fRef.current.style.zIndex = `${fZindexValue}`

    sRef.current.style.opacity = `${sOpacityValue}`
    sRef.current.style.transform = `scale(${sScaleValue})`
    sRef.current.style.zIndex = `${sZindexValue}`

    refs.current.forEach((ref, i) => {
      if (i === fBgIndex || i === sBgIndex) return

      if (ref.current === null) return

      ref.current.style.zIndex = '-1'
    })
  })

  return {
    refs,
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
