import { Shield, ScanLine, PanelRight, LayoutGrid, Sparkles } from 'lucide-react'

function HUDHeader() {
  return (
    <header className="relative z-20">
      <div className="container mx-auto px-6 md:px-10 pt-6">
        <div className="rounded-2xl border border-sky-400/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden">
          {/* top holographic line */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30 border border-sky-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                  <Sparkles className="h-4 w-4 text-sky-200" />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-sky-300/70">Futuristic Portfolio</p>
                <h2 className="text-sm md:text-base font-semibold text-sky-100">Command Center UI</h2>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sky-200/80">
              <div className="hidden md:flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest">Secure</span>
                <Shield className="h-4 w-4" />
                <span className="text-[10px] uppercase tracking-widest">Scan</span>
                <ScanLine className="h-4 w-4" />
              </div>
              <div className="h-6 w-px bg-sky-400/20" />
              <LayoutGrid className="h-5 w-5" />
              <PanelRight className="h-5 w-5" />
            </div>
          </div>

          {/* bottom glow line */}
          <div className="relative">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
            <div className="absolute inset-0 animate-scanline" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HUDHeader
