"use client";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import type {Locale} from "@/lib/i18n/config";

export default function ScrollHoopAnimation({locale}: { locale: Locale }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, {once: true, margin: "-100px"});

	// توپ از روی محیط نیم‌دایره (بالای منطقه‌ی سه‌ثانیه) پرتاب می‌شود
	const startX = locale === 'fa' ? 90 : -90;

	return (
			<div
					ref={containerRef}
					className="relative h-[420px] w-full max-w-md mx-auto pointer-events-none select-none overflow-hidden rounded-2xl border-4 border-orange-600 dark:border-orange-700 shadow-lg"
					style={{
						background: 'linear-gradient(180deg, #d97706 0%, #c2680a 60%, #a85a08 100%)',
					}}
			>
				{/* تکستور پارکت چوبی */}
				<div
						className="absolute inset-0 opacity-40"
						style={{
							backgroundImage: `repeating-linear-gradient(90deg, rgba(120,53,15,0.35) 0px, rgba(120,53,15,0.35) 3px, transparent 3px, transparent 32px)`,
						}}
				/>

				{/* ذوزنقه: مستطیل کلید + نیم‌دایره‌ی رو به بیرون */}
				<div className="absolute bottom-0 inset-x-0 flex justify-center">
					<svg width="160" height="220" viewBox="0 0 160 220" className="overflow-visible">
						{/* مستطیل کلید - نزدیک حلقه (بالای SVG، چون SVG از bottom-0 شروع شده) */}
						<rect x="20" y="0" width="120" height="160" fill="rgba(29,78,216,0.7)" stroke="white" strokeWidth="4"/>
						{/* نیم‌دایره‌ی رو به بیرون - پایین مستطیل، دورتر از حلقه */}
						<path
								d="M 20 160 A 60 60 0 0 0 140 160"
								fill="rgba(29,78,216,0.7)"
								stroke="white"
								strokeWidth="4"
						/>
					</svg>
				</div>

				{/* پایه و بک‌بورد حلقه */}
				<div className="absolute top-4 inset-x-0 flex justify-center flex-col items-center">
					<div
							className="relative w-28 h-20 bg-white border-[3px] border-gray-300 dark:border-gray-400 rounded-sm shadow-md">
						<div className="absolute bottom-1 inset-x-0 flex justify-center">
							<div className="w-11 h-11 border-[3px] border-red-600"/>
						</div>
					</div>
					<motion.div
							initial={{scale: 1}}
							animate={isInView ? {scale: [1, 1.08, 1]} : {}}
							transition={{duration: 0.3, delay: 1.1}}
							className="relative -mt-1 w-20 h-3.5 rounded-full border-[5px] border-red-600 flex justify-center z-10 bg-red-600"
					>
						<div className="absolute top-2.5 w-14 h-12 opacity-70">
							<svg viewBox="0 0 48 40" className="w-full h-full">
								<path d="M2 0 L8 38 M14 0 L16 38 M24 0 L24 38 M34 0 L32 38 M46 0 L40 38"
								      stroke="white" strokeWidth="1.5" fill="none"/>
							</svg>
						</div>
					</motion.div>
				</div>

				{/* توپ بسکتبال - شروع از محیط نیم‌دایره */}
				<motion.div
						initial={{x: startX, y: 230, rotate: 0, opacity: 1}}
						animate={isInView ? {
							x: [startX, startX * 0.4, 0, 0],
							y: [230, 30, 70, 70],
							rotate: 360,
							opacity: 1,
						} : {}}
						transition={{duration: 1.4, times: [0, 0.4, 0.7, 1], ease: "easeOut"}}
						className="absolute start-1/2 -ms-6 top-4 w-12 h-12 rounded-full shadow-lg z-0"
						style={{background: 'radial-gradient(circle at 35% 35%, #fb923c, #ea580c)'}}
				>
					<div className="absolute inset-0 rounded-full border-2 border-orange-900/60"/>
					<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-orange-900/60"/>
					<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-orange-900/60"/>
				</motion.div>
			</div>
	);
}