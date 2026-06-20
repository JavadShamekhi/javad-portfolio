"use client";
import {useRouter} from "next/navigation";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import type {Locale} from "@/lib/i18n/config";

export default function BackButton({locale, label}: { locale: Locale; label: string }) {
	const router = useRouter();

	return (
			<button
					onClick={() => router.back()}
					className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 cursor-pointer"
			>
				{locale === 'fa' ? <FaArrowRight size={14}/> : <FaArrowLeft size={14}/>}
				{label}
			</button>
	);
}