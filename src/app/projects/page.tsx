'use client'

import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'RTSP to Object Storage',
        description:
            'Cross-platform RTSP client using Rust and MinIO, enabling secure real-time video uploads to object storage.',
        ghLink: 'https://github.com/BrandonLee-Waikato/exaba-videoserver-main',
        demoLink: '/projects/rtsp-demo',
        imgSrc: '/rtsp.png',
    },
    {
        title: 'Cloud Based Weather Dashboard',
        description:
            'Cloud-based real-time dashboard for weather data by using AWS DevOps tools.',
        ghLink: 'https://github.com/BrandonLee-Waikato/527-WeatherDashboard',
        demoLink: '/projects/weather-demo',
        imgSrc: '/weather.png',
    },
    {
        title: 'Mighty Electrical Automation LTD Website',
        description:
            'Mighty Electrical Automation LTD.',
        ghLink: '',
        demoLink: '/projects/mighty-demo',
        imgSrc: '/Mighty Electrical Automation.png',
    },
    {
        title: 'Hotelier(Hotel Management System) ',
        description:
            'Comprehensive hotel management system built with C#, ASP.NET, SQL Server and Bootstrap.',
        ghLink: 'https://github.com/BrandonLee-Waikato/Hotelier',
        demoLink: '/projects/Hotelier',
        imgSrc: '/Hotelier1.png',
    },
    {
        title: 'Analysis of Green Coverage in Auckland Using GIS ',
        description:
            'Image classifier using PyTorch and ResNet34 to detect plant diseases with 98% accuracy.',
        ghLink: 'https://github.com',
        demoLink: '/projects/GIS',
        imgSrc: '/GIS1.jpg',
    },

]

export default function ProjectsPage() {
    return (
        <section className="py-16 bg-gradient-to-bl from-black/90 to-green-700/80 text-white">
            <div className="max-w-6xl mx-auto px-4 space-y-8">
                {/*<h1 className="text-4xl font-bold">Projects</h1>*/}
                <p className="text-lg text-gray-300">
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
