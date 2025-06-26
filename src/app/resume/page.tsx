// src/app/resume/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

export default function ResumePage() {
    const [iframeHeight, setIframeHeight] = useState(0)

    useEffect(() => {
        // Set iframe height to 70% of viewport height
        setIframeHeight(window.innerHeight * 0.7)
    }, [])

    return (
        <section className="bg-gradient-to-bl from-black/80 to-green-900/80 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Page title */}
                <h1 className="text-4xl font-bold text-center">Resume</h1>

                {/*/!* Top download button *!/*/}
                {/*<div className="flex justify-center">*/}
                {/*    <a*/}
                {/*        href="/resume.pdf"*/}
                {/*        download*/}
                {/*        className="inline-flex items-center gap-2 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-600 transition"*/}
                {/*    >*/}
                {/*        <AiOutlineDownload className="text-2xl" />*/}
                {/*        Download CV*/}
                {/*    </a>*/}
                {/*</div>*/}

                {/* Embedded PDF preview */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="/resume.pdf"
                        className="w-full"
                        style={{ height: iframeHeight }}
                    />
                </div>

                {/* Bottom download button */}
                <div className="flex justify-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        <AiOutlineDownload className="text-2xl" />
                        Download CV
                    </a>
                </div>

                {/* Experience highlights */}
                <div className="space-y-6 text-gray-200">
                    <div>
                        <h2 className="text-2xl font-semibold">Software Developer Intern, Exaba.io</h2>
                        <p className="text-sm text-green-400">Nov 2024 – Jan 2025</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Captured and encoded live RTSP streams with Rust and FFmpeg.</li>
                            <li>Implemented concurrent uploads to MinIO object storage via Docker.</li>
                            <li>Built a React UI for multi-feed playback and timestamp scrubbing.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">TRAW Technician, MilkTestNZ</h2>
                        <p className="text-sm text-green-400">Nov 2024 – Apr 2025</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Operated PLC-controlled TRAW machine for sample processing.</li>
                            <li>Managed incoming/outgoing goods and laboratory documentation.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Cyber Security Research Assistant, University of Waikato</h2>
                        <p className="text-sm text-green-400">May 2024 – Feb 2025</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Evaluated LLM vulnerabilities and attack vectors.</li>
                            <li>Designed adversarial tests to assess model robustness.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Architect, Cube Architectural Design Co., Ltd</h2>
                        <p className="text-sm text-green-400">Feb 2020 – Apr 2023</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Conducted solar analysis and 3D design using CAD and Rhino.</li>
                            <li>Developed multiple proposals with Grasshopper and Revit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
