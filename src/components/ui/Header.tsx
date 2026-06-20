'use client'
import Link from "next/link"
import {useEffect, useState} from "react"
import {useParams, usePathname} from "next/navigation"
import {FaGithub, FaLinkedin} from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"
import {HiMenu, HiX} from "react-icons/hi";
import {Locale} from "@/lib/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {getDictionary} from "@/lib/i18n/getDictionary";
import {Dictionary} from "@/lib/i18n/types";

export default function Header({locale, dict}: { locale: Locale; dict: Dictionary }) {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

	// Handle scroll effect
	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 20)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// Close mobile menu when path changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const linkStyle = (path: string) => {
		const isActive = pathname === path
		return `text-sm font-medium transition-colors ${
				isActive
						? 'text-blue-600 dark:text-blue-400 font-bold'
						: 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
		}`
	}

	const navLinks = [
		{name: dict.nav.home, path: "/"},
		{name: dict.nav.about, path: "/about"},
		{name: dict.nav.projects, path: "/projects"},
		{name: dict.nav.resume, path: "/resume"},
		{name: dict.nav.contact, path: "/contact"},
	];

	return (
			<header
					className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
							isScrolled || isMenuOpen
									? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-200 dark:border-gray-800 py-3'
									: 'bg-transparent border-transparent py-5'
					}`}
			>
				<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
					{/* Logo */}
					<Link href="/public" className="flex items-center gap-2 group">
                    <span
		                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                        J
                    </span>
						<span className="font-space font-bold text-xl tracking-tight">Javad</span>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
								<Link key={link.path} href={link.path} className={linkStyle(link.path)}>
									{link.name}
								</Link>
						))}
						<Link href="/basketball" className={linkStyle("/basketball")}>
                        <span
		                        className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-md text-xs hover:bg-orange-200 transition">
                             🏀 Hoops
                        </span>
						</Link>
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-4">
						<div className="hidden sm:flex items-center gap-3 border-r border-gray-200 dark:border-gray-800 pr-4">
							<a href="https://github.com/JavadShamekhi" target="_blank"
							   className="text-gray-500 hover:text-black dark:hover:text-white transition">
								<FaGithub size={18}/>
							</a>
							<a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank"
							   className="text-gray-500 hover:text-blue-600 transition">
								<FaLinkedin size={18}/>
							</a>
						</div>
						<ThemeToggle/>
						<LanguageSwitcher currentLocale={locale}/>

						{/* Mobile Menu Button */}
						<button
								className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								aria-label="Toggle Menu"
						>
							{isMenuOpen ? <HiX size={24}/> : <HiMenu size={24}/>}
						</button>

					</div>
				</div>

				{/* Mobile Menu Overlay */
				}
				<div className={`
                md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden
                ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
            `}>
					<nav className="flex flex-col p-6 gap-4">
						{navLinks.map((link) => (
								<Link
										key={link.path}
										href={link.path}
										className={`${linkStyle(link.path)} text-lg py-2`}
								>
									{link.name}
								</Link>
						))}
						<Link href="/basketball" className="inline-block py-2">
                        <span
		                        className="flex items-center w-fit gap-2 text-orange-600 dark:text-orange-400 font-semibold bg-orange-100 dark:bg-orange-900/30 px-3 py-2 rounded-md text-sm">
                             🏀 Basketball (Hoops)
                        </span>
						</Link>

						{/* Socials inside mobile menu */}
						<div className="flex items-center gap-6 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
							<a href="https://github.com/JavadShamekhi" target="_blank"
							   className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
								<FaGithub size={20}/> <span className="text-sm">GitHub</span>
							</a>
							<a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank"
							   className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
								<FaLinkedin size={20}/> <span className="text-sm">LinkedIn</span>
							</a>
						</div>
					</nav>
				</div>

			</header>
	)
}