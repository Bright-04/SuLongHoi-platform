import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/layout/Navbar.css";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const [isNavigating, setIsNavigating] = useState(false);

	const scrollToSection = (sectionId) => {
		if (isHomePage) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const handleLinkClick = () => {
		setIsNavigating(true);
		// Reset navigation state after a delay
		setTimeout(() => setIsNavigating(false), 500);
	};

	const isActivePage = (path) => {
		if (path === "/" && location.pathname === "/") return true;
		if (path !== "/" && location.pathname.startsWith(path)) return true;
		return false;
	};

	return (
		<nav className="navbar">
			<div className="nav-container">
				<Link to="/" className="nav-logo">
					<img src={logo} alt="Sư Long Hội" className="logo-img" />
					<span className="logo-text">Sư Long Hội</span>
				</Link>

				<div className="nav-menu">
					<Link to="/" className={`nav-link ${isActivePage("/") ? "active" : ""}`} onClick={handleLinkClick}>
						Home
					</Link>
					<Link to="/knowledge" className={`nav-link ${isActivePage("/knowledge") ? "active" : ""}`} onClick={handleLinkClick}>
						Knowledge Library
					</Link>
					{isHomePage ? (
						<>
							<a href="#designer" className="nav-link" onClick={() => scrollToSection("designer")}>
								3D Designer
							</a>
							<a href="#learn" className="nav-link" onClick={() => scrollToSection("learn")}>
								Learn & Train
							</a>
							<a href="#events" className="nav-link" onClick={() => scrollToSection("events")}>
								Live Events
							</a>
							<a href="#community" className="nav-link" onClick={() => scrollToSection("community")}>
								Community
							</a>
							<a href="#competitions" className="nav-link" onClick={() => scrollToSection("competitions")}>
								Competitions
							</a>
						</>
					) : (
						<>
							<Link to="/#designer" className="nav-link">
								3D Designer
							</Link>
							<Link to="/#learn" className="nav-link">
								Learn & Train
							</Link>
							<Link to="/#events" className="nav-link">
								Live Events
							</Link>
							<Link to="/#community" className="nav-link">
								Community
							</Link>
							<Link to="/#competitions" className="nav-link">
								Competitions
							</Link>
						</>
					)}
				</div>

				<div className="nav-actions">
					<button className="nav-btn nav-btn-secondary">Login</button>
					<button className="nav-btn nav-btn-primary">Join Now</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
