'use client'

import { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { asset } from '@/utils/asset'

export default function ResumePage() {
    const [iframeHeight, setIframeHeight] = useState(0)

    useEffect(() => {
        const resize = () => setIframeHeight(window.innerHeight * 0.7)
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    const pdf = asset('/resume.pdf') // <-- basePath-aware

    return (
        <section className="bg-gradient-to-bl from-black/80 to-green-900/80 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-center">Resume</h1>

                <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe src={pdf} title="Resume PDF" className="w-full" style={{ height: iframeHeight }} />
                </div>

                <div className="flex justify-center">
                    <a href={pdf} download className="inline-flex items-center gap-2 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-600 transition">
                        <AiOutlineDownload className="text-2xl" />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
