import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Initialize a connection with Hitesh Patil. Available for machine learning engineering, edge AI, and high-performance backend development opportunities.',
  alternates: {
    canonical: 'https://thegooddevil.space/contact',
  },
  openGraph: {
    title: 'Contact | Hitesh Patil',
    description:
      'Initialize a connection with Hitesh Patil. Available for machine learning engineering, edge AI, and high-performance backend development opportunities.',
    url: 'https://thegooddevil.space/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
