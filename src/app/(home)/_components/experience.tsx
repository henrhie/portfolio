import { Button } from '@/components/Button'
import { siteConfig } from '@/lib/site-config'
import Image, { type ImageProps } from 'next/image'

// Zed's prettier configuration isn't playing nice with types
// prettier-ignore
type SVGProps = React.ComponentPropsWithoutRef<'svg'>

function BriefcaseIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  start: string | { label: string; dateTime: string }
  end?: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  const endLabel = typeof role.end === 'string' ? role.end : role.end?.label
  const endDate = typeof role.end === 'string' ? role.end : role.end?.dateTime

  return (
    <li className="flex gap-4">
      {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" />
      </div> */}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>
          {role.end ? (
            <>
              {' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={endDate}>{endLabel}</time>
            </>
          ) : null}
        </dd>
      </dl>
    </li>
  )
}

export function Experience() {
  const resume = [
    {
      company: 'Humans, Hybrid AI, and Machines (HAIM) Lab',
      title: 'Research Assistant',
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Ipay Solutions Limited',
      title: 'Software Engineer',
      start: '2022',
      end: {
        label: '2024',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Stanbic Bank Ghana',
      title: 'Site Reliability Engineer',
      start: '2021',
      end: {
        label: '2022',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}
