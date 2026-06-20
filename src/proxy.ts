import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';

function getLocaleFromRequest(request: NextRequest): string {
	const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
	if (cookieLocale && locales.includes(cookieLocale as any)) {
		return cookieLocale;
	}

	const acceptLanguage = request.headers.get('accept-language');
	const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0];
	if (browserLocale && locales.includes(browserLocale as any)) {
		return browserLocale;
	}

	return defaultLocale;
}

export default function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
			(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	const locale = getLocaleFromRequest(request);
	const newUrl = new URL(`/${locale}${pathname}`, request.url);
	return NextResponse.redirect(newUrl);
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)',
	],
};