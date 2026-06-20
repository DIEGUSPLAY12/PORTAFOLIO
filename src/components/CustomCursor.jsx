import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduce || !finePointer) return

    setEnabled(true)
    document.body.classList.add('cursor-none')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target
      setHovering(!!t.closest('a, button, [role="button"], .cursor-target, input, textarea'))
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('cursor-none')
    }
  }, [reduce, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
