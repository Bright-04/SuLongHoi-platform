import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Enhanced scroll management with position restoration
export const useScrollManager = (restorePosition = false) => {
	const location = useLocation();

	useEffect(() => {
		if (restorePosition) {
			// Try to restore saved scroll position
			const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
			if (savedPosition) {
				const position = JSON.parse(savedPosition);
				setTimeout(() => {
					window.scrollTo({
						top: position.y,
						left: position.x,
						behavior: "auto",
					});
				}, 100);
			} else {
				// Scroll to top if no saved position
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			}
		} else {
			// Always scroll to top
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}

		// Save scroll position before leaving the page
		const saveScrollPosition = () => {
			const position = {
				x: window.scrollX,
				y: window.scrollY,
			};
			sessionStorage.setItem(`scroll-${location.pathname}`, JSON.stringify(position));
		};

		// Add event listener for saving scroll position
		window.addEventListener("beforeunload", saveScrollPosition);

		return () => {
			saveScrollPosition();
			window.removeEventListener("beforeunload", saveScrollPosition);
		};
	}, [location.pathname, restorePosition]);
};

export default useScrollManager;
