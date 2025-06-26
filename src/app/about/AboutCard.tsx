'use client'

import Link from 'next/link'
import { ImPointRight } from 'react-icons/im'

const activities = [
    { name: 'Playing Games', href: '/about/PlayingGames' },
    { name: 'Fishing', href: '/about/Fishing' },
    { name: 'Travelling', href: '/about/Travelling' }
];

export default function AboutCard() {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <blockquote className="space-y-4">
                <p className="text-lg leading-relaxed">
                    Hi Everyone, I am{' '}
                    <span className="text-green-400 font-semibold">Brandon Li</span>{' '}
                    from <span className="text-green-400 font-semibold">Wellington, NZ</span>.
                    <br />
                    I&apos;m a full stack developer.
                    <br />
                    I hold a Master of Information Technology with first-class honours.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                </p>
                <ul className="list-disc list-inside space-y-2">
                    {activities.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                            <ImPointRight className="text-green-400" />
                            <Link
                                href={item.href}
                                className="text-green-300 hover:underline hover:text-green-400 transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="italic text-green-300">
                    Turning streams into stories, one frame at a time.
                </p>
                <footer className="text-sm text-gray-400">— Brandon Li</footer>
            </blockquote>
        </div>
    )
}
