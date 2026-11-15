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

const siteUrl = 'https://thegooddevil.space'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hitesh Patil | ML Engineer & Backend Developer',
    template: '%s | Hitesh Patil',
  },
  description:
    'Personal portfolio of Hitesh Patil. Machine learning engineer and backend developer specializing in applied ML models, edge computer vision, and geospatial routing systems.',
  keywords: [
    'Hitesh Patil',
    'TheGoodDevil00',
    'Machine Learning Engineer',
    'Backend Developer',
    'Edge AI',
    'YOLO26',
    'Geospatial Routing',
    'Valhalla',
    'PostGIS',
    'Next.js 16',
    'Python',
    'PyTorch',
    'Drone GCS',
    'Autonomous Systems',
  ],
  authors: [{ name: 'Hitesh Patil', url: siteUrl }],
  creator: 'Hitesh Patil',
  publisher: 'Hitesh Patil',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'profile',
    firstName: 'Hitesh',
    lastName: 'Patil',
    username: 'TheGoodDevil00',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Hitesh Patil Portfolio',
    title: 'Hitesh Patil | ML Engineer & Backend Developer',
    description:
      'Personal portfolio of Hitesh Patil. Machine learning engineer and backend developer specializing in applied ML models, edge computer vision, and geospatial routing systems.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hitesh Patil - Machine Learning Engineer & Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitesh Patil | ML Engineer & Backend Developer',
    description:
      'Personal portfolio of Hitesh Patil. Machine learning engineer and backend developer specializing in applied ML models, edge computer vision, and geospatial routing systems.',
    creator: '@thegooddevill',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Hitesh Patil',
      alternateName: 'TheGoodDevil00',
      url: siteUrl,
      image: `${siteUrl}/avatar.png`,
      jobTitle: 'Machine Learning Engineer & Backend Developer',
      award: [
        '1st Prize Winner - MIT-WPU Incubex 2026 Innovation Challenge',
      ],
      description:
        'Machine learning engineer and backend developer specializing in applied ML models, edge computer vision, and geospatial routing systems.',
      sameAs: [
        'https://github.com/TheGoodDevil00',
        'https://linkedin.com/in/hitesh-patil07',
        'https://x.com/thegooddevill',
      ],
      knowsAbout: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Edge AI',
        'YOLO26',
        'Geospatial Routing',
        'PostGIS',
        'Valhalla',
        'Python',
        'FastAPI',
        'PyTorch',
        'Next.js',
        'Distributed Systems',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Hitesh Patil Portfolio',
      description: 'Personal portfolio and technical engineering showcase of Hitesh Patil',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Hitesh Patil | ML Engineer & Backend Developer',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark overflow-x-hidden ${montserrat.variable} ${playfairDisplay.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col font-body text-body antialiased selection:bg-primary-container selection:text-silver-mist overflow-x-hidden">
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
