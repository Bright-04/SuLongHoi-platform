import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
	const [activeTab, setActiveTab] = useState("history");
	const [selectedRegion, setSelectedRegion] = useState("all");

	return (
		<div className="website-container">
			<Navbar />

			{/* 1. Hero Section with Video Background */}
			<section id="home" className="hero-section">
				<div className="hero-video-bg">
					<div className="video-placeholder">🎭 Lion Dance Performance Video Background</div>
				</div>

				<div className="hero-overlay">
					<div className="hero-content">
						<div className="hero-logo">
							<h1>Sư Long Hội</h1>
						</div>

						<p className="hero-tagline">"Reviving Traditions. Inspiring Generations."</p>

						<div className="hero-cta-buttons">
							<button className="cta-btn primary">🔍 Explore Vietnamese Lion Dance</button>
							<button className="cta-btn secondary">🎨 Design Your Own Lion Head</button>
						</div>
					</div>
				</div>
			</section>

			{/* 2. Knowledge Library */}
			<section id="knowledge" className="knowledge-section">
				<div className="container">
					<h2 className="section-title">Khám phá nghệ thuật Lân - Sư - Rồng</h2>

					<div className="knowledge-tabs">
						<button className={`tab ${activeTab === "history" ? "active" : ""}`} onClick={() => setActiveTab("history")}>
							Lịch sử
						</button>
						<button className={`tab ${activeTab === "types" ? "active" : ""}`} onClick={() => setActiveTab("types")}>
							Các loại hình
						</button>
						<button className={`tab ${activeTab === "regions" ? "active" : ""}`} onClick={() => setActiveTab("regions")}>
							Theo vùng miền
						</button>
						<button className={`tab ${activeTab === "unesco" ? "active" : ""}`} onClick={() => setActiveTab("unesco")}>
							UNESCO Di sản
						</button>
					</div>

					<div className="knowledge-content">
						<div className="search-filters">
							<input type="text" placeholder="Search traditions, regions, teams..." className="search-bar" />
							<select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="filter-select">
								<option value="all">All Regions</option>
								<option value="north">North Vietnam</option>
								<option value="central">Central Vietnam</option>
								<option value="south">South Vietnam</option>
							</select>
						</div>

						<div className="vietnam-map">
							<div className="map-placeholder">
								🗺️ Interactive Map of Vietnam
								<div className="map-markers">
									<div className="marker north">Northern Style</div>
									<div className="marker central">Central Style</div>
									<div className="marker south">Southern Style</div>
								</div>
							</div>
						</div>

						<div className="knowledge-cards">
							<div className="knowledge-card">
								<div className="card-image">🏮</div>
								<h3>Traditional Lion Dance History</h3>
								<p>Discover the ancient origins and cultural significance...</p>
								<button className="learn-more-btn">Learn more</button>
							</div>
							<div className="knowledge-card">
								<div className="card-image">🥁</div>
								<h3>Musical Accompaniment</h3>
								<p>The rhythms and instruments that bring the dance to life...</p>
								<button className="learn-more-btn">Learn more</button>
							</div>
							<div className="knowledge-card">
								<div className="card-image">🎭</div>
								<h3>Regional Variations</h3>
								<p>How different regions developed unique styles...</p>
								<button className="learn-more-btn">Learn more</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. 3D Lion Head Designer */}
			<section id="designer" className="designer-section">
				<div className="designer-container">
					<h2 className="section-title">3D Lion Head Designer</h2>

					<div className="designer-interface">
						<div className="designer-sidebar">
							<h3>Customize Your Lion</h3>
							<div className="prompt-input">
								<textarea placeholder="Describe your vision..."></textarea>
							</div>
							<div className="sliders">
								<div className="slider-group">
									<label>Color Theme</label>
									<input type="range" className="slider" />
								</div>
								<div className="slider-group">
									<label>Horn Style</label>
									<input type="range" className="slider" />
								</div>
								<div className="slider-group">
									<label>Face Type</label>
									<input type="range" className="slider" />
								</div>
							</div>
						</div>

						<div className="designer-viewer">
							<div className="model-viewer">
								🦁 3D Lion Head Model
								<div className="viewer-controls">
									<button>Rotate</button>
									<button>Zoom</button>
									<button>Reset</button>
								</div>
							</div>
						</div>

						<div className="designer-actions">
							<h3>Share & Create</h3>
							<button className="action-btn">🎭 Send to a Lion Team</button>
							<button className="action-btn">🧵 Send to Artisan for Quote</button>
							<button className="action-btn">🧑‍🎨 Collaborate with Designer</button>
							<div className="export-options">
								<button className="export-btn">Download</button>
								<button className="export-btn">Share</button>
								<button className="export-btn">Save</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. Learn & Train */}
			<section id="learn" className="learn-section">
				<div className="container">
					<h2 className="section-title">Học múa Lân từ gốc</h2>

					<div className="course-filters">
						<button className="filter-btn active">All</button>
						<button className="filter-btn">Basic</button>
						<button className="filter-btn">Advanced</button>
						<button className="filter-btn">By Region</button>
						<button className="filter-btn">Free</button>
						<button className="filter-btn">Certified</button>
					</div>

					<div className="courses-grid">
						<div className="course-card">
							<div className="course-video">📹 Preview Video</div>
							<div className="course-info">
								<h3>Basic Lion Dance Fundamentals</h3>
								<div className="course-meta">
									<span className="level">Beginner</span>
									<span className="teacher">Master Nguyen</span>
								</div>
								<div className="course-progress">
									<div className="progress-bar">
										<div className="progress-fill" style={{ width: "30%" }}></div>
									</div>
									<span>3/10 lessons</span>
								</div>
							</div>
						</div>

						<div className="course-card">
							<div className="course-video">📹 Preview Video</div>
							<div className="course-info">
								<h3>Southern Style Techniques</h3>
								<div className="course-meta">
									<span className="level">Intermediate</span>
									<span className="teacher">Master Tran</span>
								</div>
								<div className="course-progress">
									<div className="progress-bar">
										<div className="progress-fill" style={{ width: "0%" }}></div>
									</div>
									<span>0/15 lessons</span>
								</div>
							</div>
						</div>
					</div>

					<div className="gamification">
						<h3>Your Progress</h3>
						<div className="badges">
							<div className="badge earned">🏆 First Steps</div>
							<div className="badge">🥇 Master Student</div>
							<div className="badge">🎭 Performance Ready</div>
						</div>
						<div className="xp-bar">
							<span>Level 3 - 1,250 XP</span>
							<div className="xp-progress">
								<div className="xp-fill" style={{ width: "60%" }}></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Live Events + Culture Map */}
			<section id="events" className="events-section">
				<div className="container">
					<h2 className="section-title">Live Events & Culture Map</h2>

					<div className="events-interface">
						<div className="events-calendar">
							<h3>📅 Upcoming Events</h3>
							<div className="calendar-view">
								<div className="event-item">
									<div className="event-date">Aug 15</div>
									<div className="event-info">
										<h4>Lunar New Year Celebration</h4>
										<p>Ho Chi Minh City</p>
										<div className="event-actions">
											<button className="notify-btn">🔔 Notify Me</button>
											<button className="interested-btn">❤️ Interested</button>
										</div>
									</div>
								</div>
								<div className="event-item">
									<div className="event-date">Aug 22</div>
									<div className="event-info">
										<h4>Traditional Festival</h4>
										<p>Hanoi</p>
										<div className="event-actions">
											<button className="notify-btn">🔔 Notify Me</button>
											<button className="interested-btn">❤️ Interested</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="live-map">
							<h3>🌍 Live Culture Map</h3>
							<div className="map-container">
								<div className="live-stream-marker">📺 Live Stream Active</div>
								<div className="event-popups">
									<div className="popup">
										<h4>Dragon Festival</h4>
										<p>3:00 PM - 8:00 PM</p>
										<p>📍 District 1, HCMC</p>
										<button>RSVP</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 6. Community & Marketplace */}
			<section id="community" className="community-section">
				<div className="container">
					<h2 className="section-title">Community & Marketplace</h2>

					<div className="community-tabs">
						<button className="community-tab active">Marketplace</button>
						<button className="community-tab">Stories</button>
						<button className="community-tab">Community Wall</button>
					</div>

					<div className="marketplace">
						<div className="marketplace-categories">
							<button className="category-btn">Lion Heads</button>
							<button className="category-btn">Costumes</button>
							<button className="category-btn">Accessories</button>
							<button className="category-btn">Performance Booking</button>
						</div>

						<div className="marketplace-grid">
							<div className="product-card">
								<div className="product-image">🦁</div>
								<h4>Traditional Red Lion Head</h4>
								<div className="seller-info">
									<span>By Master Artisan Le</span>
									<div className="rating">⭐⭐⭐⭐⭐</div>
								</div>
								<div className="price">$299</div>
							</div>

							<div className="product-card">
								<div className="product-image">👘</div>
								<h4>Silk Lion Costume Set</h4>
								<div className="seller-info">
									<span>By Traditional Crafts Co.</span>
									<div className="rating">⭐⭐⭐⭐⭐</div>
								</div>
								<div className="price">$159</div>
							</div>
						</div>
					</div>

					<div className="community-stories">
						<h3>Kể chuyện – Truyền nhân</h3>
						<div className="stories-gallery">
							<div className="story-card">
								<div className="story-image">📸</div>
								<h4>Behind the Scenes: Master Craftsman</h4>
								<p>Follow the journey of creating a lion head...</p>
								<button className="story-btn">Watch Story</button>
							</div>
							<div className="story-card">
								<div className="story-image">📸</div>
								<h4>Young Performer's Journey</h4>
								<p>A teenager's path to mastering the art...</p>
								<button className="story-btn">Support Artist</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 7. Competitions & Social Campaign */}
			<section id="competitions" className="competitions-section">
				<div className="container">
					<h2 className="section-title">Competitions & Social Campaigns</h2>

					<div className="competition-banners">
						<div className="competition-banner featured">
							<h3>🎨 Design Contest</h3>
							<p>Create the most innovative lion head design</p>
							<button className="enter-btn">Enter Now</button>
						</div>
						<div className="competition-banner">
							<h3>💃 Dance-Off Online</h3>
							<p>Show your best moves in our virtual competition</p>
							<button className="enter-btn">Join Dance-Off</button>
						</div>
						<div className="competition-banner">
							<h3>🎭 Cosplay Challenge</h3>
							<p>Dress up and celebrate the culture</p>
							<button className="enter-btn">Submit Entry</button>
						</div>
					</div>

					<div className="social-campaigns">
						<h3>Social Media Campaigns</h3>
						<div className="hashtag-campaigns">
							<div className="hashtag-card">
								<h4>#SuLongHoi</h4>
								<p>Share your lion dance journey</p>
								<div className="social-stats">
									<span>❤️ 15.2k</span>
									<span>🔥 8.7k</span>
									<span>📱 TikTok</span>
								</div>
							</div>
							<div className="hashtag-card">
								<h4>#DanceToHeritage</h4>
								<p>Preserve traditions through movement</p>
								<div className="social-stats">
									<span>❤️ 12.8k</span>
									<span>🔥 6.3k</span>
									<span>📺 YouTube</span>
								</div>
							</div>
						</div>

						<div className="embedded-content">
							<div className="embed-placeholder">📱 Embedded TikTok Content</div>
							<div className="embed-placeholder">📺 YouTube Shorts Feed</div>
						</div>
					</div>
				</div>
			</section>

			{/* 8. Footer */}
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
		</div>
	);
};

export default Home;
