'use client'

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    const pathname = usePathname()
    const [active, setActive] = useState<string>('home')
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const [lastY, setLastY] = useState<number>(0)

    const linkStyle = (path: string, hash?: string) => {
        const isHome = pathname === '/'
        const isActive = isHome && hash ? active === hash : pathname === path
        return isActive ? 'text-blue-200 font-bold' : 'text-white opacity-80 hover:opacity-100'
    }

    // Scrollspy only on home page
    useEffect(() => {
        if (pathname !== '/') return

        const sectionIds = ['home', 'about', 'projects', 'blog', 'contact']
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[]

        if (sections.length === 0) return

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
            if (visible[0]) setActive(visible[0].target.id)
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: [0.2, 0.4, 0.6, 0.8]
        })

        sections.forEach(sec => observer.observe(sec))
        return () => observer.disconnect()
    }, [pathname])

    // Sticky + hide on scroll down, show on scroll up
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || 0
            setIsScrolled(y > 10)
            if (y > 80) {
                setIsHidden(y > lastY) // hide when scrolling down
            } else {
                setIsHidden(false)
            }
            setLastY(y)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [lastY])

    return (
        <header className={`sticky top-0 z-50 w-screen text-white px-6 py-4 transition-all duration-300 ${isScrolled ? 'shadow-md backdrop-blur bg-blue-600/90' : 'bg-blue-600'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Logo / Site Name */}
                <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-400 text-blue-900 shadow-sm">
                        🏀
                    </span>
                    <span>Javad • Developer</span>
                </Link>

                {/* Navigation */}
                <nav className="flex space-x-6">
                    <Link href="/#home" className={linkStyle("/", 'home')}>Home</Link>
                    <Link href="/#about" className={linkStyle("/", 'about')}>About</Link>
                    <Link href="/#projects" className={linkStyle("/", 'projects')}>Projects</Link>
                    <Link href="/#blog" className={linkStyle("/", 'blog')}>Blog</Link>
                    <Link href="/#contact" className={linkStyle("/", 'contact')}>Contact</Link>
                    <Link href="/basketball" className={linkStyle("/basketball")}>Basketball</Link>
                </nav>

                {/* Social + Theme */}
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/JavadShamekhi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/javadshamekhi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                        <FaLinkedin size={20} />
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}