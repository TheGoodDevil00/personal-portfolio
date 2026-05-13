import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-primary-container/10 w-full py-section mt-auto relative z-20">
      <div className="max-w-container-max mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-element">
        <div className="font-heading-sm text-heading-sm text-on-surface">
          HITESH PATIL
        </div>
        <div className="font-label-mono text-label-mono text-tertiary text-center md:text-left">
          © {new Date().getFullYear()} HITESH PATIL. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <Link href="https://github.com/TheGoodDevil00" target="_blank" className="font-label-mono text-label-mono text-slate-hint hover:text-silver-mist hover:-translate-y-[2px] transition-all duration-300">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/hitesh-patil07" target="_blank" className="font-label-mono text-label-mono text-slate-hint hover:text-silver-mist hover:-translate-y-[2px] transition-all duration-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
