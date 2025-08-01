import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook for managing loading states during navigation
export const useNavigationLoading = (delay = 300) => {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);

		const timer = setTimeout(() => {
			setIsLoading(false);
		}, delay);

		return () => clearTimeout(timer);
	}, [location.pathname, delay]);

	return isLoading;
};

export default useNavigationLoading;
