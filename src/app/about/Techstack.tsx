// src/app/about/Techstack.tsx
'use client'

import {
    DiJava,
    DiJavascript1,
    DiPython,
    DiNodejs,
    DiMongodb,
    DiMysql,
} from 'react-icons/di'
import {
    SiRust,
    SiReact,
    SiVite,
    SiBootstrap,
    SiDotnet,
    SiMariadb,
    SiAmazon,
    SiThreedotjs,
    SiMinio,
} from 'react-icons/si'

const techs: { Icon: any; name: string }[] = [
    { Icon: DiJava, name: 'Java' },
    { Icon: SiRust, name: 'Rust' },
    { Icon: DiJavascript1, name: 'JavaScript' },
    { Icon: DiPython, name: 'Python' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiVite, name: 'Vite' },
    { Icon: SiBootstrap, name: 'Bootstrap' },
    { Icon: DiNodejs, name: 'Node.js' },
    { Icon: SiDotnet, name: '.NET' },
    { Icon: DiMongodb, name: 'MongoDB' },
    { Icon: DiMysql, name: 'MySQL' },
    { Icon: SiMariadb, name: 'MariaDB' },
    { Icon: SiMinio, name: 'MinIO' },
    { Icon: SiAmazon, name: 'AWS' },
    { Icon: SiThreedotjs, name: 'Three.js' },
]

export default function Techstack() {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6">
            {techs.map(({ Icon, name }, idx) => (
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
