import React from "react";

const SectionTitle = ({ children, level = "h2", className = "", ...props }) => {
	const Component = level;

	return (
		<Component className={`section-title ${className}`.trim()} {...props}>
			{children}
		</Component>
	);
};

export default SectionTitle;
