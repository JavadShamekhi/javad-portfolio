"use client";
import AnimatedContainer from '@/components/ui/AnimatedContainer'
import Section from '@/components/ui/Section'
import BasketballBadge from '@/components/ui/BasketballBadge'
import BackButton from '@/components/ui/BackButton'
import {motion} from 'framer-motion'
import type {Locale} from '@/lib/i18n/config'
import type {Dictionary} from '@/lib/i18n/types'
import ScrollHoopAnimation from "@/components/ui/ScrollHoopAnimation";

export default function BasketballPageClient({locale, dict}: { locale: Locale; dict: Dictionary }) {
	const b = dict.basketballPage;

	return (
			<AnimatedContainer className="max-w-5xl mx-auto">
				<BackButton locale={locale} label={dict.common.back}/>

				<div
						className="relative overflow-hidden rounded-xl border border-orange-300/50 dark:border-orange-800/50 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 dark:from-orange-950 dark:via-amber-900/40 dark:to-rose-950 p-8 mb-10">
					<div className="absolute inset-0 pointer-events-none" aria-hidden>
						<div className="h-full w-full opacity-20">
							<div className="h-full w-full" style={{
								backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(249,115,22,0.5) 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(249,115,22,0.4) 39px)`
							}}/>
						</div>
					</div>
					<div className="relative">
						<h1 className="text-3xl md:text-4xl font-extrabold text-orange-800 dark:text-orange-200 tracking-tight">
							{b.heroTitle}
						</h1>
						<p className="mt-2 text-orange-900/80 dark:text-orange-100/80 max-w-2xl">
							{b.heroSubtitle}
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{b.badges.map((label) => (
									<BasketballBadge key={label} label={label}/>
							))}
						</div>
					</div>
				</div>

				<ScrollHoopAnimation locale={locale}/>

				<Section title={b.positionsTitle} subtitle={b.positionsSubtitle}>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{b.positions.map((item, index) => (
								<motion.div
										key={item.title}
										initial={{opacity: 0, y: 16}}
										whileInView={{opacity: 1, y: 0}}
										viewport={{once: true, margin: "-50px"}}
										transition={{duration: 0.4, delay: index * 0.08, ease: "easeOut"}}
										className="rounded-lg border border-orange-300/60 dark:border-orange-800/60 bg-white/70 dark:bg-orange-950/30 p-4"
								>
									<h3 className="font-semibold text-orange-900 dark:text-orange-100">{item.title}</h3>
									<p className="text-sm text-orange-900/80 dark:text-orange-100/80 mt-1">{item.desc}</p>
								</motion.div>
						))}
					</div>
				</Section>

				<Section title={b.fundamentalsTitle} subtitle={b.fundamentalsSubtitle}>
					<ul className="list-disc ps-6 space-y-1 text-orange-900/90 dark:text-orange-100/90">
						{b.fundamentals.map((item) => (
								<li key={item}>{item}</li>
						))}
					</ul>
				</Section>
			</AnimatedContainer>
	)
}