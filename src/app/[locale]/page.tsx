import Link from "next/link"
import AnimatedContainer from "@/components/ui/AnimatedContainer"
import Section from "@/components/ui/Section"
import ProjectCard from "@/components/ui/ProjectCard"
import ContactForm from "@/components/ui/ContactForm"
import {FaBriefcase} from "react-icons/fa";
import TimelineItem from "@/components/ui/TimelineItem";
import Image from "next/image";
import {Locale} from "@/lib/i18n/config";
import {getDictionary} from "@/lib/i18n/getDictionary";
import {projects} from "@/lib/data/projects";
import {experience} from "@/lib/data/experience";

export default async function HomePage({
	                                       params,
                                       }: { params: Promise<{ locale: Locale }>; }) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);

	return (
			<>
				{/* 1. Modern Hero Section */}
				<section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white dark:bg-gray-950">
					{/* Background Gradients */}
					<div
							className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"/>

					<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
						<AnimatedContainer className="flex flex-col items-center">
							<div
									className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span
		                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
								{dict.home.available}
							</div>

							<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-space">
								{dict.home.hi} <span
									className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{dict.home.javad}</span>
							</h1>

							<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
								{dict.home.introPrefix}{" "}
								<strong className="text-gray-900 dark:text-white">React</strong>,{" "}
								<strong className="text-gray-900 dark:text-white">Next.js</strong>{" "}
								{dict.home.introMiddle}{" "}
								<strong className="text-gray-900 dark:text-white">TypeScript</strong>.{" "}
								{dict.home.introSuffix}
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/projects"
								      className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
									{dict.home.viewWork}
								</Link>
								<Link href="/contact"
								      className="px-8 py-3.5 rounded-full font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all">
									{dict.home.contactMe}
								</Link>
							</div>
						</AnimatedContainer>
					</div>
				</section>

				{/* Main Content Container */}
				<div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

					<Section
							id="about"
							title={
								<span className="inline-flex items-center gap-2">
      <Image
		      src="/images/my-photo.png"
		      alt="My iconic picture"
		      width="40"
		      height="40"
      />
									{dict.about.sectionTitle}
    </span> as unknown as string
							}
							subtitle={dict.about.sectionSubtitle}
					>
						<div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400">
							<p>
								{dict.about.intro}{" "}
								<span className="font-semibold text-gray-900 dark:text-white">{dict.home.javad}</span>
								{locale === 'fa' ? '،' : ','} {dict.about.introRole}
							</p>

							<p>
								{dict.about.experiencePrefix}{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
        {dict.about.experienceSkills}
      </span>{" "}
								{dict.about.experienceSuffix}
							</p>

							<p>
								{dict.about.educationPrefix}{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
        {dict.about.educationDegree}
      </span>{" "}
								{dict.about.educationSuffix}
							</p>

							<p>
								{dict.about.hobbiesPrefix}{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
        {dict.about.hobbiesList}
      </span>
								{locale === 'fa' ? '' : '.'} {dict.about.hobbiesSuffix}
							</p>
						</div>

						<div dir={locale === 'fa' ? 'ltr' : 'rtl'} className="mt-8 text-center">
							<Link href={`/${locale}/about`}
							      className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								{dict.about.moreLink} {locale === 'fa' ? '←' : '→'}
							</Link>
						</div>
					</Section>

					<Section id="projects" title={dict.projects.sectionTitle} subtitle={dict.projects.sectionSubtitle}>
						<div className="grid md:grid-cols-2 gap-6">
							{projects.map((p) => (
									<ProjectCard
											key={p.id}
											title={p.title[locale]}
											description={p.description[locale]}
											tech={p.tech}
											repoUrl={p.repoUrl}
											demoUrl={p.demoUrl}/>
							))}
						</div>
						<div dir={locale === 'fa' ? 'ltr' : 'rtl'} className="mt-8 text-center">
							<Link href="/projects" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								{dict.projects.viewAllLink} {locale === 'fa' ? '←' : '→'}
							</Link>
						</div>
					</Section>
					<Section title={<span
							className="inline-flex items-center gap-2"><FaBriefcase/> {dict.experience.sectionTitle}</span> as unknown as string}
					         subtitle={dict.experience.sectionSubtitle}
					         id="experience"
					>
						<ul className="space-y-6 border-s-2 border-blue-600/60 dark:border-blue-500/60 pl-4">
							{experience.map((exp) => (
									<TimelineItem
											key={exp.id}
											title={exp.title[locale]}
											org={exp.org[locale]}
											period={exp.period[locale]}
											description={exp.description[locale]}
											bullets={exp.bullets[locale]}
									/>
							))}
						</ul>

						<div dir={locale === 'fa' ? 'ltr' : 'rtl'} className="mt-8 text-center">
							<Link href="/resume" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								{dict.experience.viewFullLink} {locale === 'fa' ? '←' : '→'}
							</Link>
						</div>
					</Section>


					<Section id="contact" title={dict.contact.sectionTitle} subtitle={dict.contact.sectionSubtitle}>
						<div className="bg-blue-100/50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl">
							<ContactForm dict={dict}/>
						</div>
					</Section>
				</div>
			</>
	)
}