import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoEventPenguin from '@/images/logos/event-penguin.svg'
import logoTritonTp from '@/images/logos/tritontp.svg'

const projects = [
  {
    name: 'Phi-2 Pytorch',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcMdnLnVtxso40OlPI63YHziAlg_34FVbIA&s',
    description:
      'Unofficial PyTorch implementation of the Phi-2 algorithm. Phi-2 is a Transformer with 2.7 billion parameters trained using the same data sources as Phi-1.5',
    link: {
      href: 'https://github.com/henrhie/Phi-2-Pytorch',
      label: 'https://github.com/henrhie/Phi-2-Pytorch',
    },
  },
  {
    name: 'pneumonia-pytorch-localization',
    description:
      'Not long ago, the machine learning group at Stanford University led by Adjunct Professor Andrew Ng released a paper on their computer vision algorithm which can detect and localize pneumonia from x-ray chest scans. Their algorithm outperformed the average practising radiologist at Stanford.',
    link: {
      href: 'https://github.com/henrhie/pneumonia-pytorch-localization',
      label: 'https://github.com/henrhie/pneumonia-pytorch-localization',
    },
  },
  {
    name: 'Deepseek-Coder-LLAMA',
    description:
      'Deepseek Coder is composed of a series of code language models, each trained from scratch on 2T tokens, with a composition of 87% code and 13% natural language in both English and Chinese.',
    link: {
      href: 'https://github.com/henrhie/Deepseek-Coder-LLAMA',
      label: 'https://github.com/henrhie/Deepseek-Coder-LLAMA',
    },
  },
]

const os_contrib = [
  {
    name: 'MLX',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcMdnLnVtxso40OlPI63YHziAlg_34FVbIA&s',
    description:
      'MLX is an array framework for machine learning on Apple silicon. Implemented the sigmoid neural network module.',
    link: {
      href: 'https://github.com/henrhie/mlx/commit/68bf1d786765c168b929c04b7f26ce47573f0c1f',
      label:
        'https://github.com/henrhie/mlx/commit/68bf1d786765c168b929c04b7f26ce47573f0c1f',
    },
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
function Ampproject(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.96.66L13.62 9.9h2.16c.6 0 .84.48.48 1.08L8.58 23.52a12.4 12.4 0 0 0 3.418.48H12c6.628-.005 11.998-5.379 11.998-12.008c0-5.209-3.317-9.644-7.955-11.306L15.959.66zm-5.58 13.38H8.22c-.6 0-.84-.48-.48-1.08L15.42.48A12.4 12.4 0 0 0 12.002 0H12C5.372.005.002 5.379.002 12.008c0 5.209 3.317 9.644 7.955 11.306l.084.026z"
      ></path>
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My creative footprint on the internet.',
}

export default function Projects() {
  return (
    <>
      <SimpleLayout title="Personal Projects." intro="">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Ampproject />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">Project Link</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <SimpleLayout title="Open Source Contributions" intro="">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {os_contrib.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Ampproject />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">Project Link</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
