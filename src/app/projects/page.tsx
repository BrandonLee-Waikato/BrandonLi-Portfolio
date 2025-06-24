'use client'

import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'RTSP to Object Storage',
        description:
            'Cross-platform RTSP client using Rust and MinIO, enabling secure real-time video uploads to object storage.',
        ghLink: 'https://github.com/yourname/rtsp-object-storage',
        demoLink: 'https://your-demo-url.com',
        imgSrc: '/projects/rtsp.png',
    },
    {
        title: 'Weather Dashboard',
        description:
            'Cloud-hosted real-time dashboard for weather data, powered by React and AWS Lambda.',
        ghLink: 'https://github.com/yourname/weather-dashboard',
        demoLink: 'https://your-demo-url.com',
        imgSrc: '/projects/weather.png',
    },
    {
        title: 'Hotel Management System',
        description:
            'Comprehensive hotel management system built with C#, ASP.NET, SQL Server and Bootstrap.',
        ghLink: 'https://github.com/yourname/hotel-management',
        demoLink: 'https://your-demo-url.com',
        imgSrc: '/projects/hotelier.png',
    },
    {
        title: 'Plant AI',
        description:
            'Image classifier using PyTorch and ResNet34 to detect plant diseases with 98% accuracy.',
        ghLink: 'https://github.com/yourname/plant-ai',
        demoLink: 'https://your-demo-url.com',
        imgSrc: '/projects/plant-ai.png',
    },
    // 你可以继续添加更多项目
]

export default function ProjectsPage() {
    return (
        <section className="py-16 bg-gradient-to-bl from-black/90 to-green-700/80 text-white">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-lg text-gray-300">
                    Here are some of my recent projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
