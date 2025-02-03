import { z } from 'zod'

export const SiteSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  email: z.string().email(),
  calLink: z.string(),
  calUrl: z.string().url(),
  resume: z.string().url(),
  twitter: z.object({
    handle: z.string(),
    description: z.string(),
  }),
  link: z.object({
    home: z.string().url(),
    contact: z.string().url(),
    thankYou: z.string().url(),
  }),
  social: z.object({
    twitter: z.string().url(),
    github: z.string().url(),
    linkedin: z.string().url(),
  }),
})

export type SiteConfig = z.infer<typeof SiteSchema>

export const siteConfig = {
  title: 'Henry Ansah',
  author: 'Henry Ansah',
  description: `I am currently a PhD student at the University of New Orleans working under Professor Shreya Banerjee. My research interest lies in the intersection between Multimodal Machine Learning, Natural Language Processing, and Reasoning.`,
  email: 'henryansah083@gmail.com',
  calLink: 'henry-ansah',
  calUrl: 'https://cal.com/henrhie',
  resume: '/files/cv.pdf',
  twitter: {
    handle: '@szntreble',
    description: 'CS PhD Student at UNO',
  },
  link: {
    home: '/',
    contact: '/contact',
    thankYou: '/thank-you',
  },
  social: {
    twitter: 'https://x.com/szntreble',
    github: 'https://github.com/henrhie',
    linkedin: 'https://www.linkedin.com/in/henry-ansah-6a8b84167/',
  },
} satisfies SiteConfig
