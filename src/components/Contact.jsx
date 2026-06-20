import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diego-garc%C3%ADa-senciales-783870339/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8.98z" />
      </svg>
    ),
    color: 'hover:text-blue-400',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DIEGUSPLAY12',
    icon: (
      <img src="./IMG/github.png" alt="GitHub" className="w-5 h-5 object-cover rounded-full" />
    ),
    color: 'hover:text-white',
  },
  {
    label: 'Email',
    href: 'mailto:diegosenciales@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="flex items-end gap-4 mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Contacto</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
          </div>
          <p className="text-slate-400 mb-12">¿Quieres ponerte en contacto? Te responderé lo antes posible.</p>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Socials */}
          <FadeUp delay={0.1}>
            <div className="glass rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">Redes sociales</h3>
                <p className="text-slate-500 text-sm">También puedes escribirme por aquí.</p>
              </div>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <motion.a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-slate-400 ${s.color} transition-colors duration-200 group cursor-pointer`}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    >
                      <span className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:border-white/15 transition-colors">
                        {s.icon}
                      </span>
                      <span className="text-sm font-medium">{s.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-white mb-5">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    id="nombre" label="Nombre" type="text" placeholder="Tu nombre"
                    value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })}
                  />
                  <Field
                    id="email" label="Email" type="email" placeholder="tu@ejemplo.com"
                    value={form.email} onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>
                <Field
                  id="asunto" label="Asunto" type="text" placeholder="Sobre qué quieres hablar"
                  value={form.asunto} onChange={(v) => setForm({ ...form, asunto: v })}
                />
                <div className="grid gap-1.5">
                  <label htmlFor="mensaje" className="text-sm text-slate-300">Mensaje</label>
                  <textarea
                    id="mensaje" required rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 text-slate-200 placeholder-slate-600 text-sm resize-none outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>

                <div className="flex items-center gap-4 mt-1">
                  <motion.button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    whileTap={{ scale: 0.97 }}
                  >
                    Enviar mensaje
                  </motion.button>

                  <AnimatePresence>
                    {sent && (
                      <motion.p
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-400 text-sm"
                      >
                        ✓ Mensaje enviado. ¡Gracias!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </FadeUp>
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
        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 text-slate-200 placeholder-slate-600 text-sm outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all"
      />
    </div>
  )
}
