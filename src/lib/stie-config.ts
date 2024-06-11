import { z } from 'zod'

export const SiteSchema = z.object({
  title: z.string(),
  description: z.string(),
  email: z.string().email(),
  calLink: z.string(),
  calUrl: z.string().url(),
  link: z.object({
    home: z.string().url(),
    contact: z.string().url(),
  }),
})

export type SiteConfig = z.infer<typeof SiteSchema>

export const siteConfig = {
  title: 'Austin Karren',
  description: `Unleash the Power of Automation to Maximize Productivity, Streamline
  Operations, and Accelerate Growth`,
  email: 'ausitn@karren.com',
  calLink: 'austin-karren',
  calUrl: 'https://cal.com/austin-karren',
  link: {
    home: '/',
    contact: '/contact',
  },
} satisfies SiteConfig
