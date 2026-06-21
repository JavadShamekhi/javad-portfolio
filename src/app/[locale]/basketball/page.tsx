import {getDictionary} from '@/lib/i18n/getDictionary'
import type {Locale} from '@/lib/i18n/config'
import type {Metadata} from 'next'
import BasketballPageClient from '@/components/ui/BasketballPageClient'

export async function generateMetadata({params}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const {locale} = await params;
	const dict = await getDictionary(locale as Locale);
	return {
		title: dict.basketballPage.metaTitle,
		description: dict.basketballPage.metaDescription,
	};
}

export default async function BasketballPage({params}: {
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);

	return <BasketballPageClient locale={typedLocale} dict={dict}/>;
}