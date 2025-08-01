// Utility functions for the application

// Format currency for marketplace
export const formatCurrency = (amount, currency = "USD") => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
	}).format(amount);
};

// Format date for events
export const formatDate = (date, options = {}) => {
	const defaultOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(new Date(date));
};

// Debounce function for search inputs
export const debounce = (func, wait) => {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

// Generate unique IDs
export const generateId = () => {
	return Math.random().toString(36).substr(2, 9);
};

// Class name utility (similar to clsx)
export const cn = (...classes) => {
	return classes.filter(Boolean).join(" ");
};
