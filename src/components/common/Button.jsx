import React from "react";
import "./Button.css";

const Button = ({ children, variant = "primary", size = "medium", className = "", onClick, disabled = false, type = "button", ...props }) => {
	const buttonClass = `btn btn--${variant} btn--${size} ${className}`.trim();

	return (
		<button className={buttonClass} onClick={onClick} disabled={disabled} type={type} {...props}>
			{children}
		</button>
	);
};

export default Button;
