import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#reflexiones', label: 'Reflexiones' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 40))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-4 mt-4">
        <nav className={`rounded-2xl px-5 py-3 flex items-center justify-between max-w-6xl mx-auto transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-glass' : 'glass'
        }`}>
          <motion.a href="#inicio" className="flex items-center gap-2 select-none" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand to-cyan-400 flex items-center justify-center shadow-lg">
              <span className="text-white font-heading font-bold text-xs">D</span>
            </span>
            <span className="font-heading font-semibold text-white tracking-wide">diego.dev</span>
          </motion.a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = active === href.slice(1)
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative px-3.5 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                      isActive ? 'text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-brand/20 border border-brand/30 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href={`${import.meta.env.BASE_URL}CV-Diego-Garcia-Senciales.pdf`}
            download="CV-Diego-Garcia-Senciales.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-indigo-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            CV
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Menú"
            aria-expanded={open}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mx-4 mt-2"
          >
            <ul className="glass-strong rounded-2xl p-2 flex flex-col gap-1 max-w-6xl mx-auto">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      active === href.slice(1) ? 'bg-brand/20 text-white font-medium' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-1 pt-1 border-t border-white/10">
                <a
                  href={`${import.meta.env.BASE_URL}CV-Diego-Garcia-Senciales.pdf`}
                  download="CV-Diego-Garcia-Senciales.pdf"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand hover:bg-white/5 transition-colors"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
