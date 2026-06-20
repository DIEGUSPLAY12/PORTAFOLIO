import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const code = `<span class="text-violet-400">const</span> <span class="text-cyan-300">diego</span> <span class="text-slate-400">=</span> {
  <span class="text-sky-300">name</span><span class="text-slate-400">:</span> <span class="text-emerald-300">'Diego García'</span><span class="text-slate-400">,</span>
  <span class="text-sky-300">role</span><span class="text-slate-400">:</span> <span class="text-emerald-300">'FullStack Student'</span><span class="text-slate-400">,</span>
  <span class="text-sky-300">values</span><span class="text-slate-400">:</span> [<span class="text-emerald-300">'UX'</span><span class="text-slate-400">,</span> <span class="text-emerald-300">'aprendizaje'</span><span class="text-slate-400">,</span> <span class="text-emerald-300">'colaboración'</span>]<span class="text-slate-400">,</span>
  <span class="text-sky-300">goal</span><span class="text-slate-400">:</span> <span class="text-emerald-300">'crear interfaces útiles y bonitas'</span>
<span class="text-slate-400">}</span>

<span class="text-violet-400">function</span> <span class="text-yellow-300">sayHi</span><span class="text-slate-400">() {</span>
  <span class="text-violet-400">return</span> <span class="text-emerald-300">'Hola! Gracias por pasar.'</span>
<span class="text-slate-400">}</span>

<span class="text-slate-500">// output →</span> <span class="text-emerald-300">"Hola! Gracias por pasar."</span>`

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Left: Profile */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Disponible para colaboraciones
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="./IMG/carnet.jpg"
                  alt="Diego García"
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-brand/40"
                  loading="eager"
                />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                  Diego García
                </h1>
                <p className="text-slate-400 text-sm mt-0.5">FullStack Student · Dev entusiasta</p>
              </div>
            </motion.div>

            <motion.p variants={item} className="text-slate-300 text-base leading-relaxed max-w-lg">
              Me apasiona la programación y la tecnología. Busco crecer como desarrollador creando soluciones
              útiles con buen diseño y foco en la experiencia de usuario.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'PHP', 'Java', 'FastAPI', 'Figma'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg glass text-xs text-slate-300 hover:text-white hover:border-brand/40 transition-all duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="Currículum Vitae CV Diego Garcia Senciales spanish.pdf.pdf"
                download="CV_Diego_Garcia_Senciales.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Descargar CV
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-white font-semibold text-sm hover:bg-white/8 transition-all duration-200"
              >
                Ver proyectos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            variants={item}
            className="order-1 lg:order-2"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="glass rounded-2xl overflow-hidden shadow-glass">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/2">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-slate-500 font-mono">portfolio.js — diego</span>
                <CopyButton code={code} />
              </div>
              {/* Code */}
              <pre className="p-5 text-sm leading-7 font-mono overflow-x-auto text-slate-300">
                <code dangerouslySetInnerHTML={{ __html: code }} />
              </pre>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
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
      className="ml-auto text-xs px-2 py-1 rounded-md glass text-slate-400 hover:text-white transition-colors cursor-pointer"
    >
      {copied ? '✓ Copiado' : 'Copiar'}
    </button>
  )
}

import { useState } from 'react'
