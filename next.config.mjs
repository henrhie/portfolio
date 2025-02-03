import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // i18n: {
  //   locales: ['en-US'],
  //   defaultLocale: 'en-US',
  //   domains: [
  //     {
  //       domain: 'henryansah.dev',
  //       defaultLocale: 'en-US',
  //     },
  //   ],
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  basePath: '/spotlight',
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
