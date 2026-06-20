export type EducationEntry = {
	id: string;
	title: { en: string; fa: string };
	org: { en: string; fa: string };
	period: { en: string; fa: string };
	description: { en: string; fa: string };
};

export const education: EducationEntry[] = [
	{
		id: 'bnut-ce',
		title: {
			en: 'B.Sc. in Computer Engineering',
			fa: 'کارشناسی مهندسی کامپیوتر',
		},
		org: {
			en: 'BNUT - Babol Noshirvani University of Technology',
			fa: 'دانشگاه صنعتی نوشیروانی بابل (BNUT)',
		},
		period: {
			en: '2019–2024',
			fa: '۱۳۹۸–۱۴۰۳',
		},
		description: {
			en: 'Focused on software engineering, databases, algorithms, and web development.',
			fa: 'با تمرکز بر مهندسی نرم‌افزار، پایگاه داده، الگوریتم‌ها و توسعه وب.',
		},
	},
];