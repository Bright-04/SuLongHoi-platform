import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Enhanced navigation loading hook with route-specific configurations
export const useRouteLoading = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState("Loading...");
	const location = useLocation();

	const routeConfig = {
		"/": {
			delay: 300,
			message: "Sư Long Hội: loading...",
		},
		"/knowledge": {
			delay: 500,
			message: "Sư Long Hội: loading...",
		},
		"/knowledge/article": {
			delay: 400,
			message: "Loading article...",
		},
		"/knowledge/search": {
			delay: 400,
			message: "Searching articles...",
		},
	};

	useEffect(() => {
		setIsLoading(true);
		setIsVisible(true);

		// Find the appropriate config for the current route
		const config = Object.entries(routeConfig).find(([route]) => location.pathname.startsWith(route))?.[1] || { delay: 300, message: "Loading..." };

		setLoadingMessage(config.message);

		const timer = setTimeout(() => {
			setIsVisible(false); // Start fade-out
			// Set loading to false after fade-out completes
			setTimeout(() => {
				setIsLoading(false);
			}, 300); // Match fade-out duration
		}, config.delay);

		return () => clearTimeout(timer);
	}, [location.pathname]);

	return { isLoading, isVisible, loadingMessage };
};

export default useRouteLoading;
