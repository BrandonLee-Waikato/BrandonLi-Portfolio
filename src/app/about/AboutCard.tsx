import { ImPointRight } from 'react-icons/im'

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
                    {['Playing Games', 'Writing Tech Blogs', 'Travelling'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <ImPointRight className="text-green-400" /> {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-green-300">
                    "Turning streams into stories, one frame at a time."
                </p>
                <footer className="text-sm text-gray-400">— Brandon Li</footer>
            </blockquote>
        </div>
    )
}
