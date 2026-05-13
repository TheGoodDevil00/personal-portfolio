'use client'

import { useState } from 'react'
import Link from 'next/link'
import CodeIcon from "@/components/ui/code-icon"
import GithubIcon from "@/components/ui/github-icon"

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/xrejvgqa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('submitted')
        e.currentTarget.reset()
      } else {
        setStatus('error')
        console.error('Submission failed:', response.statusText)
      }
    } catch (err) {
      setStatus('error')
      console.error('Submission error:', err)
    }

    // Reset status after 5 seconds to allow another message
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <main className="flex-grow pt-28 pb-section max-w-container-max mx-auto px-8 w-full flex flex-col gap-section">
      {/* Header Section */}
      <header className="max-w-3xl">
        <span className="font-label-mono text-label-mono uppercase text-slate-hint block mb-4">04 // CONTACT</span>
        <h1 className="font-heading-lg text-heading-lg text-silver-mist">Let's Build Something!</h1>
        <p className="font-body text-body text-on-surface-variant mt-6 max-w-xl">
          Ready to architect your next digital experience? Initialize a connection via the form below or through direct secure channels.
        </p>
      </header>

      {/* Contact Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-section lg:gap-16 items-start">
        {/* Contact Form (Frosted Card) */}
        <div className="lg:col-span-7 bg-surface-container/20 backdrop-blur-md border border-primary-container/20 rounded-xl p-8 relative overflow-hidden group hover:border-primary-container/40 transition-all duration-500">
          {/* Subtle Gradient Glow inside card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/30 transition-all duration-700 pointer-events-none"></div>

          {status === 'submitted' ? (
            <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
              </div>
              <h2 className="font-heading-sm text-heading-sm text-silver-mist mb-2">Transmission Received</h2>
              <p className="font-body text-body text-slate-hint">Your message has been successfully routed. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-label-mono text-caption uppercase text-slate-hint">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-DEFAULT px-4 py-3 font-body text-body text-silver-mist focus:border-primary focus:outline-none focus:bg-surface-container-low transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label-mono text-caption uppercase text-slate-hint">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@domain.com"
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-DEFAULT px-4 py-3 font-body text-body text-silver-mist focus:border-primary focus:outline-none focus:bg-surface-container-low transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-mono text-caption uppercase text-slate-hint">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Compose a message..."
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-DEFAULT px-4 py-3 font-body text-body text-silver-mist focus:border-primary focus:outline-none focus:bg-surface-container-low transition-all resize-none"
                ></textarea>
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-caption font-label-mono animate-pulse">
                  Transmission error. Please check your connection and retry or use alternative routing.
                </p>
              )}
              <button
                disabled={status === 'submitting'}
                type="submit"
                className="mt-4 w-full bg-surface-container-high border border-outline-variant/50 text-silver-mist font-body font-bold text-body py-4 rounded-DEFAULT hover:bg-primary-container hover:text-white hover:border-primary-container hover:shadow-[0_0_20px_rgba(43,69,89,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                {status !== 'submitting' && (
                  <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Alternative Contact Methods */}
        <div className="lg:col-span-5 flex flex-col gap-12 pt-4">
          <div>
            <h2 className="font-subheading text-subheading text-silver-mist mb-6">Alternative Routing</h2>
            <div className="flex flex-col gap-6">
              {/* Direct Email */}
              <a href="mailto:thegooddevil00@gmail.com" className="flex items-center gap-4 group cursor-pointer border-b border-surface-variant pb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20 group-hover:border-primary/50 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-silver-mist transition-colors">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-caption uppercase text-slate-hint group-hover:text-primary transition-colors">Email directly</span>
                  <span className="font-body text-body text-silver-mist">thegooddevil00@gmail.com</span>
                </div>
              </a>
              {/* LinkedIn */}
              <Link href="https://linkedin.com/in/hitesh-patil07" target="_blank" className="flex items-center gap-4 group cursor-pointer border-b border-surface-variant pb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20 group-hover:border-primary/50 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-silver-mist transition-colors">work</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-caption uppercase text-slate-hint group-hover:text-primary transition-colors">Network</span>
                  <span className="font-body text-body text-silver-mist">LinkedIn Profile</span>
                </div>
              </Link>
              {/* GitHub */}
              <Link href="https://github.com/TheGoodDevil00" target="_blank" className="flex items-center gap-4 group cursor-pointer border-b border-surface-variant pb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20 group-hover:border-primary/50 group-hover:bg-primary-container/20 transition-all duration-300">
                  <GithubIcon size={24} color="var(--color-primary)" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-caption uppercase text-slate-hint group-hover:text-primary transition-colors">Repositories</span>
                  <span className="font-body text-body text-silver-mist">GitHub Profile</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Environmental visual detail */}
          <div className="hidden lg:block relative h-32 mt-auto border-l border-primary-container/30 pl-6">
            <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary/50"></span>
            <p className="font-label-mono text-caption text-slate-hint/60 leading-relaxed uppercase">
              LOC: 18.5204° N, 73.8567° E<br />
              PUNE, INDIA<br />
              STATUS: ONLINE
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
