import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/layout/Navbar.css";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const isDesignerPage = location.pathname === "/designer";
	const isHomePage = location.pathname === "/";
	const [isNavigating, setIsNavigating] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId) => {
		if (isHomePage) {
			// If already on home page, scroll directly
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			// If not on home page, navigate to home first, then scroll
			navigate("/");
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 100); // Small delay to ensure page loads
		}
		// Close mobile menu after scrolling
		setIsMobileMenuOpen(false);
	};

	const handleLinkClick = () => {
		setIsNavigating(true);
		setIsMobileMenuOpen(false); // Close mobile menu
		// Reset navigation state after a delay
		setTimeout(() => setIsNavigating(false), 500);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const isActivePage = (path) => {
		if (path === "/" && location.pathname === "/") return true;
		if (path !== "/" && location.pathname.startsWith(path)) return true;
		return false;
	};

	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="nav-logo">
					<Link to="/" className="logo-link">
						<img src={logo} alt="Sư Long Hội" className="logo-img" />
						<span className="logo-text">Sư Long Hội</span>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<div className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
					<button className="nav-link" onClick={() => scrollToSection("home")}>
						Home
					</button>
					<button className="nav-link" onClick={() => scrollToSection("designer")}>
						3D Designer
					</button>
					<button className="nav-link" onClick={() => scrollToSection("events")}>
						Events
					</button>
					<button className="nav-link" onClick={() => scrollToSection("storytelling")}>
						Story
					</button>
					<button className="nav-link" onClick={() => scrollToSection("timeline-history")}>
						History
					</button>
					<button className="nav-link" onClick={() => scrollToSection("performance-board")}>
						Leaderboard
					</button>
					<button className="nav-link" onClick={() => scrollToSection("community")}>
						Community
					</button>
					<button className="nav-link" onClick={() => scrollToSection("image-library")}>
						Library
					</button>
					<button className="nav-link" onClick={() => scrollToSection("knowledge")}>
						Academy
					</button>
					<button className="nav-link" onClick={() => scrollToSection("competitions")}>
						Campaigns
					</button>

					{/* Mobile Actions */}
					<div className="nav-actions-mobile">
						<button className="nav-btn nav-btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>
							Login
						</button>
						<button className="nav-btn nav-btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
							Join Now
						</button>
					</div>
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
