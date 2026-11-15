'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lock, X } from 'lucide-react'
import GithubIcon from '@/components/ui/github-icon'

export function PrivateCodeDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Private repository"
        title="Private repository"
        className="flex items-center gap-1.5 text-slate-hint hover:text-silver-mist transition-colors cursor-pointer"
      >
        <GithubIcon size={20} color="currentColor" />
        <Lock size={12} className="text-slate-hint" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-surface border border-primary-container/30 rounded-xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-primary-container/15">
              <h3 id="dialog-title" className="font-subheading text-base font-bold text-silver-mist">
                Private Repository
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="text-slate-hint hover:text-silver-mist transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-4 font-body text-body-sm text-slate-hint space-y-2.5">
              <p>
                The source code for <span className="text-silver-mist font-medium">Mission Overlay (Drone GCS)</span> is currently in a private repository due to the mission-critical nature of its flight control and telemetry routines.
              </p>
              <p className="text-caption text-slate-hint">
                Architecture details and system demonstrations can be shared upon request.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-primary-container/15">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg font-heading-sm text-caption text-slate-hint border border-outline-variant hover:border-silver-mist hover:text-silver-mist transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg font-heading-sm text-caption font-bold bg-primary-container text-silver-mist hover:bg-secondary-container transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
