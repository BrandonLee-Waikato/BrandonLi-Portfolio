'use client'

import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-6 mt-20">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4 items-center text-center">
                <div>
                    <h3 className="text-sm">Designed and Developed by Brandon Li</h3>
                </div>
                <div>
                    <h3 className="text-sm">Copyright © {year} BL</h3>
                </div>
                <div className="flex justify-center space-x-4 text-xl">
                    <a
                        href="https://github.com/BrandonLee-Waikato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <AiOutlineTwitter />
                    </a>
                    <a
                        href="http://www.linkedin.com/in/brandon-lee-xl443"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400"
                    >
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}
