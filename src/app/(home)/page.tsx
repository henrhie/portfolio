import Link from 'next/link'
import { Button } from '@/components/Button'

import { Card, ChevronRightIcon } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  CalendarIcon,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
} from '@/components/SocialIcons'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { siteConfig } from '@/lib/site-config'

import { ArrowDownIcon, Resume } from './_components/resume'
import React from 'react'
import { Experience } from './_components/experience'
import { Skills } from './_components/skills'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={article.link}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta link={article.link}>
        {article?.linkText ?? 'Read article'}
      </Card.Cta>
    </Card>
  )
}

// zed is messing up typescript types
// prettier-ignore
type SocialLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
} & { type?: string; email?: string }

function SocialLink({
  icon: Icon,
  target = '_blank',
  type,
  email,
  ...props
}: SocialLinkProps) {
  if (type === 'email') {
    return (
      <a className="group -m-1 p-1" href={'mailto:' + email}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>
    )
  }

  return (
    <Link className="group -m-1 p-1" target={target} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  const articles = getAllArticles()

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Henry Ansah
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am currently a PhD student at the University of New Orleans
            working under{' '}
            <a
              aria-hidden="true"
              target="_blank"
              className="cursor:pointer text-cyan-400"
              href="https://www.uno.edu/profile/faculty/shreya_banerjee"
            >
              Dr. Shreya Banerjee
            </a>{' '}
            at the{' '}
            <a
              aria-hidden="true"
              target="_blank"
              className="cursor:pointer text-cyan-400"
              href="https://haim-lab.github.io/site/main.html"
            >
              Humans, Hybrid AI, and Machines (HAIM) Lab
            </a>
            . My research interest lies in the intersection between Multimodal
            Machine Learning, Natural Language Processing, and Reasoning. My
            research goal is to explore all the various ways to enable
            commonsense reasoning in vision and language models, drawing
            insights from the cognitive nature that surrounds the reasoning
            capabilities of biological entities.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteConfig.calUrl}
              aria-label="Schedule a Meeting"
              icon={CalendarIcon}
            />

            <SocialLink
              href={siteConfig.social.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteConfig.social.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={siteConfig.email}
              aria-label="Send email"
              icon={EmailIcon}
              type="email"
              email={siteConfig.email}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-12 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pr-16">
            <Resume />
            <Experience />
            <Skills />
          </div>
          <div className="flex flex-col gap-12 lg:pl-16">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-500 sm:text-3xl dark:text-zinc-100">
              Latest
            </h1>
            {articles.slice(0, 5).map((article) => (
              <Article key={article.title} article={article} />
            ))}
            <Link href="/latest">
              <Button
                rel="noopener noreferrer"
                target="_blank"
                variant="secondary"
                className="group mt-6 w-full"
                style={{ marginTop: -6 }}
              >
                View All
                <ChevronRightIcon className="mt-[-6] h-5 w-5 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
