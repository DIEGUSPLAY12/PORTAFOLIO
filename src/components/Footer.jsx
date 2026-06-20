export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-to-br from-brand to-cyan-400 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xs">D</span>
          </span>
          <span className="font-heading font-semibold text-white text-sm">diego.dev</span>
        </div>
        <p className="text-slate-500 text-xs text-center">
          © 2025 Diego García Senciales — construido con React + Vite + Framer Motion + Tailwind
        </p>
        <p className="text-slate-600 text-xs font-mono">echo 'Gracias por visitar';</p>
      </div>
    </footer>
  )
}
