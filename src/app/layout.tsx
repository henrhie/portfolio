import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.title}`,
    default: `${siteConfig.title} - Software engineer, founder, and designer`,
  },
  description:
    'I’m Austin, a software engineer and entrepreneur based in Vineyard Utah. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    images: ['@/images/og.png'],
  },
  twitter: {
    title: `${siteConfig.title} - Software engineer, founder, and designer`,
    description: siteConfig.description,
    card: 'summary_large_image',
    images: ['@/images/twitter-og.png'],
    creator: siteConfig.twitterHandle,
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
