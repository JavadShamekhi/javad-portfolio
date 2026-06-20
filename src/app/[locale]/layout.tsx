import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import {Metadata} from 'next';
import {Inter, Space_Grotesk} from 'next/font/google'; // 1. Import Fonts
import React from 'react';
import "../globals.css";
import {Toaster} from "react-hot-toast";
import {Locale, locales, rtlLocales} from "@/lib/i18n/config";
import Script from "next/script";
import SuppressScriptWarning from "@/components/SuppressScriptWarning";
import {getDictionary} from "@/lib/i18n/getDictionary";
import {type} from "node:os";

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

export function generateStaticParams() {
	return locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, params}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);
	const dir = rtlLocales.includes(typedLocale) ? 'rtl' : 'ltr';
	return (
			<html lang={typedLocale} dir={dir} className="scroll-smooth" suppressHydrationWarning data-theme="dark">
			<body
					className={`${inter.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden`}>
			<SuppressScriptWarning/>
			{/* Theme Script */}
			<Script
					id="theme-script"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `(() => {try {const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; const c = document.documentElement.classList; d ? c.add('dark') : c.remove('dark');} catch (e) {}})();`
					}}
			/>

			<Header locale={typedLocale} dict={dict}/>

			{/* 3. Changed: Removed max-w-5xl here so specific pages can control their own width */}
			<main className='flex-grow w-full'>
				{children}
				<Toaster position="bottom-right"/>
			</main>

			<Footer/>
			</body>
			</html>
	)
}