import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Space_Mono } from 'next/font/google'
import './globals.css'
import { TopNavBar } from '@/components/TopNavBar'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hitesh Patil',
  description: 'Aspiring ML Engineer & Backend Developer Portfolio',
  icons: {
    icon: '/avatar.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark overflow-x-hidden ${montserrat.variable} ${playfairDisplay.variable} ${spaceMono.variable}`}>
      <body className="bg-background text-on-background min-h-screen flex flex-col font-body text-body antialiased selection:bg-primary-container selection:text-silver-mist overflow-x-hidden">
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
