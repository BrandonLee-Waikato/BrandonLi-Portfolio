'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect, JSX} from 'react';
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillStar,
    AiOutlineMenu,
} from 'react-icons/ai';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';

export default function Navbar(): JSX.Element {
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarScrolled(window.scrollY >= 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = navbarScrolled
        ? 'fixed top-0 w-full bg-white shadow-md transition z-50'
        : 'fixed top-0 w-full bg-transparent transition z-50';

    const linkColor = navbarScrolled ? 'text-gray-900' : 'text-white';

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className={`flex items-center gap-2 ${linkColor}`} aria-label="Go to Home">
                    {/* Use next/image to satisfy ESLint rule @next/next/no-img-element */}
                    <Image
                        src="/logo-white-03.png"
                        alt="Site logo"
                        width={40}
                        height={40}
                        priority
                        className="w-10 h-10"
                    />
                </Link>

                <button
                    className={`md:hidden ${linkColor} p-2`}
                    onClick={() => setExpanded(!expanded)}
                    aria-label={expanded ? 'Close menu' : 'Open menu'}
                >
                    {/* Control menu icon size here */}
                    <AiOutlineMenu className="text-4xl" />
                </button>

                <div className={`md:flex space-x-6 ${expanded ? 'block mt-4' : 'hidden md:block'}`}>
                    {/* Home */}
                    <Link href="/" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineHome /> Home
                    </Link>
                    {/* About */}
                    <Link href="/about" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineUser /> About
                    </Link>
                    {/* Projects */}
                    <Link href="/projects" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineFundProjectionScreen /> Projects
                    </Link>
                    {/* Resume */}
                    <Link href="/resume" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <CgFileDocument /> Resume
                    </Link>
                    {/* Blogs */}
                    <Link href="/blogs" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <ImBlog /> Blogs
                    </Link>
                    {/* GitHub */}
                    <a
                        href="https://github.com/BrandonLee-Waikato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-900 px-3 py-1 rounded flex items-center gap-2 hover:bg-green-600 text-white"
                        aria-label="Open GitHub profile"
                    >
                        <CgGitFork />
                        <AiFillStar />
                    </a>
                </div>
            </div>
        </nav>
    );
}
