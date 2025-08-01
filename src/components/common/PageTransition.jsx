import React from "react";
import "./PageTransition.css";

const PageTransition = ({ children, isLoading }) => {
	return <div className={`page-transition ${isLoading ? "loading" : "loaded"}`}>{children}</div>;
};

export default PageTransition;
