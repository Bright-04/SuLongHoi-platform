// Navigation utilities for enhanced user experience

/**
 * Handles smooth navigation with loading feedback
 * @param {function} navigate - React Router navigate function
 * @param {string} path - Target path
 * @param {object} options - Navigation options
 */
export const smoothNavigate = (navigate, path, options = {}) => {
	// Add a small delay to show loading state
	setTimeout(() => {
		navigate(path, options);
	}, 50);
};

/**
 * Force trigger a loading state for testing
 * @param {function} setLoadingState - State setter function
 * @param {number} duration - Loading duration in ms
 */
export const triggerLoadingDemo = (setLoadingState, duration = 2000) => {
	setLoadingState(true);
	setTimeout(() => {
		setLoadingState(false);
	}, duration);
};

/**
 * Get loading message based on current route
 * @param {string} pathname - Current pathname
 * @returns {string} Appropriate loading message
 */
export const getLoadingMessage = (pathname) => {
	if (pathname.startsWith("/knowledge/article")) {
		return "Loading article...";
	} else if (pathname.startsWith("/knowledge/search")) {
		return "Searching articles...";
	} else if (pathname.startsWith("/knowledge")) {
		return "Loading knowledge library...";
	} else if (pathname === "/") {
		return "Loading home page...";
	}
	return "Loading...";
};

export default {
	smoothNavigate,
	triggerLoadingDemo,
	getLoadingMessage,
};
