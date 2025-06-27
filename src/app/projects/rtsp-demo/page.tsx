'use client'

import { useEffect, useRef } from 'react'
import RtspTechstack from './RtspTechstack'
import {AiOutlineArrowLeft} from "react-icons/ai";
import Link from 'next/link';

export default function RTSPDemo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 flex items-start justify-center pt-32">
            <Link
                href="/projects"
                className="fixed top-20 left-6 flex items-center gap-2 bg-white/10 hover:bg-green-700/80 text-green-400 px-4 py-2 rounded transition z-50"
                style={{ zIndex: 50 }}
            >
                <AiOutlineArrowLeft size={20} />
                <span className="font-semibold">Back</span>
            </Link>


            <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
                {/* Contents at left*/}
                <div className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg">
                    <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">RTSP to Object Storage</h2>
                    <img
                        src="/rtsp_interface.png"
                        alt="RTSP Demo"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">Platform</p>
                    <img
                        src="/rtsp_group.jpeg"
                        alt="Group Photo"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        🎅Hiko club treasure Hunt Function at XMAS. 🎄
                    </p>
                    {/*<video*/}
                    {/*    ref={videoRef}*/}
                    {/*    src="/rtsp_video.mp4"*/}
                    {/*    controls*/}
                    {/*    autoPlay*/}
                    {/*    muted*/}
                    {/*    playsInline*/}
                    {/*    className="w-full h-[480px] max-h-[65vh] rounded-xl shadow mb-6 object-contain"*/}
                    {/*/>*/}
                    {/*<video*/}
                    {/*    ref={videoRef}*/}
                    {/*    src="/rtsp_video2.mp4"*/}
                    {/*    controls*/}
                    {/*    autoPlay*/}
                    {/*    muted*/}
                    {/*    playsInline*/}
                    {/*    className="w-full h-[480px] max-h-[65vh] rounded-xl shadow mb-6 object-contain"*/}
                    {/*/>*/}
                    {/*<video*/}
                    {/*    ref={videoRef}*/}
                    {/*    src="/rtsp_video3.avi"*/}
                    {/*    controls*/}
                    {/*    autoPlay*/}
                    {/*    muted*/}
                    {/*    playsInline*/}
                    {/*    className="w-full h-[480px] max-h-[65vh] rounded-xl shadow mb-6 object-contain"*/}
                    {/*/>*/}

                    {/*<img*/}
                    {/*    src="/rtsp_img.png"*/}
                    {/*    alt="Group Photo"*/}
                    {/*    className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"*/}
                    {/*/>*/}
                    {/*<p className="text-lg text-gray-200 text-center mb-8">*/}
                    {/*    Weekly Demonstration and report </p>*/}

                    <img
                        src="/rtsp_img2.jpg"
                        alt="Group Photo"
                        className="block mx-auto w-full max-w-3xl rounded-xl shadow mb-8 object-contain"
                    />
                    <p className="text-lg text-gray-200 text-center mb-8">
                        Last day in Exaba.io with Mentor Nick </p>

                </div>
                {/* Tech at right */}
                <div className="md:w-36 w-full shrink-0">
                    <RtspTechstack />
                </div>
            </div>
        </section>
    )
}
