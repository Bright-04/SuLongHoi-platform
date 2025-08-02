import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/sections/StorytellingSection.css";

const StorytellingSection = () => {
	const [activeStory, setActiveStory] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	// Sample lion dance team stories - translated to English
	const teamStories = [
		{
			id: 1,
			name: "Golden Dragon Lion Dance Team",
			location: "Ho Chi Minh City",
			yearsActive: "1995 - Present",
			members: 25,
			achievements: ["1st Place - Lion Dance Festival 2023", "Represented Vietnam at World Lion Dance Championship 2022"],
			story: "From a group of young people passionate about traditional culture, the Golden Dragon Lion Dance Team has developed into one of Vietnam's leading lion dance teams. With nearly 30 years of activity, the team has trained hundreds of generations of performers and preserved traditional performance techniques.",
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			video: "https://example.com/team1-video.mp4",
			costumes: ["Traditional Golden Lion", "Feng Shui Red Lion", "Ocean Blue Lion"],
			performances: ["Wealth Seeking Dance", "Blessing Dance", "Grand Opening Dance"],
		},
		{
			id: 2,
			name: "Phoenix Lion Dance Team",
			location: "Hanoi",
			yearsActive: "2000 - Present",
			members: 18,
			achievements: ["2nd Place - Lion Dance Festival 2023", "1st Place - Mass Art Performance 2021"],
			story: "The Phoenix Lion Dance Team was established with the goal of preserving and developing Northern lion dance art. The team is famous for unique performances that combine tradition and modernity.",
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			video: "https://example.com/team2-video.mp4",
			costumes: ["Traditional Red Lion", "Prosperous Golden Lion", "Noble Blue Lion"],
			performances: ["Peace Seeking Dance", "Blessing Dance", "Spring Opening Dance"],
		},
		{
			id: 3,
			name: "Heavenly Dragon Lion Dance Team",
			location: "Da Nang",
			yearsActive: "2008 - Present",
			members: 22,
			achievements: ["3rd Place - Lion Dance Festival 2023", "1st Place - Central Cultural Festival 2022"],
			story: "The Heavenly Dragon Lion Dance Team is the pride of the Central region. With creativity in combining traditional and modern music, the team has created unique performances that attract large audiences.",
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			video: "https://example.com/team3-video.mp4",
			costumes: ["Ocean Blue Lion", "Fiery Red Lion", "Golden Metallic Lion"],
			performances: ["Rain Seeking Dance", "Wind Seeking Dance", "Festival Opening Dance"],
		},
	];

	const currentStory = teamStories[activeStory];

	const nextStory = () => {
		setActiveStory((prev) => (prev + 1) % teamStories.length);
	};

	const prevStory = () => {
		setActiveStory((prev) => (prev - 1 + teamStories.length) % teamStories.length);
	};

	useEffect(() => {
		if (isInView) {
			setIsPlaying(true);
		}
	}, [isInView]);

	return (
		<section id="storytelling" ref={sectionRef} className="storytelling-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
					<h2 className="section-title">
						<span className="title-text">Inspiring Stories</span>
					</h2>
					<p className="section-subtitle">Discover inspiring stories from Vietnam's leading lion dance teams</p>
				</motion.div>

				{/* Main Content */}
				<motion.div className="story-content" key={activeStory} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
					<div className="story-layout">
						{/* Left Column - Image and Stats */}
						<div className="story-left">
							<div className="story-image-container">
								<img
									src={currentStory.image}
									alt={currentStory.name}
									className="story-image"
									onError={(e) => {
										e.target.src = "/src/assets/images/illustrations/collage2.png";
									}}
								/>
								<div className="image-overlay">
									<button className="play-button">
										<span>▶</span>
									</button>
								</div>
							</div>

							<div className="team-stats">
								<div className="stat-item">
									<span className="stat-number">{currentStory.members}</span>
									<span className="stat-label">Members</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">
										{currentStory.yearsActive.split(" - ")[1] === "Present"
											? new Date().getFullYear() - parseInt(currentStory.yearsActive.split(" - ")[0])
											: currentStory.yearsActive.split(" - ")[1] - parseInt(currentStory.yearsActive.split(" - ")[0])}
									</span>
									<span className="stat-label">Years</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">{currentStory.achievements.length}</span>
									<span className="stat-label">Awards</span>
								</div>
							</div>
						</div>

						{/* Right Column - Content */}
						<div className="story-right">
							{/* Team Header */}
							<div className="team-header">
								<h3 className="team-name">{currentStory.name}</h3>
								<div className="team-meta">
									<div className="team-location">
										<span className="location-icon">📍</span>
										{currentStory.location}
									</div>
									<div className="team-years">
										<span className="years-icon">📅</span>
										{currentStory.yearsActive}
									</div>
								</div>
							</div>

							{/* Team Story */}
							<div className="team-story">
								<p>{currentStory.story}</p>
							</div>

							{/* Achievements */}
							<div className="achievements-section">
								<h4 className="achievements-title">🏆 Notable Achievements</h4>
								<div className="achievements-list">
									{currentStory.achievements.map((achievement, index) => (
										<div key={index} className="achievement-item">
											<span className="achievement-icon">🏅</span>
											<span className="achievement-text">{achievement}</span>
										</div>
									))}
								</div>
							</div>

							{/* Specialties */}
							<div className="specialties-section">
								<div className="specialty-group">
									<h4 className="specialty-title">🎭 Costumes</h4>
									<div className="specialty-tags">
										{currentStory.costumes.map((costume, index) => (
											<span key={index} className="specialty-tag">
												{costume}
											</span>
										))}
									</div>
								</div>
								<div className="specialty-group">
									<h4 className="specialty-title">💃 Performances</h4>
									<div className="specialty-tags">
										{currentStory.performances.map((performance, index) => (
											<span key={index} className="specialty-tag">
												{performance}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Call to Action */}
							<div className="story-actions">
								<button className="action-button primary">
									<span>📖</span>
									View Details
								</button>
								<button className="action-button secondary">
									<span>📞</span>
									Contact Team
								</button>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Navigation */}
				<motion.div className="story-navigation" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
					<div className="nav-controls">
						<button className="nav-arrow prev" onClick={prevStory}>
							<span>‹</span>
						</button>
						<div className="nav-dots">
							{teamStories.map((_, index) => (
								<button key={index} className={`nav-dot ${index === activeStory ? "active" : ""}`} onClick={() => setActiveStory(index)} />
							))}
						</div>
						<button className="nav-arrow next" onClick={nextStory}>
							<span>›</span>
						</button>
					</div>
					{/* Temporarily hidden story progress
					<div className="story-progress">
						<div className="progress-bar">
							<div className="progress-fill" style={{ width: `${((activeStory + 1) / teamStories.length) * 100}%` }} />
						</div>
						<span className="progress-text">
							{activeStory + 1} / {teamStories.length}
						</span>
					</div>
					*/}
				</motion.div>
			</div>
		</section>
	);
};

export default StorytellingSection;
