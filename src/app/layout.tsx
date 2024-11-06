import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  metadataBase: new URL('https://austink.dev'),
  title: {
    template: `%s - ${siteConfig.title}`,
    default: `${siteConfig.title} - Software engineer, founder, and designer`,
  },
  description: siteConfig.description,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    images: ['/og.png'],
    siteName: siteConfig.title,
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    title: `${siteConfig.title} - Software engineer, founder, and designer`,
    description: siteConfig.twitter.description,
    card: 'summary_large_image',
    images: ['/twitter-og.png'],
    creator: siteConfig.twitter.handle,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
