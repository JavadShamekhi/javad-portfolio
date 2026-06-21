"use client";
import {createContext, useContext, useEffect, useRef, ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";

function stripLocale(path: string): string {
	return path.replace(/^\/(en|fa)/, "") || "/";
}

type NavigationHistoryContextType = {
	goBack: () => void;
};

const NavigationHistoryContext = createContext<NavigationHistoryContextType | null>(null);

export function NavigationHistoryProvider({children}: { children: ReactNode }) {
	const router = useRouter();
	const pathname = usePathname();
	const stackRef = useRef<string[]>([]);

	useEffect(() => {
		const stack = stackRef.current;
		const currentLogical = stripLocale(pathname);
		const lastLogical = stack.length > 0 ? stripLocale(stack[stack.length - 1]) : null;

		if (lastLogical === currentLogical) {
			stack[stack.length - 1] = pathname;
		} else {
			stack.push(pathname);
		}
	}, [pathname]);

	function goBack() {
		const stack = stackRef.current;
		if (stack.length > 1) {
			stack.pop();
			const previous = stack[stack.length - 1];
			router.push(previous);
		} else {
			router.push("/");
		}
	}

	return (
			<NavigationHistoryContext.Provider value={{goBack}}>
				{children}
			</NavigationHistoryContext.Provider>
	);
}

export function useNavigationHistory() {
	const ctx = useContext(NavigationHistoryContext);
	if (!ctx) {
		throw new Error("useNavigationHistory must be used within NavigationHistoryProvider");
	}
	return ctx;
}