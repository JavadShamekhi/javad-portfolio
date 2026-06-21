import '@/lib/suppressDevWarnings';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import {Metadata} from 'next';
import {Inter, Space_Grotesk, Vazirmatn} from 'next/font/google'; // 1. Import Fonts
import React from 'react';
import "../globals.css";
import {Toaster} from "react-hot-toast";
import {Locale, locales, rtlLocales} from "@/lib/i18n/config";
import {getDictionary} from "@/lib/i18n/getDictionary";
import {ThemeProvider} from "@/components/ThemeProvider";
import {NavigationHistoryProvider} from "@/components/NavigationHistoryProvider";

// 2. Configure Fonts
const inter = Inter({subsets: ['latin'], variable: '--font-inter'})
const spaceGrotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-space'})
const vazirmatn = Vazirmatn({subsets: ['arabic'], variable: '--font-vazir'});

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
					className={`${inter.variable} ${spaceGrotesk.variable} ${vazirmatn.variable} font-sans flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden`}>
			<NavigationHistoryProvider>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<Header locale={typedLocale} dict={dict}/>
					<main className='flex-grow w-full'>
						{children}
						<Toaster position="bottom-right"/>
					</main>
					<Footer locale={typedLocale} dict={dict}/>
				</ThemeProvider>
			</NavigationHistoryProvider>
			</body>
			</html>
	)
}