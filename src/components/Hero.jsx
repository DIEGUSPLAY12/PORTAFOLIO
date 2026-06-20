import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem } from './Reveal'
import RoleRotator from './RoleRotator'
import Magnetic from './Magnetic'

const code = `<span class="text-violet-400">const</span> <span class="text-cyan-300">diego</span> <span class="text-slate-500">=</span> {
  <span class="text-sky-300">name</span><span class="text-slate-500">:</span> <span class="text-emerald-300">'Diego García'</span><span class="text-slate-500">,</span>
  <span class="text-sky-300">role</span><span class="text-slate-500">:</span> <span class="text-emerald-300">'FullStack Student'</span><span class="text-slate-500">,</span>
  <span class="text-sky-300">stack</span><span class="text-slate-500">:</span> [<span class="text-emerald-300">'React'</span><span class="text-slate-500">,</span> <span class="text-emerald-300">'PHP'</span><span class="text-slate-500">,</span> <span class="text-emerald-300">'FastAPI'</span>]<span class="text-slate-500">,</span>
  <span class="text-sky-300">passion</span><span class="text-slate-500">:</span> <span class="text-emerald-300">'interfaces útiles y bonitas'</span>
<span class="text-slate-500">}</span>

<span class="text-violet-400">function</span> <span class="text-yellow-300">sayHi</span><span class="text-slate-500">() {</span>
  <span class="text-violet-400">return</span> <span class="text-emerald-300">'¡Hola! Gracias por pasar.'</span>
<span class="text-slate-500">}</span>`

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yTerminal = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20">
      <motion.div style={{ opacity }} className="relative max-w-6xl mx-auto px-4 w-full">
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Left: Identity */}
          <motion.div style={{ y: yContent }} className="space-y-7 order-2 lg:order-1">
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible para colaboraciones
            </motion.div>

            <div className="space-y-3">
              <motion.p variants={staggerItem} className="text-slate-400 font-mono text-sm">
                Hola, soy
              </motion.p>
              <motion.h1
                variants={staggerItem}
                className="font-heading font-bold text-white leading-[0.95] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2.75rem, 7vw, 5rem)' }}
              >
                Diego García
              </motion.h1>
              <motion.div
                variants={staggerItem}
                className="font-heading font-medium text-slate-300 h-[1.4em] flex items-center"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
              >
                <RoleRotator />
              </motion.div>
            </div>

            <motion.p variants={staggerItem} className="text-slate-400 text-base leading-relaxed max-w-lg text-balance">
              Me apasiona la programación y la tecnología. Busco crecer como desarrollador creando
              soluciones útiles con buen diseño y foco en la experiencia de usuario.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 pt-1">
              <Magnetic>
                <a
                  href="Currículum Vitae CV Diego Garcia Senciales spanish.pdf.pdf"
                  download="CV_Diego_Garcia_Senciales.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-glow transition-shadow duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Descargar CV
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/8 transition-colors duration-200"
                >
                  Ver proyectos
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-center gap-4 pt-2">
              <SocialLink href="https://github.com/DIEGUSPLAY12" label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.16-.13-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.25 2.84.12 3.14.77.82 1.23 1.87 1.23 3.16 0 4.53-2.81 5.52-5.49 5.81.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" /></svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/diego-garc%C3%ADa-senciales-783870339/" label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8.98z" /></svg>
              </SocialLink>
              <SocialLink href="mailto:diegosenciales@gmail.com" label="Email">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </SocialLink>
            </motion.div>
          </motion.div>

          {/* Right: Photo + Terminal */}
          <motion.div style={{ y: yTerminal }} className="order-1 lg:order-2 space-y-5">
            {/* Profile */}
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand to-cyan-400 opacity-60 blur-sm" />
                <img
                  src="./IMG/carnet.jpg"
                  alt="Diego García"
                  className="relative w-16 h-16 rounded-2xl object-cover"
                  loading="eager"
                />
              </div>
              <div className="glass rounded-xl px-4 py-2.5">
                <p className="text-white font-medium text-sm">Diego García Senciales</p>
                <p className="text-slate-400 text-xs">Dev entusiasta · Aprende cada día</p>
              </div>
            </motion.div>

            {/* Terminal */}
            <motion.div variants={staggerItem}>
              <div className="glass rounded-2xl overflow-hidden shadow-glass border-gradient">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">portfolio.js</span>
                  <CopyButton code={code} />
                </div>
                <pre className="p-5 text-[13px] leading-7 font-mono overflow-x-auto text-slate-300">
                  <code dangerouslySetInnerHTML={{ __html: code }} />
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-200"
    >
      {children}
    </a>
  )
}

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    const text = code.replace(/<[^>]+>/g, '')
    await navigator.clipboard.writeText(text.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }
  return (
    <button
      onClick={handleCopy}
      className="ml-auto text-xs px-2.5 py-1 rounded-md glass text-slate-400 hover:text-white transition-colors"
    >
      {copied ? '✓ Copiado' : 'Copiar'}
    </button>
  )
}
