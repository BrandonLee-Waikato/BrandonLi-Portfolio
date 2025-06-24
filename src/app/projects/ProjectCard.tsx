'use client'

import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

interface ProjectCardProps {
    title: string
    description: string
    ghLink: string
    demoLink?: string
    isBlog?: boolean
    imgSrc?: string
}

export default function ProjectCard({
                                        title,
                                        description,
                                        ghLink,
                                        demoLink,
                                        isBlog = false,
                                        imgSrc,
                                    }: ProjectCardProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl shadow-md overflow-hidden flex flex-col">
            {imgSrc && (
                <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-green-400 mb-2">{title}</h3>
                <p className="flex-grow mb-4 text-gray-200">{description}</p>
                <div className="mt-auto flex space-x-4">
                    <Link
                        href={ghLink}
                        target="_blank"
                        className="inline-flex items-center gap-1 bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition text-white"
                    >
                        <BsGithub /> {isBlog ? 'Blog' : 'GitHub'}
                    </Link>
                    {!isBlog && demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            className="inline-flex items-center gap-1 bg-green-700 px-4 py-2 rounded hover:bg-green-600 transition text-white"
                        >
                            <CgWebsite /> Demo
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
