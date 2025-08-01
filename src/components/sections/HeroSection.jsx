import React from "react";
import { Button } from "../common";

const HeroSection = () => {
	return (
		<section id="home" className="hero-section">
			<div className="hero-video-bg">
				<div className="collage-container">
					<div className="collage-slide">
						<img src="/src/assets/images/illustrations/collage1.png" alt="Lion Dance Collage" />
					</div>
					<div className="collage-slide">
						<img src="/src/assets/images/illustrations/collage1.png" alt="Lion Dance Collage" />
					</div>
				</div>
			</div>

			<div className="hero-overlay">
				<div className="hero-content">
					<div className="hero-logo">
						<h1>Sư Long Hội</h1>
					</div>

					<p className="hero-tagline">"Reviving Traditions. Inspiring Generations."</p>

					<div className="hero-cta-buttons">
						<Button variant="primary" size="large" className="cta-btn primary">
							🔍 Explore Vietnamese Lion Dance
						</Button>
						<Button variant="secondary" size="large" className="cta-btn secondary">
							🎨 Design Your Own Lion Head
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
