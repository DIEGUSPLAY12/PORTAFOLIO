import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// 3D tilt card that reacts to cursor position, with a moving light glare.
export default function TiltCard({ children, className = '', max = 8 }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })
  const glare = useTransform(
    [px, py],
    ([gx, gy]) => `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,0.12), transparent 50%)`
  )

  const handleMove = (e) => {
    if (reduce) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
    setHovered(false)
  }

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[24px]"
        style={{ background: glare, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}
      />
    </motion.div>
  )
}
