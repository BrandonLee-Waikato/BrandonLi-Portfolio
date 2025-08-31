// src/app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Pre from '@/components/Pre'
import ScrollToTop from '@/components/ScrollToTop'
import type { Metadata } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''  // "" locally, "/BrandonLi-Portfolio" on CI

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Software Developer Portfolio Website',
    icons: {
        icon: `${basePath}/favicon.ico`,
        shortcut: `${basePath}/favicon.ico`,
        apple: `${basePath}/apple-touch-icon.png`, // 可选
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="relative flex flex-col min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 text-white">
        <Pre loading={false} />
        <ScrollToTop />
        <Navbar />
        <main className="relative z-10 flex-grow w-full">{children}</main>
        <Footer />
        </body>
        </html>
    )
}
