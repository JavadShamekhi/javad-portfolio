import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google' // 1. Import Fonts
import React from 'react'
import "./globals.css"

// 2. Configure Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
	title: "Javad • Developer | Resume & Blog",
	description: "Fullstack developer specializing in Next.js and Spring Boot.",
	icons: {
		icon: "/myphoto-copy.jpg", // Make sure this path is correct in your public folder
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
			<html lang='en' className="scroll-smooth">
			<body className={`${inter.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden`}>
			{/* Theme Script */}
			<script
					dangerouslySetInnerHTML={{
						__html: `(() => {try {const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; const c = document.documentElement.classList; d ? c.add('dark') : c.remove('dark');} catch (e) {}})();`
					}}
			/>

			<Header />

			{/* 3. Changed: Removed max-w-5xl here so specific pages can control their own width */}
			<main className='flex-grow w-full'>
				{children}
			</main>

			<Footer />
			</body>
			</html>
	)
}