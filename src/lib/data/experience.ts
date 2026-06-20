export type ExperienceEntry = {
	id: string;
	title: { en: string; fa: string };
	org: { en: string; fa: string };
	period: { en: string; fa: string };
	description: { en: string; fa: string };
	bullets: { en: string[]; fa: string[] };
};

export const experience: ExperienceEntry[] = [
	{
		id: 'erp-support',
		title: {
			en: 'ERP Software Support & Database Specialist',
			fa: 'متخصص پشتیبانی نرم‌افزار ERP و پایگاه داده',
		},
		org: {
			en: 'ERP Solutions Company, at Ava Samaneh Mandegar, Karaj',
			fa: 'شرکت راهکارهای ERP، آوا سامانه ماندگار، کرج',
		},
		period: {
			en: '2022 – 2023',
			fa: '۱۴۰۱ – ۱۴۰۲',
		},
		description: {
			en: 'Worked on enterprise ERP systems with a focus on SQL Server database management, reporting, and system maintenance.',
			fa: 'فعالیت روی سیستم‌های سازمانی ERP با تمرکز بر مدیریت پایگاه داده SQL Server، گزارش‌گیری و نگهداری سیستم.',
		},
		bullets: {
			en: [
				"Developed and optimized T-SQL queries, stored procedures, and reports",
				"Performed SQL Server backup and recovery operations",
				"Improved database performance and troubleshooting processes",
				"Provided technical support for ERP users and business operations",
			],
			fa: [
				"توسعه و بهینه‌سازی کوئری‌های T-SQL، Stored Procedure ها و گزارش‌ها",
				"انجام عملیات backup و recovery پایگاه داده SQL Server",
				"بهبود عملکرد پایگاه داده و فرآیندهای رفع اشکال",
				"ارائه پشتیبانی فنی برای کاربران ERP و عملیات کسب‌وکار",
			],
		},
	},
	{
		id: 'frontend-react',
		title: {
			en: 'Frontend Developer - React',
			fa: 'توسعه‌دهنده فرانت‌اند - React',
		},
		org: {
			en: 'Administrative Automation System at Military of Iran, Tehran',
			fa: 'سیستم اتوماسیون اداری نیروهای مسلح ایران، تهران',
		},
		period: {
			en: '2024–2026',
			fa: '۱۴۰۳–۱۴۰۵',
		},
		description: {
			en: 'Developed and maintained web-based administrative automation software using React.',
			fa: 'توسعه و نگهداری نرم‌افزار اتوماسیون اداری وب‌محور با استفاده از React.',
		},
		bullets: {
			en: [
				"Built responsive and user-friendly interfaces with React",
				"Implemented reusable components and modern frontend architecture",
				"Integrated frontend applications with backend APIs",
				"Collaborated with stakeholders to improve usability and workflow efficiency",
			],
			fa: [
				"ساخت رابط‌های کاربری ریسپانسیو و کاربرپسند با React",
				"پیاده‌سازی کامپوننت‌های قابل‌استفاده مجدد و معماری مدرن فرانت‌اند",
				"یکپارچه‌سازی اپلیکیشن‌های فرانت‌اند با API های بک‌اند",
				"همکاری با ذی‌نفعان برای بهبود کارایی و قابلیت استفاده",
			],
		},
	},
];