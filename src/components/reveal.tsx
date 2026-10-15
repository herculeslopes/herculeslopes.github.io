import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Reveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      data-reveal
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0 : 0.32, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
