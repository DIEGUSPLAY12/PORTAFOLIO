import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const reflections = [
  {
    title: 'Lo que he aprendido',
    body: 'Bases sólidas en programación: control de flujo, funciones y POO. Mejor organización y valoración por el código limpio y documentado.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    accent: 'text-brand',
  },
  {
    title: 'Retos y objetivos',
    body: 'Adoptar nuevas herramientas (Java, Git), mejorar en JavaScript y empezar con backend para afrontar proyectos más complejos.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    accent: 'text-yellow-400',
  },
  {
    title: 'Trabajo en equipo',
    body: 'He aprendido que un proyecto serio no depende solo del código, sino de la comunicación y la coordinación. La responsabilidad compartida es fundamental.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: 'text-violet-400',
  },
  {
    title: 'Evolución técnica',
    body: 'Comprender lenguajes como PHP, TypeScript o Node.js me ha enseñado que aprender no es solo memorizar sintaxis, sino adoptar una mentalidad analítica.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    accent: 'text-cyan-400',
  },
  {
    title: 'Gestión del tiempo',
    body: 'Trabajar en proyectos más serios me ha obligado a planificar mejor, dividir tareas y aceptar que la calidad del trabajo depende de la organización.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: 'text-emerald-400',
  },
  {
    title: 'Visión profesional',
    body: 'Entiendo que ser desarrollador no significa solo escribir código, sino crear soluciones, colaborar y mantener una ética de trabajo profesional.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: 'text-pink-400',
  },
]

export default function Reflections() {
  return (
    <section id="reflexiones" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="flex items-end gap-4 mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Reflexiones</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
          </div>
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-2">
          {reflections.map((r, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.article
                className="glass rounded-2xl p-5 h-full flex gap-4 hover:bg-white/5 transition-colors duration-200"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-xl glass flex items-center justify-center mt-0.5 ${r.accent}`}>
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-2">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.body}</p>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
