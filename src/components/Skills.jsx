import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const stack = [
  {
    category: 'Frontend',
    color: 'text-brand',
    bar: 'from-brand to-cyan-400',
    skills: [
      { name: 'HTML5', level: 'Avanzado', color: 'emerald' },
      { name: 'CSS3', level: 'Avanzado', color: 'emerald' },
      { name: 'JavaScript', level: 'Medio', color: 'yellow' },
      { name: 'TypeScript', level: 'Bajo', color: 'red' },
      { name: 'React', level: 'Medio', color: 'yellow' },
    ],
  },
  {
    category: 'Backend & APIs',
    color: 'text-violet-400',
    bar: 'from-violet-500 to-brand',
    skills: [
      { name: 'Node.js', level: 'Bajo', color: 'red' },
      { name: 'PHP', level: 'Medio', color: 'yellow' },
      { name: 'FastAPI', level: 'Bajo', color: 'red' },
      { name: 'Laravel', level: 'Medio', color: 'yellow' },
      { name: 'Java', level: 'Avanzado', color: 'emerald' },
    ],
  },
  {
    category: 'Datos & Diseño',
    color: 'text-emerald-400',
    bar: 'from-emerald-400 to-teal-400',
    skills: [
      { name: 'PostgreSQL', level: 'Bajo', color: 'red' },
      { name: 'MongoDB', level: 'Bajo', color: 'red' },
      { name: 'Supabase', level: 'Bajo', color: 'red' },
      { name: 'Figma', level: 'Avanzado', color: 'emerald' },
      { name: 'UI/UX Design', level: 'Avanzado', color: 'emerald' },
    ],
  },
]

const levelColors = {
  red: 'bg-red-500/15 border-red-500/25 text-red-300',
  yellow: 'bg-yellow-500/15 border-yellow-500/25 text-yellow-300',
  emerald: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-300',
}

const tools = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'PHP', 'Java', 'FastAPI', 'Laravel', 'PostgreSQL', 'MongoDB',
  'Supabase', 'Figma', 'UI/UX', 'Git',
]

export default function Skills() {
  return (
    <section id="tecnologias" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading index="03" title="Tecnologías" subtitle="Herramientas y lenguajes con los que trabajo, en distintos niveles de dominio." />

        {/* Marquee */}
        <Reveal className="mb-12 -mx-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex gap-3 w-max animate-[marquee_24s_linear_infinite]">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="flex-shrink-0 px-4 py-2 rounded-full glass text-sm text-slate-400 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {stack.map((cat, ci) => (
            <Reveal key={ci} direction="up" delay={ci * 0.1}>
              <motion.div
                className="glass rounded-3xl p-6 h-full"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`h-6 w-1 rounded-full bg-gradient-to-b ${cat.bar}`} />
                  <h3 className={`font-heading text-xs font-semibold uppercase tracking-widest ${cat.color}`}>
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <motion.div
                      key={si}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${levelColors[s.color]}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.08 + si * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.06 }}
                    >
                      {s.name}
                      <span className="opacity-60 text-[10px]">· {s.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-5">
          <div className="glass rounded-3xl p-6 border-l-2 border-brand">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-white">Mi enfoque:</span>{' '}
              Combino tecnología y diseño para crear interfaces claras, accesibles y eficaces.
              Siempre busco el equilibrio entre funcionalidad y experiencia de usuario.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
