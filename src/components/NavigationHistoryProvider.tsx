"use client";
import {createContext, useContext, useEffect, useRef, ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";

type NavigationHistoryContextType = {
	goBack: () => void;
};

const NavigationHistoryContext = createContext<NavigationHistoryContextType | null>(null);

export function NavigationHistoryProvider({children}: { children: ReactNode }) {
	const router = useRouter();
	const pathname = usePathname();
	const isFirstRender = useRef(true);
	const hasNavigatedRef = useRef(false);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		hasNavigatedRef.current = true;
	}, [pathname]);

	function goBack() {
		if (hasNavigatedRef.current) {
			router.back();
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