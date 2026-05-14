export const metadata = {
  title: 'Experience & Resume | Hitesh Patil',
}

export default function Experience() {
  return (
    <>
      {/* Atmospheric Deep Void Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="relative z-10 max-w-container-max mx-auto px-4 md:px-8 pt-28 pb-section flex-grow">
        {/* Hero Section Asymmetric Layout */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-section border-b border-primary-container/20 pb-6">
          <div className="max-w-2xl">
            <p className="font-label-mono text-label-mono text-primary uppercase mb-unit">03 // TRAJECTORY</p>
            <h1 className="font-display text-display text-silver-mist">Experience</h1>
          </div>
          <div className="mb-2">
            <a href="/Hitesh_Patil_Resume.pdf" download="Hitesh_Patil_Resume.pdf">
              <button className="flex items-center gap-2 border border-surface-tint text-surface-tint px-6 py-3 rounded-lg font-heading-sm text-body-sm font-bold hover:border-silver-mist hover:text-silver-mist transition-colors duration-300">
                <span className="material-symbols-outlined">download</span>
                Download PDF
              </button>
            </a>
          </div>
        </header>

        {/* Two Column Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-section">
          {/* Left Column: Vertical Timeline (Span 8) */}
          <div className="lg:col-span-8 relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-primary-container/30 hidden md:block"></div>

            <div className="flex flex-col gap-element">
              {/* Frosted Card: Experience 1 */}
              <div className="relative bg-surface/40 backdrop-blur-[8px] border border-primary-container/20 p-6 md:p-8 rounded-xl md:ml-12 group hover:bg-surface-container-high/50 hover:border-primary-container/40 transition-all duration-500">
                {/* Timeline Node */}
                <div className="absolute -left-[36.5px] top-8 w-4 h-4 rounded-full bg-background border-2 border-primary hidden md:block group-hover:bg-primary transition-colors duration-300"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="font-subheading text-subheading text-silver-mist mb-1">AI/ML Cohort Member</h3>
                    <div className="flex items-center gap-2 font-body-sm text-body-sm text-primary">
                      <span className="material-symbols-outlined text-[16px]">domain</span>
                      <span>Catalyst Tech Club, Pune, India</span>
                    </div>
                  </div>
                  <div className="bg-surface-container border border-primary-container/30 px-3 py-1 rounded font-label-mono text-caption text-slate-hint uppercase">
                    Current
                  </div>
                </div>
                <ul className="list-none space-y-3 font-body text-body text-on-surface-variant mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim mt-1">arrow_right</span>
                    Selected for the college AI/ML cohort focused on applied machine learning, EDA, and project-based learning.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim mt-1">arrow_right</span>
                    Attend weekend technical sessions and contribute ~20 hours/week toward self-learning and project development.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim mt-1">arrow_right</span>
                    Build applied ML and backend-integrated projects to reinforce cohort learnings.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">PYTHON</span>
                  <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">EDA</span>
                  <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">SCIKIT-LEARN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar (Education & Certifications) (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-element">
            {/* Education Bento Box */}
            <div className="bg-surface/30 backdrop-blur-[8px] border border-primary-container/20 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none"></div>
              <p className="font-label-mono text-label-mono text-primary uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">school</span>
                Academic
              </p>
              <div className="mb-6 border-b border-primary-container/10 pb-6 last:border-0 last:pb-0">
                <h4 className="font-subheading text-body text-silver-mist font-bold mb-1">B.Tech in Electronics and Telecommunication</h4>
                <p className="font-body-sm text-body-sm text-slate-hint mb-2">AISSMS Institute of Information Technology, Pune</p>
                <p className="font-body-sm text-body-sm text-slate-hint mb-2">GPA: 8.00 / 10</p>
                <p className="font-label-mono text-caption text-outline-variant">2025 - Present</p>
              </div>
            </div>

            {/* Certifications Bento Box */}
            <div className="bg-surface/30 backdrop-blur-[8px] border border-primary-container/20 p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-container/10 blur-[50px] rounded-full pointer-events-none"></div>
              <p className="font-label-mono text-label-mono text-primary uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">build</span>
                Additional Skills
              </p>
              <div className="flex flex-col gap-4">
                <div className="group flex items-start gap-3 p-3 rounded bg-surface-container-low/50 hover:bg-surface-container border border-transparent hover:border-primary-container/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">schema</span>
                  <div>
                    <h5 className="font-body-sm text-body-sm font-bold text-silver-mist"> Version Control (Git/GitHub)</h5>
                    <p className="font-body-sm text-caption text-slate-hint leading-relaxed mt-1">Production-style Git workflows: branching, PRs, code reviews, and collaborative development at team scale.</p>
                  </div>
                </div>
                <div className="group flex items-start gap-3 p-3 rounded bg-surface-container-low/50 hover:bg-surface-container border border-transparent hover:border-primary-container/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mt-0.5">terminal</span>
                  <div>
                    <h5 className="font-body-sm text-body-sm font-bold text-silver-mist"> Linux Power User</h5>
                    <p className="font-body-sm text-caption text-slate-hint leading-relaxed mt-1">Fluent in the terminal: scripting, environment setup, and system navigation without touching a GUI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
