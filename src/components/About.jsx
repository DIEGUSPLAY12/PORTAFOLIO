import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Counter from './Counter'
import SectionHeading from './SectionHeading'

const stats = [
  { to: 16, suffix: '+', label: 'Tecnologías', accent: 'text-brand' },
  { to: 3, suffix: '', label: 'Proyectos', accent: 'text-cyan-400' },
  { to: 4, suffix: '', label: 'Etapas formativas', accent: 'text-violet-400' },
  { to: 100, suffix: '%', label: 'Autodidacta', accent: 'text-emerald-400' },
]

const timeline = [
  {
    period: '2026 · Actualidad',
    title: 'Prácticas de Empresa — ALTEN',
    desc: 'Desarrollo fullstack con React, FastAPI, Supabase y PostgreSQL en un entorno profesional.',
    dot: 'from-brand to-cyan-400',
    active: true,
  },
  {
    period: '2024 – 2026',
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    desc: 'Especialización en frontend, proyectos prácticos y tecnologías modernas.',
    dot: 'from-violet-500 to-brand',
  },
  {
    period: '2022 – 2024',
    title: 'Bachillerato Tecnológico',
    desc: 'Base en el área tecnológica con primeros conocimientos de programación en C++.',
    dot: 'from-cyan-400 to-emerald-400',
  },
  {
    period: '2019 – 2022',
    title: 'Profesor particular de informática',
    desc: 'Enseñanza de informática básica, ofimática y uso práctico del ordenador.',
    dot: 'from-emerald-400 to-teal-400',
  },
]

const values = [
  {
    title: 'Código Limpio',
    desc: 'Priorizo la legibilidad, mantenibilidad y buenas prácticas en cada línea.',
    accent: 'text-brand',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
  },
  {
    title: 'Trabajo en Equipo',
    desc: 'Colaboración, comunicación abierta y aprendizaje mutuo en cada proyecto.',
    accent: 'text-violet-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
  },
  {
    title: 'Aprendizaje Continuo',
    desc: 'Me mantengo actualizado con las últimas tecnologías y mejores prácticas.',
    accent: 'text-emerald-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading index="01" title="Sobre mí" />

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-4 md:auto-rows-[1fr]">
          {/* Bio */}
          <Reveal direction="up" className="md:col-span-2 md:row-span-2">
            <div className="glass rounded-3xl p-7 h-full space-y-4 border-gradient">
              <div className="flex items-center gap-2 text-xs font-mono text-brand">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" /> mi historia
              </div>
              <p className="text-slate-300 leading-relaxed">
                Soy un estudiante apasionado por la programación y la tecnología. Me interesa seguir
                desarrollando mis conocimientos con el objetivo de contribuir a soluciones innovadoras
                y eficientes.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Me gusta enfrentar nuevos retos que me ayuden a crecer y participar en proyectos que
                aporten algo positivo. Disfruto trabajar en equipo, compartir ideas y aprender de los
                demás, porque creo que la colaboración es clave para lograr grandes cosas.
              </p>
            </div>
          </Reveal>

          {/* Photo */}
          <Reveal direction="up" delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="group relative glass rounded-3xl overflow-hidden h-full min-h-[260px]">
              <img
                src={`${import.meta.env.BASE_URL}IMG/carnet.jpg`}
                alt="Diego García"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl font-bold text-white">Diego García Senciales</p>
                <p className="text-slate-300 text-sm mb-3">FullStack Student · DAW</p>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'JavaScript', 'PHP', 'Figma'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md glass-strong text-[11px] text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          {stats.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={0.15 + i * 0.06} className="md:col-span-1">
              <div className="glass rounded-3xl p-5 h-full flex flex-col justify-center items-center text-center hover:bg-white/[0.06] transition-colors duration-300">
                <Counter to={s.to} suffix={s.suffix} className={`font-heading text-3xl md:text-4xl font-bold ${s.accent}`} />
                <p className="text-slate-400 text-xs mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trajectory */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[280px_1fr]">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Trayectoria</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Un recorrido de aprendizaje constante, desde la enseñanza hasta el desarrollo profesional.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-violet-500/40 to-transparent" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <Reveal key={i} direction="left" delay={i * 0.08}>
                  <div className="relative pl-8 group">
                    <span className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${t.dot} ring-4 ring-[#030712]`}>
                      {t.active && <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />}
                    </span>
                    <div className="glass rounded-2xl p-5 group-hover:bg-white/[0.06] group-hover:translate-x-1 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="text-xs font-mono text-slate-500">{t.period}</p>
                        {t.active && <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-[10px] font-medium">actual</span>}
                      </div>
                      <p className="font-heading font-semibold text-white">{t.title}</p>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Mi enfoque</h3>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  className="group glass rounded-3xl p-6 h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className={`w-11 h-11 rounded-2xl glass flex items-center justify-center mb-4 ${v.accent} group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{v.icon}</svg>
                  </div>
                  <h4 className="font-heading font-semibold text-white mb-1.5">{v.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
