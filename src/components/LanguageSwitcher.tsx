'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
	const pathname = usePathname();
	const router = useRouter();

	const nextLocale: Locale = currentLocale === 'en' ? 'fa' : 'en';

	function toggleLocale() {
		const segments = pathname.split('/');
		segments[1] = nextLocale;

		document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
		router.push(segments.join('/'));
	}

	return (
			<button
					aria-label="Toggle language switcher"
					onClick={toggleLocale}
					type="button"
					className="inline-flex items-center justify-center w-12 h-9 rounded-md border border-[var(--toggle-b)] hover:border-[var(--toggle-bh)] transition cursor-pointer"
			>
				{nextLocale === 'fa' ? 'پارسی' : 'EN'}
			</button>
	);
}