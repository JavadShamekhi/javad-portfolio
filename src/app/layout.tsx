import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {Metadata} from 'next';
import {Inter, Space_Grotesk} from 'next/font/google'; // 1. Import Fonts
import React from 'react';
import "./globals.css";
import { Toaster } from "react-hot-toast";

// 2. Configure Fonts
const inter = Inter({subsets: ['latin'], variable: '--font-inter'})
const spaceGrotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-space'})

export const metadata: Metadata = {
	title: "Javad • Frontend Developer | Portfolio",
	description: "Frontend Developer | React.js • Next.js • TypeScript | Open to work",
	icons: {
		icon: "/images/cropped_circle_image.png", // Make sure this path is correct in your public folder
	},
}

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
			<html lang='en' className="scroll-smooth" suppressHydrationWarning data-theme="dark">
			<body
					className={`${inter.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden`}>
			{/* Theme Script */}
			<script
					dangerouslySetInnerHTML={{
						__html: `(() => {try {const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; const c = document.documentElement.classList; d ? c.add('dark') : c.remove('dark');} catch (e) {}})();`
					}}
			/>

			<Header/>

			{/* 3. Changed: Removed max-w-5xl here so specific pages can control their own width */}
			<main className='flex-grow w-full'>
				{children}
				<Toaster position="bottom-right" />
			</main>

			<Footer/>
			</body>
			</html>
	)
}