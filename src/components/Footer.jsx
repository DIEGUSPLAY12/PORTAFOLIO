import Magnetic from './Magnetic'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-cyan-400 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">D</span>
            </span>
            <div>
              <p className="font-heading font-semibold text-white text-sm leading-tight">diego.dev</p>
              <p className="text-slate-500 text-xs">Diego García Senciales</p>
            </div>
          </div>

          <p className="text-slate-500 text-xs text-center font-mono order-last md:order-none">
            <span className="text-emerald-400">echo</span> 'Gracias por visitar';
          </p>

          <Magnetic strength={0.3}>
            <a
              href="#inicio"
              aria-label="Volver arriba"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Volver arriba
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </a>
          </Magnetic>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © 2025 · Construido con React, Vite, Framer Motion y Tailwind CSS · Diseñado con cariño
          </p>
        </div>
      </div>
    </footer>
  )
}
