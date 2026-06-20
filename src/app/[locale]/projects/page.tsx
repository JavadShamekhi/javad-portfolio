import ProjectsPageClient from "@/components/ui/ProjectsPageClient";
import {getDictionary} from "@/lib/i18n/getDictionary";
import type {Locale} from "@/lib/i18n/config";
import type {Metadata} from "next";

export async function generateMetadata({params}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const {locale} = await params;
	const dict = await getDictionary(locale as Locale);
	return {
		title: dict.projectsPage.title,
	};
}

export default async function ProjectsPage({params}: {
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);

	return <ProjectsPageClient locale={typedLocale} dict={dict}/>;
}