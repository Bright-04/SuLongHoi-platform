import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<h4>Sư Long Hội</h4>
						<p>Preserving Vietnamese heritage through digital innovation</p>
						<div className="social-icons">
							<span>📘</span>
							<span>📷</span>
							<span>🐦</span>
							<span>📱</span>
							<span>📺</span>
						</div>
					</div>

					<div className="footer-section">
						<h4>Quick Links</h4>
						<ul>
							<li>
								<a href="#about">About Us</a>
							</li>
							<li>
								<a href="#team">Our Team</a>
							</li>
							<li>
								<a href="#press">Press</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<h4>Legal</h4>
						<ul>
							<li>
								<a href="#privacy">Privacy Policy</a>
							</li>
							<li>
								<a href="#terms">Terms of Service</a>
							</li>
							<li>
								<a href="#cookies">Cookie Policy</a>
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<h4>Newsletter</h4>
						<p>Stay updated with the latest news</p>
						<div className="newsletter-signup">
							<input type="email" placeholder="Enter your email" />
							<button>Subscribe</button>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; 2025 Sư Long Hội. All rights reserved.</p>
					<div className="sponsors">
						<span>Supported by:</span>
						<div className="sponsor-badges">
							<span className="sponsor-badge">UNESCO</span>
							<span className="sponsor-badge">Vietnam Heritage</span>
							<span className="sponsor-badge">Cultural Foundation</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
