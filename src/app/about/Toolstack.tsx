// src/app/about/Toolstack.tsx
'use client'

import {
    SiUbuntu,
    SiDocker,
    SiGitlab,
    SiGithub,
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'

const tools: { Icon: any; name: string }[] = [
    { Icon: SiUbuntu, name: 'Ubuntu' },
    { Icon: DiGit, name: 'Git' },
    { Icon: SiGithub, name: 'GitHub' },
    { Icon: SiGitlab, name: 'GitLab' },
    { Icon: SiDocker, name: 'Docker' },
]

export default function Toolstack() {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-6">
            {tools.map(({ Icon, name }, idx) => (
                <div
                    key={idx}
                    className="flex justify-center"
                    title={name}
                >
                    <Icon className="text-4xl text-green-400 hover:scale-110 transition" />
                </div>
            ))}
        </div>
    )
}
