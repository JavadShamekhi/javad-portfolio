import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'
import React from 'react'
import "./globals.css"

// Using Tailwind's system font stack via `font-sans` to avoid external font fetches

export const metadata: Metadata = {
  title: "Javad • Developer | Resume & Blog",
  description: "Fullstack developer specializing in Next.js and Spring Boot.",
  icons: {
    icon: "/myphoto-copy.jpg",
    shortcut: "/myphoto-copy.jpg",
    apple: "/myphoto-copy.jpg",
  },

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`font-sans flex flex-col min-h-screen overflow-x-hidden`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; const c = document.documentElement.classList; d ? c.add('dark') : c.remove('dark');} catch (e) {}})();`
          }}
        />
        <Header />
        <main className='flex-grow p-6 max-w-5xl mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}