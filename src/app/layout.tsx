// src/app/layout.tsx

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Pre from '@/components/Pre'
// import Particle from '@/components/Particle'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
    title: 'Portfolio',
    description: 'Software Developer Portfolio Website',
    // icons: {
    //     icon: '/favicon.ico',
    // },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="relative flex flex-col min-h-screen bg-gradient-to-bl from-black/90 to-green-700/80 text-white">

        <Pre loading={false} />

        {/* background animation */}
        {/*<Particle />*/}

        <ScrollToTop />

        <Navbar />

        {/* 主内容区 */}
        <main className="relative z-10 flex-grow w-full">
            {children}
        </main>

        {/* 页脚 */}
        <Footer />
        </body>
        </html>
    )
}
