'use client'

import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <section className="relative z-10 w-full min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                {/* 左侧内容 + 右侧图像 */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">Hi There! 👋🏻</h1>
                    <h2 className="text-3xl mb-6">
                        I&apos;m <span className="text-green-400">Brandon Li</span>
                    </h2>
                    <div className="text-xl mb-6 text-green-300">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Cloud Engineer', 'Architect'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="max-w-xl leading-relaxed text-gray-200">
                        Welcome to my portfolio site. Here you will find a selection of my software projects, cloud deployments,
                        and interactive web applications.
                    </p>

                    {/* 社交图标 */}
                    <div className="mt-6 flex gap-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-white text-green-700 rounded-full hover:scale-110 transition"
                        >
                            <AiFillGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-white text-green-700 rounded-full hover:scale-110 transition"
                        >
                            <AiFillLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* 右侧头像 */}
                <div className="flex-1">
                    <Image
                        src="/vector.png"
                        alt="Avatar"
                        width={400}
                        height={400}
                        className="mx-auto drop-shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}
