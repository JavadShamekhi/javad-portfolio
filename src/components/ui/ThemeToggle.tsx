'use client'

import {useEffect, useState} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean | null>(null)

	useEffect(() => {
		const stored = localStorage.getItem('theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

		const shouldBeDark = stored ? stored === 'dark' : prefersDark

		setIsDark(shouldBeDark)
	}, [])

	useEffect(() => {
		if (isDark === null) return
		const root = document.documentElement
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	if (isDark === null) {
		return (
				<button
						className="w-9 h-9 rounded-md border opacity-50"
						disabled
				>
					...
				</button>
		)
	}

	return (
			<button
					aria-label="Toggle dark mode"
					onClick={() => setIsDark((v) => !v)}
					className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--toggle-b)] hover:border-[var(--toggle-bh)] transition cursor-pointer"
					title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{isDark ? <FaSun size={16}/> : <FaMoon size={16}/>}
			</button>
	)
}


