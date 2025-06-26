'use client'

import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'
import MatterCanvas from "@/app/MatterCanvas"

export default function Home() {
    return (
        <section className="relative z-10 w-full min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                {/* 左侧介绍 */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">Hi There! 👋🏻</h1>
                    <h2 className="text-3xl mb-6">
                        I&apos;m <span className="text-green-400">Brandon Li</span>
                    </h2>
                    <div className="text-xl mb-6 text-green-300">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Cloud Engineer', 'GIS Analyst'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="max-w-xl leading-relaxed text-gray-200">
                        Welcome to my portfolio. Here you will find a selection of my software projects.
                    </p>

                    {/* Social media icons */}
                    <div className="mt-6 flex gap-4">
                        <a
                            href="https://github.com/BrandonLee-Waikato"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-white text-green-700 rounded-full hover:scale-110 transition"
                        >
                            <AiFillGithub size={24} />
                        </a>
                        <a
                            href="http://www.linkedin.com/in/brandon-lee-xl443"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-white text-green-700 rounded-full hover:scale-110 transition"
                        >
                            <AiFillLinkedin size={24} />
                        </a>
                    </div>
                </div>
                {/* 右侧头像 */}
                <div className="flex-1 flex items-center justify-center">
                    <Image
                        src="/vector.png"
                        alt="Avatar"
                        width={400}
                        height={400}
                        className="mx-auto drop-shadow-lg animate-fade-in-up"
                    />
                </div>
            </div>
            {/* 底部横幅式物理引擎区域 */}
            <div className="w-full flex justify-center mt-20">
                <div className="w-full max-w-6xl">
                    <MatterCanvas width={1200} height={420} />
                </div>
            </div>

        </section>
    )
}
