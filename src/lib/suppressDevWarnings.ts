/**
 * Next.js 16.2.x (Turbopack) has a known false-positive warning that fires
 * whenever a <script> tag is rendered inside a React component tree —
 * even when it comes from official packages like `next-themes`.
 *
 * The script itself works correctly in SSR; this is purely a dev-console
 * warning and never appears in production builds.
 *
 * This file is imported once (for its side effect) at the top of the root
 * layout, so the console.error override is installed at module-evaluation
 * time — before any component renders — rather than inside a useEffect
 * (which would run too late to catch warnings fired during the render phase).
 */
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
	const originalError = console.error;

	console.error = (...args: unknown[]) => {
		if (
				typeof args[0] === 'string' &&
				args[0].includes('Encountered a script tag')
		) {
			return;
		}
		originalError.apply(console, args);
	};
}