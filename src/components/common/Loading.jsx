import React, { useState, useEffect } from "react";
import "./Loading.css";

const Loading = ({ message = "Loading...", isVisible = true, onFadeComplete }) => {
	const [shouldRender, setShouldRender] = useState(isVisible);
	const [fadeClass, setFadeClass] = useState(isVisible ? "fade-in" : "fade-out");

	useEffect(() => {
		if (isVisible) {
			setShouldRender(true);
			setFadeClass("fade-in");
		} else {
			setFadeClass("fade-out");
			// Wait for fade-out animation to complete before unmounting
			const timer = setTimeout(() => {
				setShouldRender(false);
				onFadeComplete?.();
			}, 300); // Match the CSS transition duration

			return () => clearTimeout(timer);
		}
	}, [isVisible, onFadeComplete]);

	if (!shouldRender) return null;

	return (
		<div className={`loading-container ${fadeClass}`}>
			<div className="loading-content">
				<div className="loading-spinner">
					<div className="loading-dragon">🐉</div>
					<div className="loading-lion">🦁</div>
				</div>
				<p className="loading-message">{message}</p>
			</div>
		</div>
	);
};

export default Loading;
