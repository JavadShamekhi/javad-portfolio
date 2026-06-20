import AnimatedContainer from "@/components/ui/AnimatedContainer"
import {getDictionary} from "@/lib/i18n/getDictionary";
import type {Locale} from "@/lib/i18n/config";
import type {Metadata} from "next";
import BackButton from "@/components/ui/BackButton";

export async function generateMetadata({params}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const {locale} = await params;
	const dict = await getDictionary(locale as Locale);
	return {
		title: dict.aboutPage.metaTitle,
	};
}

export default async function AboutPage({params}: {
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);
	const d = dict.aboutPage;

	return (
			<AnimatedContainer className="max-w-3xl mx-auto mb-5">
				<BackButton locale={typedLocale} label={dict.common.back}/>
				<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
					{d.title}
				</h2>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					{d.intro}{" "}
					<span className="font-semibold text-gray-900 dark:text-white">{dict.home.javad}</span>
					{typedLocale === 'fa' ? '،' : ','} {d.introRole}
				</p>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					{d.experiencePrefix}{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
          {d.experienceSkills}
        </span>
					{typedLocale === 'fa' ? '' : ','} {d.experienceSuffix}
				</p>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					{d.educationPrefix}{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
          {d.educationDegree}
        </span>{" "}
					{d.educationSuffix}
				</p>

				<p className="mb-6 text-gray-600 dark:text-gray-400">
					{d.projectsNote}
				</p>

				{/* SKILLS SECTION */}
				<div className="mt-8">
					<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						{d.skillsTitle}
					</h3>

					<div className="space-y-4 text-gray-600 dark:text-gray-400">

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.coreFrontendLabel}</p>
							<p>{d.skills.coreFrontendValue}</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.stylingLabel}</p>
							<p>{d.skills.stylingValue}</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.apiLabel}</p>
							<p>{d.skills.apiValue}</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.toolsLabel}</p>
							<p>{d.skills.toolsValue}</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.backendLabel}</p>
							<p>{d.skills.backendValue}</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">{d.skills.softSkillsLabel}</p>
							<p>{d.skills.softSkillsValue}</p>
						</div>

					</div>
				</div>

				{/* PERSONAL NOTE */}
				<p className="mt-8 text-gray-600 dark:text-gray-400">
					{d.personalPrefix}{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
          {d.personalList}
        </span>
					{typedLocale === 'fa' ? '' : '.'} {d.personalSuffix}
				</p>
			</AnimatedContainer>
	)
}