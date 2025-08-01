import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProgressBar.css";

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation();

	useEffect(() => {
		// Start progress when location changes
		setIsVisible(true);
		setProgress(0);

		// Simulate loading progress
		const intervals = [
			{ time: 50, progress: 20 },
			{ time: 150, progress: 50 },
			{ time: 300, progress: 80 },
			{ time: 500, progress: 100 },
		];

		const timeouts = intervals.map(({ time, progress: targetProgress }) => setTimeout(() => setProgress(targetProgress), time));

		// Hide progress bar after completion
		const hideTimeout = setTimeout(() => {
			setIsVisible(false);
			setProgress(0);
		}, 700);

		return () => {
			timeouts.forEach(clearTimeout);
			clearTimeout(hideTimeout);
		};
	}, [location.pathname]);

	if (!isVisible) return null;

	return (
		<div className="progress-bar-container">
			<div className="progress-bar" style={{ width: `${progress}%` }} />
		</div>
	);
};

export default ProgressBar;
