'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function TopNavBar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary-container/20">
      <div className="max-w-container-max mx-auto px-8 flex justify-between items-center h-20">
        <Link href="/" className="font-heading-sm text-heading-sm font-bold text-silver-mist tracking-tighter">
          HITESH PATIL
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={isActive 
                  ? "text-primary font-bold border-b-2 border-primary pb-1 font-body text-body cursor-pointer active:scale-95 transition-transform"
                  : "text-slate-hint font-medium hover:text-silver-mist transition-colors duration-300 font-body text-body cursor-pointer active:scale-95 transition-transform"}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="hidden md:block">
          <a href="/Hitesh_Patil_Resume.pdf" download="Hitesh_Patil_Resume.pdf">
            <button className="px-6 py-2 bg-transparent border border-primary text-primary font-body text-body rounded hover:border-silver-mist hover:text-silver-mist transition-colors duration-300">
              Resume
            </button>
          </a>
        </div>
        <button className="md:hidden flex items-center text-silver-mist">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  )
}
