import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const timeline = [
  {
    period: '2026 · Actualidad',
    title: 'Prácticas de Empresa — ALTEN',
    desc: 'Aplicando conocimientos en desarrollo fullstack con React, FastAPI, Supabase y PostgreSQL.',
    color: 'from-brand to-cyan-400',
  },
  {
    period: '2024 – 2026',
    title: 'Desarrollo de Aplicaciones Web',
    desc: 'Formación DAW especializándome en frontend, proyectos prácticos y tecnologías modernas.',
    color: 'from-violet-500 to-brand',
  },
  {
    period: '2022 – 2024',
    title: 'Bachillerato Tecnológico',
    desc: 'Formación en el área tecnológica con conocimientos de programación en C++.',
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    period: '2019 – 2022',
    title: 'Profesor particular de informática',
    desc: 'Enseñanza de informática básica, herramientas Office y uso práctico del ordenador.',
    color: 'from-emerald-400 to-teal-400',
  },
]

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Código Limpio',
    desc: 'Priorizo la legibilidad, mantenibilidad y buenas prácticas.',
    accent: 'text-brand',
    glow: 'group-hover:shadow-glow',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Trabajo en Equipo',
    desc: 'Colaboración, comunicación abierta y aprendizaje mutuo.',
    accent: 'text-violet-400',
    glow: 'group-hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Aprendizaje Continuo',
    desc: 'Me mantengo actualizado con las últimas tecnologías.',
    accent: 'text-emerald-400',
    glow: 'group-hover:shadow-[0_0_24px_rgba(52,211,153,0.3)]',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="flex items-end gap-4 mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Sobre mí</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
          </div>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="space-y-5">
              <h3 className="font-heading text-xl font-semibold text-white">Mi historia</h3>
              <div className="glass rounded-2xl p-6 space-y-4">
                {[
                  'Soy un estudiante apasionado por la programación y la tecnología. Me interesa seguir desarrollando mis conocimientos y habilidades, con el objetivo de contribuir a la creación de soluciones innovadoras y eficientes.',
                  'Me gusta seguir aprendiendo y enfrentar nuevos retos que me ayuden a crecer y participar en proyectos que realmente aporten algo positivo.',
                  'Disfruto trabajar en equipo, compartir ideas y aprender de los demás, porque creo que la colaboración es clave para lograr grandes cosas.',
                ].map((p, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Timeline */}
          <FadeUp delay={0.2}>
            <div className="space-y-5">
              <h3 className="font-heading text-xl font-semibold text-white">Trayectoria</h3>
              <div className="space-y-3">
                {timeline.map((t, i) => (
                  <motion.div
                    key={i}
                    className="glass rounded-2xl p-4 flex gap-4 hover:bg-white/5 transition-colors duration-200 cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${t.color} flex-shrink-0 shadow-lg`} />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{t.period}</p>
                      <p className="font-heading font-semibold text-white text-sm">{t.title}</p>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{t.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Values */}
        <FadeUp delay={0.3} className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-white mb-6">Enfoque</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`group glass rounded-2xl p-5 transition-all duration-300 ${v.glow}`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className={`w-10 h-10 rounded-xl glass flex items-center justify-center mb-4 ${v.accent}`}>
                  {v.icon}
                </div>
                <h4 className="font-heading font-semibold text-white mb-1">{v.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
