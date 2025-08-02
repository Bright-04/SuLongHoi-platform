import React from "react";
import { Button } from "../common";
import collage1 from "../../assets/images/illustrations/collage1.png";

const HeroSection = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="home" className="hero-section">
			<div className="hero-video-bg">
				<div className="collage-container">
					<div className="collage-slide">
						<img src={collage1} alt="Lion Dance Collage" />
					</div>
					<div className="collage-slide">
						<img src={collage1} alt="Lion Dance Collage" />
					</div>
				</div>
			</div>

			<div className="hero-overlay">
				<div className="hero-content">
					<div className="hero-logo">
						<h1>
							<span className="title-vietnamese">Sư Long Hội</span>
							<span className="title-english">The Lion & Dragon Union</span>
						</h1>
					</div>

					<p className="hero-tagline">"Reviving Traditions. Inspiring Generations."</p>

					<div className="hero-cta-buttons">
						<Button variant="primary" size="large" className="cta-btn primary" onClick={() => scrollToSection("events")}>
							🎪 View Events & Festivals
						</Button>
						<Button variant="secondary" size="large" className="cta-btn secondary" onClick={() => scrollToSection("designer")}>
							🎨 Design Your Own Lion Head
						</Button>
					</div>

					<div className="hero-see-more">
						<p>See more below ↓</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
