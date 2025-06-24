'use client'

import Particle from '../../components/Particle'
import AboutCard from './AboutCard'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import Github from './Github'
import Image from 'next/image'
// import aboutImg from '/vector.png' // 放在 public/ 下

export default function AboutPage() {
    return (
        <section className="relative bg-gradient-to-br from-green-900/80 to-black/80 text-white py-20">
            <Particle />

            <div className="max-w-6xl mx-auto px-4 space-y-16">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4">
                            Know Who <span className="text-green-400">I&apos;M</span>
                        </h1>
                        <AboutCard />
                    </div>
                    <div className="flex-1 text-center">
                        <Image
                            src="/vector.png"
                            alt="About Illustration"
                            width={400}
                            height={400}
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        Professional <span className="text-green-400">Skillset</span>
                    </h2>
                    <Techstack />
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-green-400">Tools</span> I use
                    </h2>
                    <Toolstack />
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        Days I <span className="text-green-400">Code</span>
                    </h2>
                    <Github />
                </div>
            </div>
        </section>
    )
}
