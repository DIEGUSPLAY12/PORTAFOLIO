import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const stack = [
  {
    category: 'Frontend',
    color: 'text-brand',
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="flex items-end gap-4 mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Tecnologías</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
          </div>
        </FadeUp>

        {/* Scrolling marquee */}
        <FadeUp className="mb-12 overflow-hidden">
          <div className="flex gap-3 animate-[marquee_20s_linear_infinite]">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="flex-shrink-0 px-3 py-1.5 rounded-full glass text-xs text-slate-400 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-3">
          {stack.map((cat, ci) => (
            <FadeUp key={ci} delay={ci * 0.1}>
              <motion.div
                className="glass rounded-2xl p-6 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <h3 className={`font-heading text-xs font-semibold uppercase tracking-widest mb-5 ${cat.color}`}>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, si) => (
                    <motion.div
                      key={si}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${levelColors[s.color]}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.06, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {s.name}
                      <span className="opacity-70 text-[10px]">{s.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Approach card */}
        <FadeUp delay={0.3} className="mt-6">
          <div className="glass rounded-2xl p-5 border-l-2 border-brand">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-white">Mi enfoque:</span>{' '}
              Combino tecnología y diseño para crear interfaces claras, accesibles y eficaces.
              Siempre buscando el equilibrio entre funcionalidad y experiencia de usuario.
            </p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
