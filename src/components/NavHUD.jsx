function NavHUD() {
  return (
    <header className="relative z-20">
      <div className="container mx-auto px-6 md:px-10 py-5">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-xl px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-[11px] uppercase tracking-[0.25em] text-sky-200/70">Command Center</div>
          </div>
          <div className="flex items-center gap-4 text-xs text-sky-200/70">
            <span className="hidden sm:inline">Latency: 12ms</span>
            <span className="hidden sm:inline">Packets: Stable</span>
            <button className="rounded-md border border-sky-400/30 bg-sky-400/10 px-3 py-1 hover:bg-sky-400/20 transition">Toggle Grid</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavHUD
