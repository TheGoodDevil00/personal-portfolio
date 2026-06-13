'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

export function TopNavBar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-300 ${
        isMenuOpen 
          ? 'bg-transparent border-transparent' 
          : 'bg-background/80 backdrop-blur-md border-b border-primary-container/20'
      }`}>
      <div className="w-full max-w-container-max mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-heading-sm text-xl md:text-heading-sm font-bold text-silver-mist tracking-tighter relative z-[120]">
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
          <Link href="/resume">
            <button className="px-6 py-2 bg-transparent border border-primary text-primary font-body text-body rounded hover:border-silver-mist hover:text-silver-mist transition-colors duration-300">
              Resume
            </button>
          </Link>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-silver-mist z-[120] relative p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={30} className="stroke-[1.5]" />
          ) : (
            <Menu size={30} className="stroke-[1.5]" />
          )}
        </button>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-background md:hidden flex flex-col items-center pt-32 pb-12 gap-10 overflow-y-auto w-full"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={isActive 
                        ? "text-primary text-3xl sm:text-4xl font-display font-bold text-center"
                        : "text-slate-hint text-3xl sm:text-4xl font-display font-medium hover:text-silver-mist transition-colors text-center"}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/resume" onClick={() => setIsMenuOpen(false)}>
                <button className="px-6 py-3 bg-transparent border border-primary text-primary font-heading-sm text-lg rounded-lg hover:border-silver-mist hover:text-silver-mist transition-colors">
                  Resume
                </button>
              </Link>
            </motion.div>

            {/* Architectural visual detail in mobile menu */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="w-12 h-px bg-primary-container/30"></div>
              <span className="font-label-mono text-[10px] text-slate-hint/40 uppercase tracking-widest">Void Eclipse // System initialized</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
