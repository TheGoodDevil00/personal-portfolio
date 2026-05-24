import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-grow pt-20 pb-section">
      {/* Hero Section */}
      <section className="w-full max-w-container-max mx-auto px-4 md:px-16 pt-8 md:pt-16 pb-section flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left z-10 relative">
          <div className="font-label-mono text-label-mono uppercase text-slate-hint mb-6 tracking-widest">
            01 // Initialize
          </div>
          <h1 className="font-display text-display text-silver-mist mb-8 leading-tight">
            Hi, I'm <br /> <span className="text-gradient">Hitesh Patil</span>.
          </h1>
          <p className="font-subheading text-subheading text-slate-hint max-w-2xl mb-12">
            Passionate about building applied machine learning models and robust backend systems. Crafting intelligent, safety-aware applications and exploring the intersections of data and geospatial routing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/projects">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary-container text-silver-mist font-heading-sm text-body-sm font-bold rounded slate-glow hover:bg-secondary-container transition-all duration-300">
                View Work
              </button>
            </Link>
            <Link href="/resume">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-outline-variant text-silver-mist font-heading-sm text-body-sm font-bold rounded hover:border-silver-mist transition-all duration-300">
                Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full h-[500px] flex justify-center items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-container)_0%,_transparent_100%)] opacity-20 z-0"></div>
          <div className="relative z-10 w-full h-full glass-panel rounded-xl overflow-hidden group">
            <img
              alt="Hitesh Patil Avatar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/avatar.png"
            />
          </div>
        </div>
      </section>

      {/* Core Stack Section */}
      <section className="w-full max-w-container-max mx-auto px-4 md:px-16 py-section">
        <div className="font-label-mono text-label-mono uppercase text-slate-hint mb-12 tracking-widest text-center">
          CORE SKILLS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="glass-panel p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-colors duration-300 group">
            <span className="material-symbols-outlined text-4xl text-slate-hint group-hover:text-silver-mist transition-colors duration-300">
              code
            </span>
            <span className="font-heading-sm text-body font-bold text-silver-mist">Python</span>
            <span className="font-label-mono text-caption text-slate-hint">LANGUAGES</span>
          </div>
          <div className="glass-panel p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-colors duration-300 group">
            <span className="material-symbols-outlined text-4xl text-slate-hint group-hover:text-silver-mist transition-colors duration-300">
              api
            </span>
            <span className="font-heading-sm text-body font-bold text-silver-mist text-center">FastAPI <br/> Streamlit</span>
            <span className="font-label-mono text-caption text-slate-hint">FRAMEWORKS</span>
          </div>
          <div className="glass-panel p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-colors duration-300 group">
            <span className="material-symbols-outlined text-4xl text-slate-hint group-hover:text-silver-mist transition-colors duration-300">
              analytics
            </span>
            <span className="font-heading-sm text-body font-bold text-silver-mist text-center">Pandas <br/> Scikit-Learn</span>
            <span className="font-label-mono text-caption text-slate-hint">LIBRARIES</span>
          </div>
          <div className="glass-panel p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-colors duration-300 group">
            <span className="material-symbols-outlined text-4xl text-slate-hint group-hover:text-silver-mist transition-colors duration-300">
              build
            </span>
            <span className="font-heading-sm text-body font-bold text-silver-mist text-center">Git <br/> Docker</span>
            <span className="font-label-mono text-caption text-slate-hint">TOOLS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
