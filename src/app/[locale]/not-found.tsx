"use client";
import Link from "next/link";
import {useParams} from "next/navigation";
import type {Locale} from "@/lib/i18n/config";

const messages = {
	en: {
		title: "404 - Page Not Found",
		message: "Oops! That page doesn't exist.",
		backHome: "Back to Home",
	},
	fa: {
		title: "۴۰۴ - صفحه پیدا نشد",
		message: "اوه! این صفحه وجود ندارد.",
		backHome: "بازگشت به خانه",
	},
};

export default function NotFound() {
	const params = useParams();
	const locale = (params?.locale as Locale) || 'en';
	const t = messages[locale] || messages.en;

	return (
			<div className="text-center mt-10">
				<h1 className="text-3xl font-bold mb-4">{t.title}</h1>
				<p className="text-gray-600">{t.message}</p>
				<Link
						href={`/${locale}`}
						className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
				>
					{t.backHome}
				</Link>
			</div>
	);
}