'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
	const pathname = usePathname()
	const [isScrolled, setIsScrolled] = useState(false)

	// Handle scroll effect
	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 20)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const linkStyle = (path: string) => {
		const isActive = pathname === path
		return `text-sm font-medium transition-colors ${
				isActive
						? 'text-blue-600 dark:text-blue-400 font-bold'
						: 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
		}`
	}

	return (
			<header
					className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
							isScrolled
									? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-200 dark:border-gray-800 py-3'
									: 'bg-transparent border-transparent py-5'
					}`}
			>
				<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                        J
                    </span>
						<span className="font-space font-bold text-xl tracking-tight">Javad</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/" className={linkStyle("/")}>Home</Link>
						<Link href="/about" className={linkStyle("/about")}>About</Link>
						<Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
						<Link href="/resume" className={linkStyle("/resume")}>Resume</Link>
						<Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
						<Link href="/basketball" className={linkStyle("/basketball")}>
                        <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-md text-xs hover:bg-orange-200 transition">
                             🏀 Hoops
                        </span>
						</Link>
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-4">
						<div className="hidden sm:flex items-center gap-3 border-r border-gray-200 dark:border-gray-800 pr-4">
							<a href="https://github.com/JavadShamekhi" target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition">
								<FaGithub size={18} />
							</a>
							<a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
								<FaLinkedin size={18} />
							</a>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</header>
	)
}