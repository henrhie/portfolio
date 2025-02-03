import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { siteConfig } from '@/lib/site-config'
import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  metadataBase: new URL('https://henryansah.ai'),
  title: {
    template: `%s - ${siteConfig.title}`,
    default: `${siteConfig.title} - CS PhD Student at UNO`,
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
    title: `${siteConfig.title} - CS PhD Student at UNO`,
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
    <html
      lang="en"
      className={`h-full antialiased ${GeistSans.variable}`}
      suppressHydrationWarning
    >
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
