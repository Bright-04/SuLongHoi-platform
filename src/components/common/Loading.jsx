import React from "react";
import "./Loading.css";

const Loading = ({ message = "Loading..." }) => {
	return (
		<div className="loading-container">
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
