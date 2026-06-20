// Animated aurora / mesh-gradient background — fixed behind all content.
export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#030712]" />
      <div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-40"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', animation: 'aurora-1 22s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', animation: 'aurora-2 26s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-25"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', animation: 'aurora-1 30s ease-in-out infinite reverse' }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />
    </div>
  )
}
