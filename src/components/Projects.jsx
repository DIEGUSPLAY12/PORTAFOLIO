import Reveal from './Reveal'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Tienda Online de Zapatos',
    desc: 'E-commerce completo con carrito de compra y gestión de productos.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    learning: 'Estructuras HTML + JS interactivo.',
    img: './IMG/Captura de pantalla 2025-11-07 133222.png',
    href: 'https://github.com/DIEGUSPLAY12/MIS_PROJECTOS/tree/main/trabajos/Proyectos%20personales/PERSONAL_PROJECT_01',
    glow: 'group-hover:shadow-glow',
  },
  {
    title: 'Mini proyectos de iniciación',
    desc: 'Fundamentos de web y maquetación con buenas prácticas de CSS.',
    tags: ['HTML', 'CSS', 'XML', 'JavaScript'],
    learning: 'Organización y buenas prácticas CSS.',
    img: './IMG/código-fuente-de-programación-equipo-tecnología-moderna-aplicación-codificación-por-desarrollador-programadores-software-en-241804713.webp',
    href: 'https://github.com/La-Salle-Gracia-FP/html-css-DIEGUSPLAY12',
    glow: 'group-hover:shadow-[0_0_32px_rgba(139,92,246,0.3)]',
  },
  {
    title: 'FutDraft',
    desc: 'Generador de plantillas de fútbol 1vs1 desarrollado en Java.',
    tags: ['Java'],
    learning: 'Manejo de errores y Exceptions.',
    img: './IMG/Captura de pantalla 2025-11-07 132946.png',
    href: 'https://github.com/LaSalleGracia-Programacio/24-25-pr-ctica-i-equipo-4',
    glow: 'group-hover:shadow-glow-cyan',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading index="02" title="Proyectos" subtitle="Trabajos prácticos y personales desarrollados durante mi formación." />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <TiltCard className="h-full">
                <article className={`group glass rounded-3xl overflow-hidden h-full flex flex-col transition-shadow duration-500 ${p.glow}`}>
                  <div className="relative overflow-hidden h-44" style={{ transform: 'translateZ(40px)' }}>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="font-heading font-semibold text-white text-base mb-1.5">{p.title}</h3>
                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">{p.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full glass text-slate-300">{t}</span>
                      ))}
                    </div>

                    <p className="text-slate-500 text-xs mb-4 flex-1">
                      <span className="text-slate-400 font-medium">↳ Aprendizaje:</span> {p.learning}
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
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal direction="up" delay={0.2} className="mt-10 text-center">
          <a
            href="https://github.com/DIEGUSPLAY12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium text-sm hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.16-.13-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.25 2.84.12 3.14.77.82 1.23 1.87 1.23 3.16 0 4.53-2.81 5.52-5.49 5.81.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" /></svg>
            Ver todos mis repositorios
          </a>
        </Reveal>
      </div>
    </section>
  )
}
