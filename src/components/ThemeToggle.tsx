'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(false)

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = stored ? stored === 'dark' : prefersDark
        setIsDark(shouldBeDark)
    }, [])

    useEffect(() => {
        if (typeof document === 'undefined') return
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark((v) => !v)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/20 hover:border-white/40 transition"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
    )
}


