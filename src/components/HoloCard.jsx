function HoloCard({ title, children, footer }) {
  return (
    <div className="relative group rounded-2xl border border-sky-300/20 bg-slate-900/40 p-[1px] overflow-hidden">
      {/* Outer glow frame */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-fuchsia-500/10" />

      {/* Scanline + noise overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(transparent,rgba(255,255,255,0.04)_2px,transparent_4px)] bg-[length:100%_6px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.3),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_40%)]" />
      </div>

      {/* Content panel */}
      <div className="relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/5 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-sky-200/70">AI Parse Unit</div>
          <div className="text-[10px] text-sky-300/60">Holo-Panel v2.3</div>
        </div>

        <h3 className="text-sky-100 text-lg font-semibold mb-2">{title}</h3>
        <div className="text-sky-100/80 text-sm leading-relaxed">
          {children}
        </div>

        {footer && (
          <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-sky-300/60">
            {footer}
          </div>
        )}
      </div>

      {/* Edge lights */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl border border-sky-400/20" />
      <div className="pointer-events-none absolute inset-x-12 -inset-y-1 blur-2xl bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-fuchsia-500/20" />
    </div>
  )
}

export default HoloCard
