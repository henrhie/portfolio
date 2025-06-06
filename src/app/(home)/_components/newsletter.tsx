'use client'

import { Button } from '@/components/Button'
import { subscribe, SubscribeResponse } from './actions'
import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'

// Zed's prettier configuration isn't playing nicely with typescript
// prettier-ignore
type SVGProps = React.ComponentPropsWithoutRef<'svg'>

function MailIcon(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ErrorLabel(props: { error: string[] | undefined }) {
  if (!props.error) return null

  return (
    <label htmlFor="email" className="text-sm text-red-600">
      {props.error[0]}
    </label>
  )
}

const initialState: SubscribeResponse = {
  errors: null,
  message: null,
  payload: undefined,
}

export function Newsletter() {
  const [state, action, pending] = useActionState(subscribe, initialState)

  return (
    <form
      action={action}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex flex-col gap-1">
        <div className="mt-6 flex">
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email address"
            aria-label="Email address"
            aria-describedby="emailAddress-error"
            required
            defaultValue={(state.payload?.get('email') as string) || ''}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/10"
          />
          <Button type="submit" className="ml-4 flex-none" disabled={pending}>
            Join
          </Button>
        </div>
        <ErrorLabel error={state.errors?.email} />
      </div>
    </form>
  )
}
