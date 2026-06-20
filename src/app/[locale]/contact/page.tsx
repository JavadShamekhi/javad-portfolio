import ContactForm from "@/components/ui/ContactForm";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import {getDictionary} from "@/lib/i18n/getDictionary";
import type {Locale} from "@/lib/i18n/config";
import {Metadata} from "next";
import BackButton from "@/components/ui/BackButton";

export async function generateMetadata({params}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const {locale} = await params;
	const dict = await getDictionary(locale as Locale);
	return {
		title: dict.contactPage.metaTitle,
	};
}


export default async function ContactPage({params}: {
	                                          params: Promise<{ locale: string }>;
                                          }
) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);

	return (
			<AnimatedContainer className="max-w-3xl mx-auto mb-8">
				<BackButton locale={typedLocale} label={dict.common.back}/>
				<h2 className="text-4xl font-bold mb-5 text-center">{dict.contactPage.title}</h2>
				<p className="dark:text-gray-400 text-gray-700 mb-6 text-center">
					{dict.contactPage.subtitle}
				</p>

				<div className="bg-blue-100/50 dark:bg-blue-950/30 p-8 rounded-xl shadow-lg">
					<ContactForm dict={dict}/>
				</div>
			</AnimatedContainer>
	)
}