import { useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

export function useIllustrationPlay<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { amount: 0.28 })
  return {
    ref,
    play: reduced === false && inView,
    inView,
    reduced: reduced === true,
  }
}
