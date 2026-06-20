import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const roles = ['FullStack Developer', 'UI/UX Enthusiast', 'Estudiante DAW', 'Creative Coder']

export default function RoleRotator() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  if (reduce) {
    return <span className="gradient-text font-semibold">{roles[0]}</span>
  }

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text font-semibold whitespace-nowrap"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
