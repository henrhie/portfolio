import { Button } from '@/components/Button'
import { siteConfig } from '@/lib/site-config'
import Image, { type ImageProps } from 'next/image'

// Zed's prettier configuration isn't playing nice with types
// prettier-ignore
type SVGProps = React.ComponentPropsWithoutRef<'svg'>

export function EducationIcon(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <defs>
        <mask id="ipTBookOpen0">
          <path
            className="fill-zinc-900 stroke-zinc-500 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            strokeLinejoin="round"
            strokeWidth="2.8"
            d="M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13z"
          ></path>
        </mask>
      </defs>
      <path
        // className="stroke-zinc-400 dark:stroke-zinc-500"
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipTBookOpen0)"
      ></path>
    </svg>
  )
}

export function ArrowDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  start: string | { label: string; dateTime: string }
  end?: string | { label: string; dateTime: string }
  logo?: string
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
      {/* <div> */}
      {/* <img
        className="relative mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        src={role.logo}
        alt=""
      /> */}
      {/* </div> */}
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

export function Resume() {
  const resume = [
    {
      company: 'University of New Orleans',
      title: 'PhD Computer Science',
      start: '2024',
      logo: 'https://www.uno.edu/og-image.jpg',
      end: {
        label: '2029',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Kwame Nkrumah University of Science and Technology',
      title: 'Bsc. Electrical Engineering',
      start: '2017',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh2CpVCzlrdp7jEg0YfaK_EnktZeTMs6qaA&s',
      end: {
        label: '2021',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EducationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href={siteConfig.resume}
        rel="noopener noreferrer"
        target="_blank"
        download
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
