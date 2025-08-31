// src/app/resume/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

export default function ResumePage() {
    const [iframeHeight, setIframeHeight] = useState(0)

    useEffect(() => {
        // Set iframe height to 70% of viewport height
        const resize = () => setIframeHeight(window.innerHeight * 0.7)
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    // basePath-aware asset url; on CI set NEXT_PUBLIC_BASE_PATH="/BrandonLi-Portfolio"
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
    const pdf = `${base}/resume.pdf`

    return (
        <section className="bg-gradient-to-bl from-black/80 to-green-900/80 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-center">Resume</h1>

                <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src={pdf}
                        title="Resume PDF"
                        className="w-full"
                        style={{ height: iframeHeight }}
                    />
                </div>

                <div className="flex justify-center">
                    <a
                        href={pdf}
                        download
                        className="inline-flex items-center gap-2 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        <AiOutlineDownload className="text-2xl" />
                        Download CV
                    </a>
                </div>

                {/* Experience highlights ...（原样保留） */}
            </div>
        </section>
    )
}
