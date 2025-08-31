'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { JSX } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  ghLink: string
  demoLink?: string
  isBlog?: boolean
  imgSrc?: string | StaticImageData // allow static import or url string
}

// helper: add basePath prefix for string src beginning with "/"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const withBasePath = (src: string) => (src.startsWith('/') ? `${basePath}${src}` : src)
const isInternal = (url?: string) => !!url && url.startsWith('/')

export default function ProjectCard({
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
  imgSrc,
}: ProjectCardProps): JSX.Element {
  // normalize image src for Next/Image
  const normalizedImg: string | StaticImageData | undefined =
    typeof imgSrc === 'string' ? withBasePath(imgSrc) : imgSrc

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl shadow-md overflow-hidden flex flex-col">
      {normalizedImg && (
        <div className="relative w-full h-48">
          <Image
            src={normalizedImg}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-green-400 mb-2">{title}</h3>
        <p className="flex-grow mb-4 text-gray-200">{description}</p>

        <div className="mt-auto flex space-x-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition text-white"
            aria-label={isBlog ? 'Open Blog' : 'Open GitHub'}
          >
            <BsGithub /> {isBlog ? 'Blog' : 'GitHub'}
          </a>

          {!isBlog && demoLink && (
            isInternal(demoLink) ? (
              <Link
                href={demoLink}
                className="inline-flex items-center gap-1 bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition text-white"
                aria-label="Open Demo"
              >
                <CgWebsite /> Demo
              </Link>
            ) : (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition text-white"
                aria-label="Open Demo"
              >
                <CgWebsite /> Demo
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )
}
