import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { siteConfig } from '@/lib/site-config'
import { SVGProps } from 'react'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-cyan-500 dark:hover:text-cyan-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  Forked From{' '}
                  <a
                    target="_blank"
                    className="transition hover:text-cyan-500 hover:underline dark:hover:text-cyan-400"
                    href="https://github.com/austin-karren/spotlight"
                  >
                    austin-karren/spotlight
                  </a>
                </p>
              </div> */}
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {new Date().getFullYear()} {siteConfig.title}
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
