'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillStar,
    AiOutlineMenu,
} from 'react-icons/ai'
import { CgGitFork, CgFileDocument } from 'react-icons/cg'
import { ImBlog } from 'react-icons/im'
import Image from 'next/image'
import logo from '@/public/logo-white-03.png' // static import (works on GitHub Pages)

export default function Navbar() {
    const [navbarScrolled, setNavbarScrolled] = useState(false)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const handleScroll = () => setNavbarScrolled(window.scrollY >= 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClasses = navbarScrolled
        ? 'fixed top-0 w-full bg-white shadow-md transition z-50'
        : 'fixed top-0 w-full bg-transparent transition z-50'

    const linkColor = navbarScrolled ? 'text-gray-900' : 'text-white'

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className={`flex items-center gap-2 ${linkColor}`} aria-label="Home">
                    <Image
                        src={logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                        priority
                    />
                </Link>

                <button
                    className={`md:hidden ${linkColor} p-2`}
                    onClick={() => setExpanded(!expanded)}
                    aria-label="Open menu"
                    aria-expanded={expanded}
                >
                    <AiOutlineMenu className="text-4xl" />
                </button>

                <div className={`md:flex space-x-6 ${expanded ? 'block mt-4' : 'hidden md:block'}`}>
                    <Link href="/" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineHome /> Home
                    </Link>
                    <Link href="/about" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineUser /> About
                    </Link>
                    <Link href="/projects" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <AiOutlineFundProjectionScreen /> Projects
                    </Link>
                    <Link href="/resume" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <CgFileDocument /> Resume
                    </Link>
                    <Link href="/blogs" className={`flex items-center gap-1 hover:text-green-500 ${linkColor}`}>
                        <ImBlog /> Blogs
                    </Link>
                    <a
                        href="https://github.com/BrandonLee-Waikato"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-900 px-3 py-1 rounded flex items-center gap-2 hover:bg-green-600 text-white"
                    >
                        <CgGitFork /><AiFillStar />
                    </a>
                </div>
            </div>
        </nav>
    )
}
