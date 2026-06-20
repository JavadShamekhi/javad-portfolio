export type Project = {
	id: string;
	title: { en: string; fa: string };
	description: { en: string; fa: string };
	tech: string[];
	repoUrl: string;
	demoUrl: string;
};

export const projects: Project[] = [
	{
		id: 'gold-store',
		title: {
			en: 'Gold Store',
			fa: 'فروشگاه طلا',
		},
		description: {
			en: 'E-commerce platform for gold and jewelry with product listing, cart system, and admin features.',
			fa: 'پلتفرم فروشگاهی طلا و جواهر با امکان نمایش محصولات، سیستم سبد خرید و بخش مدیریت.',
		},
		tech: ["Next.js", "TypeScript", "Tailwind", "REST API", "PostgreSQL", "Neon Database", "Auth", "JWT", "DarkMode", "Language Switcher"],
		repoUrl: "https://github.com/JavadShamekhi/gold-store",
		demoUrl: "https://zarringoldstore.ir",
	},
	{
		id: 'portfolio',
		title: {
			en: 'Portfolio Website',
			fa: 'وب‌سایت پورتفولیو',
		},
		description: {
			en: 'Personal portfolio showcasing projects, skills, and contact system with email integration.',
			fa: 'نمونه‌کار شخصی برای نمایش پروژه‌ها، مهارت‌ها و سیستم تماس با یکپارچه‌سازی ایمیل.',
		},
		tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Resend", "DarkMode"],
		repoUrl: "https://github.com/JavadShamekhi/javad-portfolio",
		demoUrl: "https://javadshamekhi.ir",
	},
];