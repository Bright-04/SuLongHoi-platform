import React, { useState, useEffect } from "react";
import "./Loading.css";
import logo from "../../assets/images/logos/logo.png";

const Loading = ({ message = "Loading...", isVisible = true, onFadeComplete }) => {
	const [shouldRender, setShouldRender] = useState(isVisible);
	const [fadeClass, setFadeClass] = useState(isVisible ? "fade-in" : "fade-out");
	const [logoError, setLogoError] = useState(false);

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

	const handleLogoError = () => {
		setLogoError(true);
	};

	if (!shouldRender) return null;

	return (
		<div className={`loading-container ${fadeClass}`}>
			<div className="loading-content">
				<div className="loading-spinner">
					{!logoError ? (
						<img src={logo} alt="SuLongHoi Logo" className="loading-logo" onError={handleLogoError} loading="eager" />
					) : (
						<div className="loading-fallback" aria-label="SuLongHoi">
							SHL
						</div>
					)}
				</div>
				<p className="loading-message" role="status" aria-live="polite">
					{message}
				</p>
			</div>
		</div>
	);
};

export default Loading;
