import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Magnetic from './Magnetic'

const socials = [
  {
    label: 'LinkedIn',
    value: 'Diego García Senciales',
    href: 'https://www.linkedin.com/in/diego-garc%C3%ADa-senciales-783870339/',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8.98z" /></svg>,
    color: 'hover:text-blue-400',
  },
  {
    label: 'GitHub',
    value: '@DIEGUSPLAY12',
    href: 'https://github.com/DIEGUSPLAY12',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.16-.13-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.25 2.84.12 3.14.77.82 1.23 1.87 1.23 3.16 0 4.53-2.81 5.52-5.49 5.81.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" /></svg>,
    color: 'hover:text-white',
  },
  {
    label: 'Email',
    value: 'diegosenciales@gmail.com',
    href: 'mailto:diegosenciales@gmail.com',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
    color: 'hover:text-brand',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading index="05" title="Contacto" subtitle="¿Tienes un proyecto o una oportunidad? Hablemos. Te responderé lo antes posible." />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          {/* Socials */}
          <Reveal direction="right">
            <div className="glass rounded-3xl p-6 h-full flex flex-col">
              <h3 className="font-heading font-semibold text-white mb-1">Conecta conmigo</h3>
              <p className="text-slate-500 text-sm mb-6">Estoy abierto a colaboraciones y nuevas oportunidades.</p>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <motion.a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-slate-400 ${s.color} transition-colors duration-200 group`}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    >
                      <span className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-white/15 transition-colors flex-shrink-0">
                        {s.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-slate-500">{s.label}</span>
                        <span className="block text-sm font-medium truncate">{s.value}</span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Disponible para colaboraciones
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-heading font-semibold text-white mb-5">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="nombre" label="Nombre" type="text" placeholder="Tu nombre"
                    value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} />
                  <Field id="email" label="Email" type="email" placeholder="tu@ejemplo.com"
                    value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <Field id="asunto" label="Asunto" type="text" placeholder="¿Sobre qué quieres hablar?"
                  value={form.asunto} onChange={(v) => setForm({ ...form, asunto: v })} />
                <div className="grid gap-1.5">
                  <label htmlFor="mensaje" className="text-sm text-slate-300">Mensaje</label>
                  <textarea
                    id="mensaje" required rows={5} placeholder="Escribe tu mensaje aquí..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 placeholder-slate-600 text-sm resize-none outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-1">
                  <Magnetic strength={0.3}>
                    <motion.button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-glow transition-shadow duration-300"
                      whileTap={{ scale: 0.97 }}
                    >
                      Enviar mensaje
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </motion.button>
                  </Magnetic>

                  <AnimatePresence>
                    {sent && (
                      <motion.p
                        role="alert"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-400 text-sm flex items-center gap-1.5"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ¡Mensaje enviado! Gracias.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type, placeholder, value, onChange }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm text-slate-300">{label}</label>
      <input
        id={id} type={type} required placeholder={placeholder}
        value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 placeholder-slate-600 text-sm outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all"
      />
    </div>
  )
}
