import Link from 'next/link'
import RocketIcon from "@/components/ui/rocket-icon"
import CodeIcon from "@/components/ui/code-icon"
import GithubIcon from "@/components/ui/github-icon"

export const metadata = {
  title: 'Projects - Hitesh Patil',
}

export default function Projects() {
  return (
    <main className="flex-grow pt-28 pb-section px-4 md:px-8 max-w-container-max mx-auto w-full flex flex-col gap-section">
      {/* Hero Header */}
      <header className="flex flex-col gap-4 max-w-3xl">
        <span className="font-label-mono text-label-mono text-slate-hint uppercase tracking-[0.2em]">02 // PORTFOLIO</span>
        <h1 className="font-display text-display text-silver-mist">Selected Works</h1>
        <p className="font-body text-body text-slate-hint max-w-xl mt-4 leading-relaxed">
          A curated collection of scalable systems, high-performance web applications, and technical explorations. Built with precision and a void-first architectural approach.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-element">
        {/* Project Card 1 */}
        <article className="bg-transparent backdrop-blur-[8px] border border-primary-container/20 rounded-lg p-8 flex flex-col gap-6 hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(43,69,89,0.15)] transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col h-full">
            <header className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">directions_walk</span>
              <div className="flex gap-2">
                <Link href="https://github.com/TheGoodDevil00/WalkSafe" target="_blank" aria-label="GitHub" className="text-slate-hint hover:text-silver-mist transition-colors">
                  <GithubIcon size={20} color="currentColor" />
                </Link>
              </div>
            </header>
            <div className="flex-grow">
              <h2 className="font-subheading text-subheading text-silver-mist mb-3 group-hover:text-primary transition-colors duration-300">WalkSafe – Routing System</h2>
              <p className="font-body-sm text-body-sm text-slate-hint mb-6">
                An end-to-end geospatial navigation system prioritizing pedestrian safety over shortest-path routing. Features a safety scoring model using OSM data (lighting, sidewalks, road type), live navigation, safety overlays, and SOS alerts via a Flutter mobile app.
              </p>
            </div>
            <footer className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-primary-container/10">
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">Python</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">FastAPI</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">Flutter</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">PostGIS</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">OSMnx</span>
            </footer>
          </div>
        </article>

        {/* Project Card 2 */}
        <article className="bg-transparent backdrop-blur-[8px] border border-primary-container/20 rounded-lg p-8 flex flex-col gap-6 hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(43,69,89,0.15)] transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col h-full">
            <header className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">analytics</span>
              <div className="flex gap-3">
                <Link href="https://github.com/TheGoodDevil00/NYC-Taxi-Dataset" target="_blank" aria-label="Dataset Repository" title="Dataset Repository" className="text-slate-hint hover:text-silver-mist transition-colors">
                  <span className="material-symbols-outlined">dataset</span>
                </Link>
                <Link href="https://github.com/TheGoodDevil00/eda" target="_blank" aria-label="EDA Code" title="EDA Code" className="text-slate-hint hover:text-silver-mist transition-colors">
                  <GithubIcon size={20} color="currentColor" />
                </Link>
                <Link href="https://nyc-taxi-dataset-production.up.railway.app/" target="_blank" aria-label="Live Demo" title="Live Demo" className="text-primary hover:text-silver-mist transition-colors">
                  <RocketIcon size={20} color="currentColor" />
                </Link>
              </div>
            </header>
            <div className="flex-grow">
              <h2 className="font-subheading text-subheading text-silver-mist mb-3 group-hover:text-primary transition-colors duration-300">ML & Data Analysis</h2>
              <p className="font-body-sm text-body-sm text-slate-hint mb-6">
                A collection of ML and EDA projects on Iris, Titanic, housing, and NYC Taxi datasets. Built preprocessing pipelines, feature scaling, and hyperparameter tuning, deployed via FastAPI + Streamlit interface for end-to-end prediction.
              </p>
            </div>
            <footer className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-primary-container/10">
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">Scikit-learn</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">Pandas</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">Streamlit</span>
              <span className="font-caption text-caption text-silver-mist uppercase tracking-widest bg-surface-container-high/40 border border-primary-container/30 rounded px-2 py-1">FastAPI</span>
            </footer>
          </div>
        </article>
      </section>
    </main>
  )
}
