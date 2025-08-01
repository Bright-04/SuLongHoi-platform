import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="nav-logo">
					<img src="/logo.png" alt="Sư Long Hội" className="logo-img" />
					<span className="logo-text">Sư Long Hội</span>
				</div>

				<div className="nav-menu">
					<a href="#home" className="nav-link">
						Home
					</a>
					<a href="#knowledge" className="nav-link">
						Knowledge Library
					</a>
					<a href="#designer" className="nav-link">
						3D Designer
					</a>
					<a href="#learn" className="nav-link">
						Learn & Train
					</a>
					<a href="#events" className="nav-link">
						Live Events
					</a>
					<a href="#community" className="nav-link">
						Community
					</a>
					<a href="#competitions" className="nav-link">
						Competitions
					</a>
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
