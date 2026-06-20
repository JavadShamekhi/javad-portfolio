'use client'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'

export default function ThemeToggle() {
	const {theme, setTheme, systemTheme} = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
				<button
						className="w-9 h-9 rounded-md border opacity-50"
						disabled
				>
					...
				</button>
		)
	}

	const currentTheme = theme === 'system' ? systemTheme : theme
	const isDark = currentTheme === 'dark'

	return (
			<button
					aria-label="Toggle dark mode"
					onClick={() => setTheme(isDark ? 'light' : 'dark')}
					className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--toggle-b)] hover:border-[var(--toggle-bh)] transition cursor-pointer"
					title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{isDark ? <FaSun size={16}/> : <FaMoon size={16}/>}
			</button>
	)
}