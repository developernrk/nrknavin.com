'use client'

import { useEffect, useState } from 'react'

export default function WebsiteLoader() {
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Only show loader on first visit (session-based)
        const hasVisited = typeof window !== 'undefined' ? sessionStorage.getItem('hasVisited') : null

        if (hasVisited) {
            return // Skip loader if already visited this session
        }

        setLoading(true)
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('hasVisited', 'true')
        }

        // Fast loading - only 800ms for better performance
        const duration = 800
        const interval = 40
        const increment = (interval / duration) * 100

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setLoading(false), 200)
                    return 100
                }
                return prev + increment
            })
        }, interval)

        return () => clearInterval(timer)
    }, [])

    // Don't render anything if not loading (good for SEO)
    if (!loading) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 from-white via-zinc-50 to-white transition-opacity duration-300 pointer-events-none"
            style={{ opacity: progress >= 100 ? 0 : 1 }}
            aria-hidden="true"
        >
            <div className="text-center space-y-6 px-6 max-w-md">
                {/* Logo/Brand */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-pulse"></div>
                        <div className="relative text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text text-transparent">
                            NRK
                        </div>
                    </div>
                </div>

                {/* Loading Bar */}
                <div className="space-y-2">
                    <div className="h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Spinning Icon */}
                <div className="flex justify-center">
                    <div className="relative w-12 h-12">
                        <div className="absolute inset-0 border-3 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl">⚡</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
