'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 每当路由变化时自动滚动到页面顶部
 */
export default function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
