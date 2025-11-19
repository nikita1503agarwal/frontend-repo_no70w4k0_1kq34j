import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Brain, Wallet, Coins } from 'lucide-react'

const Panel = ({ title, icon: Icon, children, delay = 0 }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    className="relative rounded-2xl border border-sky-400/20 bg-slate-900/60 backdrop-blur-xl p-5 md:p-6 overflow-hidden group shadow-[0_0_40px_rgba(56,189,248,0.08)]"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -inset-24 bg-[radial-gradient(400px_200px_at_20%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(400px_200px_at_80%_10%,rgba(192,132,252,0.12),transparent)]" />
    </div>

    <div className="flex items-center gap-3 mb-4">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-sky-400/30 flex items-center justify-center">
        <Icon className="h-5 w-5 text-sky-200" />
      </div>
      <h3 className="text-sky-100 font-semibold tracking-wide">{title}</h3>
    </div>

    <div className="text-sky-100/90 text-sm leading-relaxed">
      {children}
    </div>

    {/* bottom accent */}
    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
  </motion.div>
)

function DataPanels() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <Panel title="Biodata" icon={BookOpen} delay={0.05}>
            <ul className="space-y-2">
              <li><span className="text-sky-300/80">Nama:</span> Maulana Niko Ainul Yaqin</li>
              <li><span className="text-sky-300/80">Lahir:</span> 7 April 2009</li>
              <li><span className="text-sky-300/80">Asal:</span> Gresik, Jawa Timur</li>
            </ul>
          </Panel>

          <Panel title="Riwayat Pendidikan" icon={GraduationCap} delay={0.1}>
            <ul className="space-y-2">
              <li>MI At-Taufiq — Tahfidz Juz 29–30 (2021–2022)</li>
              <li>MTS Ma’arif NU Randegansari</li>
              <li>Ponpes Al-Munawaroh — total 3 tahun (2024–2025)</li>
            </ul>
          </Panel>

          <Panel title="Keahlian Inti" icon={Brain} delay={0.15}>
            <ul className="space-y-2">
              <li>Bahasa Inggris & Bahasa Indonesia</li>
              <li>Teknologi dasar–menengah</li>
              <li>Al-Qur’an</li>
              <li>Pemahaman finansial</li>
            </ul>
          </Panel>

          <Panel title="Portofolio Nilai" icon={Wallet} delay={0.2}>
            <p>
              Memiliki tabungan jangka panjang berupa investasi crypto. Strategi berorientasi masa depan dengan kontrol risiko.
            </p>
          </Panel>

          <Panel title="Telemetry" icon={Coins} delay={0.25}>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[['Integrity', 98], ['Focus', 92], ['Learning', 95]].map(([label, val]) => (
                <div key={label} className="rounded-xl border border-sky-400/20 bg-slate-900/40 p-3">
                  <div className="text-lg font-semibold text-sky-100">{val}%</div>
                  <div className="text-[10px] uppercase tracking-widest text-sky-300/70">{label}</div>
                </div>
              ))}
            </div>
          </Panel>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-slate-900/60 to-slate-900/40 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
                <path d="M0 60 Q 120 20 240 60 T 480 60 T 720 60 T 960 60" stroke="url(#grad)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="p-6 md:p-8 relative">
              <h3 className="text-sky-100 font-semibold mb-2">Analitik Halus</h3>
              <p className="text-sky-100/80 text-sm max-w-3xl">
                Panel ini menampilkan grafik data halus dengan ilusi pemrosesan real-time. Garis tipis bercahaya lembut menyimulasikan aliran data di command-center futuristik.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DataPanels
