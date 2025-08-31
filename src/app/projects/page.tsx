'use client'

import ProjectCard from './ProjectCard'
import type { StaticImageData } from 'next/image'

// static imports from public (safe for GitHub Pages subpath)
import rtspImg from '@/public/rtsp.png'
import weatherImg from '@/public/weather.png'
import mightyImg from '@/public/Mighty Electrical Automation.png'
import hotelierImg from '@/public/Hotelier1.png'
import gisImg from '@/public/GIS1.jpg'

type Project = {
    title: string
    description: string
    ghLink: string
    demoLink?: string
    isBlog?: boolean
    imgSrc?: StaticImageData
}

const projects: Project[] = [
    {
        title: 'RTSP to Object Storage',
        description:
            'Cross-platform RTSP client using Rust and MinIO, enabling secure real-time video uploads to object storage.',
        ghLink: 'https://github.com/BrandonLee-Waikato/exaba-videoserver-main',
        demoLink: '/projects/rtsp-demo',
        imgSrc: rtspImg,
    },
    {
        title: 'Cloud Based Weather Dashboard',
        description:
            'Cloud-based real-time dashboard for weather data by using AWS DevOps tools.',
        ghLink: 'https://github.com/BrandonLee-Waikato/527-WeatherDashboard',
        demoLink: '/projects/weather-demo',
        imgSrc: weatherImg,
    },
    {
        title: 'Mighty Electrical Automation LTD Website',
        description: 'Mighty Electrical Automation LTD.',
        ghLink: '',
        demoLink: '/projects/mighty-demo',
        imgSrc: mightyImg,
    },
    {
        title: 'Hotelier(Hotel Management System) ',
        description:
            'Comprehensive hotel management system built with C#, ASP.NET, SQL Server and Bootstrap.',
        ghLink: 'https://github.com/BrandonLee-Waikato/Hotelier',
        demoLink: '/projects/Hotelier',
        imgSrc: hotelierImg,
    },
    {
        title: 'Analysis of Green Coverage in Auckland Using GIS ',
        description:
            'Image classifier using PyTorch and ResNet34 to detect plant diseases with 98% accuracy.',
        ghLink: 'https://github.com',
        demoLink: '/projects/GIS',
        imgSrc: gisImg,
    },
]

export default function ProjectsPage() {
    return (
        <section className="py-16 bg-gradient-to-bl from-black/90 to-green-700/80 text-white">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
