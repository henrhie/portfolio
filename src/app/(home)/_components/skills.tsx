import { Button } from '@/components/Button'
import { siteConfig } from '@/lib/site-config'
import Image, { type ImageProps } from 'next/image'

// Zed's prettier configuration isn't playing nice with types
// prettier-ignore
type SVGProps = React.ComponentPropsWithoutRef<'svg'>

export function Spanner(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <mask id="ipTSpanner0">
          <path
            fill="#555"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="3.2"
            className="fill-zinc-900 stroke-zinc-500 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            d="M30.442 5c1.964 0 3.823.448 5.479 1.246l-3.204 3.18a4.67 4.67 0 0 0 0 6.64a4.753 4.753 0 0 0 6.687 0l2.853-2.832c.48 1.322.743 2.748.743 4.234c0 6.887-5.623 12.469-12.558 12.469c-1.66 0-3.244-.32-4.693-.9L13.07 41.625a4.75 4.75 0 0 1-6.685 0a4.67 4.67 0 0 1 0-6.637L18.952 22.51a12.35 12.35 0 0 1-1.069-5.042C17.883 10.583 23.506 5 30.442 5Z"
          ></path>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipTSpanner0)"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      ></path>
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

export function Skills() {
  const skills = [
    { name: 'Python', percentage: 80 },
    { name: 'C++', percentage: 65 },
    { name: 'Pytorch', percentage: 80 },
    { name: 'Tensorflow', percentage: 75 },
    { name: 'Transformer Lib', percentage: 70 },
    { name: 'Scikit-learn', percentage: 70 },
    { name: 'Numpy', percentage: 70 },
    { name: 'NLTK', percentage: 70 },
    { name: 'HuggingFace', percentage: 70 },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Spanner className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ol className="">
        <div className="mx-auto mt-0 w-full max-w-xl rounded-lg pr-0 pt-6  text-white">
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <li key={index} className="w-full">
                <div className="mb-1 flex justify-between">
                  <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {skill.name}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-800">
                  <div
                    className={`h-1.5 rounded bg-zinc-400 dark:bg-zinc-400`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ol>
    </div>
  )
}
