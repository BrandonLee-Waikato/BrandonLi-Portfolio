'use client'

import { useEffect, useRef } from 'react'
import WeatherTechstack from './WeatherTechstack'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

// static imports from public (basePath/assetPrefix friendly)
import meetingTime from '@/public/Meeting Time.jpg'
import demoVideo from '@/public/Weather_Dashboard_Demo.mp4'
import slidesPdf from '@/public/Group_Project_Slides_Demo_presentation .pdf'

export default function WeatherDemo() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        // autoplay works only if muted and playsInline on most browsers
        videoRef.current?.play()
    }, [])

    return (
        <section className="relative min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">
            {/* back button */}
            <Link
                href="/projects"
                className="fixed top-20 left-6 flex items-center gap-2 bg-white/10 hover:bg-green-700/80 text-green-400 px-4 py-2 rounded transition z-50"
                aria-label="Back to Projects"
            >
                <AiOutlineArrowLeft size={20} />
                <span className="font-semibold">Back</span>
            </Link>

            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* main content (left) */}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Weather Dashboard</h2>

                    <video
                        ref={videoRef}
                        src={demoVideo}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-[480px] max-h-[65vh] rounded-xl shadow mb-6 object-contain"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-green-300 text-center">Project Slides (PDF)</h3>

                    <iframe
                        src={slidesPdf}
                        title="Weather Dashboard Slides"
                        className="w-full h-[500px] rounded-lg shadow mb-4 bg-white"
                    />

                    <a
                        href={slidesPdf}
                        download
                        className="inline-block bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
                    >
                        Download Slides (PDF)
                    </a>

                    <Image
                        src={meetingTime}
                        alt="Meeting time schedule"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                        width={1600}
                        height={900}
                        priority
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        Meeting time of group members.
                    </p>
                </div>

                {/* right side: tech stack */}
                <div className="md:w-36 w-full shrink-0">
                    <WeatherTechstack />
                </div>
            </div>
        </section>
    )
}
