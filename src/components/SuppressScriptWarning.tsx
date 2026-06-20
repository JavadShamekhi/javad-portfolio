'use client';
import { useEffect } from 'react';

export default function SuppressScriptWarning() {
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			const orig = console.error;
			console.error = (...args: unknown[]) => {
				if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
					return;
				}
				orig.apply(console, args);
			};
		}
	}, []);

	return null;
}