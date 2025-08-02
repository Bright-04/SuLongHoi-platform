import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/sections/TimelineHistorySection.css";

const TimelineHistorySection = () => {
	const [activePeriod, setActivePeriod] = useState(0);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	// Timeline data
	const timelineData = [
		{
			id: 1,
			period: "17th-18th Century",
			title: "Cultural Origins",
			description: "Lion dance art was introduced to Vietnam from China, primarily through Chinese communities settling in major cities.",
			events: ["Introduction from China", "Development in Chinese communities", "Formation of first lion dance teams"],
			image: "/src/assets/images/illustrations/collage1.png",
			icon: "🏛️",
			location: "Major cities",
		},
		{
			id: 2,
			period: "19th Century",
			title: "Traditional Development",
			description: "Lion dance art began to be Vietnamized and developed into an integral part of Vietnamese folk culture.",
			events: ["Vietnamization of lion dance art", "Development of unique techniques", "Becoming folk culture"],
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			icon: "🎭",
			location: "Nationwide",
		},
		{
			id: 3,
			period: "1950-1975",
			title: "Challenging Period",
			description: "During wartime, lion dance art faced many difficulties but was maintained by dedicated artists.",
			events: ["War impact", "Artists preserving tradition", "Limited activities"],
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			icon: "⚔️",
			location: "Various regions",
		},
		{
			id: 4,
			period: "1975-1990",
			title: "Recovery and Development",
			description: "After national unification, lion dance art was restored and developed strongly, becoming an important cultural activity.",
			events: ["Post-war recovery", "Establishment of new teams", "Performance technique development"],
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			icon: "🕊️",
			location: "Countrywide",
		},
		{
			id: 5,
			period: "1990-2010",
			title: "Modernization",
			description: "Lion dance art entered a period of modernization, combining tradition with contemporary elements to create impressive performances.",
			events: ["Technical modernization", "Integration of modern music", "Development of new costumes"],
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			icon: "🚀",
			location: "Major cities",
		},
		{
			id: 6,
			period: "2010-Present",
			title: "Golden Era",
			description: "Lion dance art has reached its peak with strong development, many professional teams and international competitions.",
			events: ["Professional development", "International competition participation", "Cultural preservation and promotion"],
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			icon: "👑",
			location: "International",
		},
	];

	const currentPeriod = timelineData[activePeriod];

	const nextPeriod = () => {
		setActivePeriod((prev) => (prev + 1) % timelineData.length);
	};

	const prevPeriod = () => {
		setActivePeriod((prev) => (prev - 1 + timelineData.length) % timelineData.length);
	};

	return (
		<section ref={sectionRef} className="timeline-history-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
					<h2 className="section-title">
						<span className="title-text">Development History</span>
					</h2>
					<p className="section-subtitle">The journey of lion dance art development in Vietnam</p>
					<div className="section-description">
						<p>Explore the centuries-old history of lion dance art, from its early introduction to its flourishing development today.</p>
					</div>
				</motion.div>

				{/* Timeline Navigation */}
				<motion.div className="timeline-navigation" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="timeline-dots">
						{timelineData.map((period, index) => (
							<button key={period.id} className={`timeline-dot ${index === activePeriod ? "active" : ""}`} onClick={() => setActivePeriod(index)}>
								<span className="dot-icon">{period.icon}</span>
								<span className="dot-period">{period.period}</span>
							</button>
						))}
					</div>
					<div className="timeline-arrows">
						<button className="timeline-arrow prev" onClick={prevPeriod}>
							<span>‹</span>
						</button>
						<button className="timeline-arrow next" onClick={nextPeriod}>
							<span>›</span>
						</button>
					</div>
				</motion.div>

				{/* Timeline Content */}
				<motion.div className="timeline-content" key={activePeriod} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
					<div className="timeline-grid">
						{/* Timeline Media */}
						<div className="timeline-media">
							<div className="media-container">
								<div className="timeline-image">
									<img
										src={currentPeriod.image}
										alt={currentPeriod.title}
										onError={(e) => {
											e.target.src = "/src/assets/images/illustrations/collage2.png";
										}}
									/>
									<div className="image-overlay">
										<div className="period-badge">
											<span className="period-icon">{currentPeriod.icon}</span>
											<span className="period-text">{currentPeriod.period}</span>
										</div>
									</div>
								</div>
								<div className="media-info">
									<div className="location-info">
										<span className="location-icon">📍</span>
										<span className="location-text">{currentPeriod.location}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Timeline Details */}
						<div className="timeline-details">
							<div className="period-header">
								<h3 className="period-title">{currentPeriod.title}</h3>
								<div className="period-meta">
									<span className="period-year">{currentPeriod.period}</span>
									<span className="period-icon-large">{currentPeriod.icon}</span>
								</div>
							</div>

							<div className="period-description">
								<p>{currentPeriod.description}</p>
							</div>

							{/* Key Events */}
							<div className="key-events">
								<h4 className="events-title">📅 Key Events</h4>
								<div className="events-list">
									{currentPeriod.events.map((event, index) => (
										<div key={index} className="event-item">
											<span className="event-icon">•</span>
											<span className="event-text">{event}</span>
										</div>
									))}
								</div>
							</div>

							{/* Historical Impact */}
							<div className="historical-impact">
								<h4 className="impact-title">🎯 Historical Impact</h4>
								<div className="impact-content">
									<p>This period laid the foundation for the development of modern lion dance art and contributed to preserving Vietnamese traditional culture.</p>
								</div>
							</div>

							{/* Call to Action */}
							<div className="timeline-cta">
								<button className="cta-button primary">
									<span>📚</span>
									Learn More
								</button>
								<button className="cta-button secondary">
									<span>🎬</span>
									Watch History Video
								</button>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Timeline Progress */}
				<motion.div className="timeline-progress" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
					<div className="progress-bar">
						<div className="progress-fill" style={{ width: `${((activePeriod + 1) / timelineData.length) * 100}%` }} />
					</div>
					<span className="progress-text">
						{activePeriod + 1} / {timelineData.length}
					</span>
				</motion.div>
			</div>
		</section>
	);
};

export default TimelineHistorySection;
