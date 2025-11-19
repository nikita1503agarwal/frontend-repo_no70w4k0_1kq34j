import Hero from './components/Hero'
import HUDHeader from './components/HUDHeader'
import DataPanels from './components/DataPanels'
import NeonBackground from './components/NeonBackground'

function App() {
  return (
    <div className="min-h-screen text-sky-50 selection:bg-sky-400/30 selection:text-sky-100">
      <NeonBackground />

      <HUDHeader />
      <Hero />
      <DataPanels />

      <footer className="relative z-10 mt-10 md:mt-14 pb-10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="rounded-2xl border border-sky-400/20 bg-slate-900/60 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
            <p className="text-xs md:text-sm text-sky-300/70 tracking-widest uppercase">System Ready • Low-latency UI</p>
            <p className="text-xs md:text-sm text-sky-300/70">© {new Date().getFullYear()} Maulana Niko Ainul Yaqin</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
