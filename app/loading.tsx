'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
    const [messageIndex, setMessageIndex] = useState(0)

    const messages = [
        "CompilingAwesomeCode.tsx... ⚡",
        "Importing React.lazy... 📦",
        "npm install patience... ⏳",
        "Deploying to production... 🚀",
        "Searching Stack Overflow... 🔍",
        "git push --force... 😅",
        "Reading documentation... 📚",
        "Reticulating splines... 🎲",
        "Mining Bitcoin... just kidding ⛏️",
        "Loading developer.coffee... ☕",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 from-white via-zinc-50 to-white">
            <div className="text-center space-y-8 px-6 max-w-md">
                {/* Animated Code Block */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
                    <div className="relative p-6 rounded-2xl dark:bg-zinc-900/80 bg-zinc-100/80 border dark:border-zinc-800 border-zinc-300 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <div className="font-mono text-left space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="dark:text-purple-400 text-purple-600">const</span>
                                <span className="dark:text-blue-400 text-blue-600">loading</span>
                                <span className="dark:text-zinc-400 text-zinc-600">=</span>
                                <span className="dark:text-green-400 text-green-600">&quot;true&quot;</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="dark:text-purple-400 text-purple-600">while</span>
                                <span className="dark:text-zinc-400 text-zinc-600">(loading) {'{'}</span>
                            </div>
                            <div className="flex items-center gap-4 ml-4">
                                <span className="dark:text-yellow-400 text-yellow-600">await</span>
                                <span className="dark:text-blue-400 text-blue-600">fetchAwesomeContent()</span>
                            </div>
                            <div className="dark:text-zinc-400 text-zinc-600">{'}'}</div>
                        </div>
                    </div>
                </div>

                {/* Spinning Icon */}
                <div className="flex justify-center">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-blue-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-t-pink-500 border-r-blue-500 border-b-purple-500 border-l-pink-500 rounded-full animate-spin animation-delay-150" style={{ animationDirection: 'reverse' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                            💻
                        </div>
                    </div>
                </div>

                {/* Rotating Messages */}
                <div className="min-h-[60px] flex items-center justify-center">
                    <p className="text-lg font-medium dark:text-zinc-300 text-zinc-700 animate-pulse">
                        {messages[messageIndex]}
                    </p>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full dark:bg-blue-500 bg-blue-600 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full dark:bg-purple-500 bg-purple-600 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 rounded-full dark:bg-pink-500 bg-pink-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Fun Footer */}
                <p className="text-xs dark:text-zinc-500 text-zinc-500 italic">
                    &quot;It works on my machine&quot; - Every Developer Ever
                </p>
            </div>
        </div>
    )
}
