"use client";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import type {Locale} from "@/lib/i18n/config";
import {useNavigationHistory} from "@/components/NavigationHistoryProvider";

export default function BackButton({locale, label}: { locale: Locale; label: string }) {
	const {goBack} = useNavigationHistory();

	return (
			<button
					onClick={goBack}
					className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 cursor-pointer"
			>
				{locale === 'fa' ? <FaArrowRight size={14}/> : <FaArrowLeft size={14}/>}
				{label}
			</button>
	);
}