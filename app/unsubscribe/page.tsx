'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function UnsubscribePage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleUnsubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/newsletter/unsubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message);
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error);
            }
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 dark:bg-zinc-950 bg-white">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            width={48}
                            height={24}
                            alt="Logo"
                            className="w-24 h-12 rounded-md"
                        />
                    </Link>
                </div>

                {/* Card */}
                <div className="dark:bg-zinc-900 bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-2xl p-8 shadow-lg">
                    <h1 className="text-2xl font-incognito font-bold dark:text-white text-zinc-900 mb-2">
                        Breaking Up? 💔
                    </h1>
                    <p className="text-sm dark:text-zinc-400 text-zinc-600 mb-6">
                        It's not you, it's... wait, it IS you! 😅 But seriously, we get it. Enter your email to unsubscribe.
                    </p>

                    {status === 'success' ? (
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                <p className="text-green-500 dark:text-green-400 text-sm">
                                    {message}
                                </p>
                            </div>
                            <Link
                                href="/"
                                className="block text-center btn-primary w-full"
                            >
                                🏠 Take Me Home
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleUnsubscribe} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full px-4 py-2.5 rounded-lg text-sm dark:bg-zinc-800 bg-white dark:border-zinc-700 border border-zinc-300 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-color disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                                />
                            </div>

                            {message && status === 'error' && (
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-500 dark:text-red-400 text-sm">
                                        {message}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                            >
                                {status === 'loading' ? '👋 Letting you go...' : '💔 Unsubscribe'}
                            </button>

                            <p className="text-xs dark:text-zinc-500 text-zinc-500 text-center">
                                Changed your mind? We're cool like that 😎{' '}
                                <Link
                                    href="/"
                                    className="text-primary-color hover:underline"
                                >
                                    Let's stay friends
                                </Link>
                            </p>
                        </form>
                    )}
                </div>

                {/* Footer Note */}
                <p className="text-xs dark:text-zinc-600 text-zinc-400 text-center mt-6">
                    You can always come back. We don't do grudges here! ✌️
                </p>
            </div>
        </div>
    );
}
