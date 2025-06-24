import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export default function SocialLinks() {
    const socials = [
        { icon: <AiFillGithub />, url: 'https://github.com/yourgithub' },
        { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/yourlinkedin' },
        { icon: <AiOutlineTwitter />, url: 'https://twitter.com/yourtwitter' },
        { icon: <AiFillInstagram />, url: 'https://instagram.com/yourinsta' },
    ]

    return (
        <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-white">FIND ME ON</h3>
            <p className="text-gray-400">Feel free to connect with me</p>
            <div className="flex justify-center gap-4 mt-4">
                {socials.map((s, idx) => (
                    <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-white text-purple-800 rounded-full shadow hover:scale-110 transition"
                    >
                        {s.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}
