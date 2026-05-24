import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume | Hitesh Patil',
  description: "View Hitesh Patil's resume online or download a copy.",
}

export default function ResumePage() {
  return (
    <>
      {/* Atmospheric Deep Void Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-[100vw] h-[600px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="w-full relative z-10 max-w-container-max mx-auto px-4 md:px-8 pt-28 pb-section flex-grow">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 border-b border-primary-container/20 pb-6">
          <div className="max-w-2xl">
            <p className="font-label-mono text-label-mono text-slate-hint uppercase mb-4">05 // DOCUMENT</p>
            <h1 className="font-display text-4xl md:text-display text-silver-mist">Curriculum Vitae</h1>
          </div>
          <div className="flex flex-wrap gap-4 mb-2 w-full md:w-auto">
            <Link href="/" className="flex-1 md:flex-initial">
              <button className="w-full flex items-center justify-center gap-2 border border-outline-variant text-slate-hint px-6 py-3 rounded-lg font-heading-sm text-body-sm font-bold hover:border-silver-mist hover:text-silver-mist transition-colors duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back Home
              </button>
            </Link>
            <a href="/Hitesh_Patil_Resume.pdf" download="Hitesh_Patil_Resume.pdf" className="flex-1 md:flex-initial">
              <button className="w-full flex items-center justify-center gap-2 bg-primary-container border border-primary text-silver-mist px-6 py-3 rounded-lg font-heading-sm text-body-sm font-bold hover:bg-secondary-container transition-colors duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download PDF
              </button>
            </a>
          </div>
        </header>

        {/* PDF Viewer Frame */}
        <div className="glass-panel w-full h-[75vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl relative bg-surface-container-lowest">
          <iframe 
            src="/Hitesh_Patil_Resume.pdf" 
            className="w-full h-full border-none"
            title="Hitesh Patil Resume PDF"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-body text-body-sm text-slate-hint">
            Trouble viewing? Open the{" "}
            <a href="/Hitesh_Patil_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
              PDF in a new tab
            </a>.
          </p>
          <p className="font-label-mono text-caption text-slate-hint/60 uppercase">
            Updated: May 2026 // System Online
          </p>
        </div>
      </main>
    </>
  )
}
