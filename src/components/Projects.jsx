import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const projects = [
  {
    title: 'Tienda Online de Zapatos',
    desc: 'E-commerce con carrito de compra completo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    learning: 'Estructuras HTML + JS interactivo.',
    img: './IMG/Captura de pantalla 2025-11-07 133222.png',
    href: 'https://github.com/DIEGUSPLAY12/MIS_PROJECTOS/tree/main/trabajos/Proyectos%20personales/PERSONAL_PROJECT_01',
    accent: 'from-brand/20 to-cyan-400/10',
    border: 'hover:border-brand/30',
  },
  {
    title: 'Mini proyectos de iniciación',
    desc: 'Fundamentos de web y maquetación CSS.',
    tags: ['HTML', 'CSS', 'XML', 'JavaScript'],
    learning: 'Buenas prácticas y organización CSS.',
    img: './IMG/código-fuente-de-programación-equipo-tecnología-moderna-aplicación-codificación-por-desarrollador-programadores-software-en-241804713.webp',
    href: 'https://github.com/La-Salle-Gracia-FP/html-css-DIEGUSPLAY12',
    accent: 'from-violet-500/20 to-brand/10',
    border: 'hover:border-violet-500/30',
  },
  {
    title: 'FutDraft',
    desc: 'Generador de plantillas 1vs1 de fútbol.',
    tags: ['Java'],
    learning: 'Manejo de errores y Exceptions en Java.',
    img: './IMG/Captura de pantalla 2025-11-07 132946.png',
    href: 'https://github.com/LaSalleGracia-Programacio/24-25-pr-ctica-i-equipo-4',
    accent: 'from-emerald-500/20 to-teal-400/10',
    border: 'hover:border-emerald-500/30',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="flex items-end gap-4 mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Proyectos</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
          </div>
          <p className="text-slate-400 mb-12">Prácticos y personales durante mi formación.</p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.article
                className={`group glass rounded-2xl overflow-hidden border border-white/8 ${p.border} transition-colors duration-300 h-full flex flex-col`}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-white text-base mb-1">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full glass text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-500 text-xs mb-4 flex-1">
                    <span className="text-slate-400 font-medium">Aprendizaje:</span> {p.learning}
                  </p>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-cyan-300 transition-colors group/link"
                  >
                    Ver en GitHub
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
