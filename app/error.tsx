'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold dark:text-primary-color text-secondary-color">
                        Oops!
                    </h1>
                    <h2 className="text-2xl font-semibold">
                        Something went wrong
                    </h2>
                    <p className="text-base dark:text-zinc-400 text-zinc-600">
                        {error.message || "An unexpected error occurred"}
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 rounded-lg dark:bg-primary-color bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-900 font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    )
}
