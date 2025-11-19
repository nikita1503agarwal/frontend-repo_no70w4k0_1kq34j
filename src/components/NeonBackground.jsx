function NeonBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* layered gradients */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_-10%_-10%,rgba(56,189,248,0.12),transparent),radial-gradient(900px_600px_at_110%_-10%,rgba(192,132,252,0.12),transparent)]" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(2,6,23,0),rgba(2,6,23,0.9))]" />
      {/* vertical scan lines */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(148,163,184,0.15) 0px, rgba(148,163,184,0.15) 1px, transparent 1px, transparent 3px)' }} />
    </div>
  )
}

export default NeonBackground
