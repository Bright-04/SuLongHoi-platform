import React from "react";
import "./Card.css";

const Card = ({ children, variant = "default", className = "", hover = false, ...props }) => {
	const cardClass = `card card--${variant} ${hover ? "card--hover" : ""} ${className}`.trim();

	return (
		<div className={cardClass} {...props}>
			{children}
		</div>
	);
};

const CardHeader = ({ children, className = "" }) => <div className={`card__header ${className}`}>{children}</div>;

const CardBody = ({ children, className = "" }) => <div className={`card__body ${className}`}>{children}</div>;

const CardFooter = ({ children, className = "" }) => <div className={`card__footer ${className}`}>{children}</div>;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
