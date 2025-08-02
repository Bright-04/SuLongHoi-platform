import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/sections/PerformanceBoardSection.css";

const PerformanceBoardSection = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sortBy, setSortBy] = useState("rank");
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	// Performance categories
	const performanceCategories = [
		{ id: "all", name: "All", icon: "🏆" },
		{ id: "national", name: "National", icon: "🇻🇳" },
		{ id: "international", name: "International", icon: "🌍" },
		{ id: "regional", name: "Regional", icon: "🏘️" },
		{ id: "youth", name: "Youth", icon: "👶" },
	];

	// Performance data
	const performanceData = [
		{
			id: 1,
			rank: 1,
			teamName: "Golden Dragon Lion Team",
			location: "Ho Chi Minh City",
			category: "national",
			score: 98.5,
			achievements: ["1st Place Lion Dance Festival 2023", "Vietnam Representative at World Lion Dance Championship 2022", "1st Place National Folk Performance Contest 2021"],
			performances: 156,
			yearsActive: 28,
			members: 25,
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			badge: "🥇",
			trend: "up",
		},
		{
			id: 2,
			rank: 2,
			teamName: "Phoenix Lion Team",
			location: "Hanoi",
			category: "national",
			score: 96.8,
			achievements: ["2nd Place Lion Dance Festival 2023", "1st Place National Folk Performance Contest 2021", "3rd Place World Lion Dance Championship 2022"],
			performances: 142,
			yearsActive: 23,
			members: 18,
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			badge: "🥈",
			trend: "up",
		},
		{
			id: 3,
			rank: 3,
			teamName: "Heavenly Dragon Lion Team",
			location: "Da Nang",
			category: "national",
			score: 95.2,
			achievements: ["3rd Place Lion Dance Festival 2023", "1st Place Central Region Cultural Festival 2022", "2nd Place National Folk Performance Contest 2021"],
			performances: 128,
			yearsActive: 15,
			members: 22,
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			badge: "🥉",
			trend: "stable",
		},
		{
			id: 4,
			rank: 4,
			teamName: "Lotus Lion Team",
			location: "Can Tho",
			category: "regional",
			score: 93.7,
			achievements: ["1st Place Mekong Delta Cultural Festival 2023", "2nd Place Lion Dance Festival 2023", "1st Place Southern Region Folk Performance 2022"],
			performances: 98,
			yearsActive: 12,
			members: 20,
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			badge: "🏅",
			trend: "up",
		},
		{
			id: 5,
			rank: 5,
			teamName: "Guardian Lion Team",
			location: "Hai Phong",
			category: "regional",
			score: 92.1,
			achievements: ["1st Place Northern Region Cultural Festival 2023", "3rd Place Lion Dance Festival 2023", "2nd Place Northern Region Folk Performance 2022"],
			performances: 87,
			yearsActive: 18,
			members: 16,
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			badge: "🏅",
			trend: "down",
		},
		{
			id: 6,
			rank: 6,
			teamName: "Young Lions Team",
			location: "Ho Chi Minh City",
			category: "youth",
			score: 90.5,
			achievements: ["1st Place Youth Lion Dance Festival 2023", "2nd Place Lion Dance Festival 2023 (Youth Category)", "1st Place Youth Folk Performance Contest 2022"],
			performances: 65,
			yearsActive: 8,
			members: 12,
			image: "/src/assets/images/illustrations/mockup(8).JPG",
			badge: "👶",
			trend: "up",
		},
		{
			id: 7,
			rank: 7,
			teamName: "Hung Vuong Lion Team",
			location: "Hue",
			category: "regional",
			score: 89.3,
			achievements: ["2nd Place Central Region Cultural Festival 2023", "3rd Place Lion Dance Festival 2023", "1st Place Thua Thien Hue Folk Performance 2022"],
			performances: 76,
			yearsActive: 14,
			members: 19,
			image: "/src/assets/images/illustrations/mockup(9).jpg",
			badge: "🏅",
			trend: "stable",
		},
		{
			id: 8,
			rank: 8,
			teamName: "Vietnam Lion Team",
			location: "Hanoi",
			category: "international",
			score: 88.7,
			achievements: ["Vietnam Representative at World Lion Dance Championship 2023", "2nd Place Asian Lion Dance Championship 2022", "1st Place Southeast Asian Lion Dance Festival 2021"],
			performances: 45,
			yearsActive: 20,
			members: 30,
			image: "/src/assets/images/illustrations/collage1.png",
			badge: "🌍",
			trend: "up",
		},
	];

	// Filter and sort data
	const filteredData = selectedCategory === "all" ? performanceData : performanceData.filter((team) => team.category === selectedCategory);

	const sortedData = [...filteredData].sort((a, b) => {
		switch (sortBy) {
			case "rank":
				return a.rank - b.rank;
			case "score":
				return b.score - a.score;
			case "performances":
				return b.performances - a.performances;
			case "yearsActive":
				return b.yearsActive - a.yearsActive;
			default:
				return a.rank - b.rank;
		}
	});

	const getTrendIcon = (trend) => {
		switch (trend) {
			case "up":
				return "📈";
			case "down":
				return "📉";
			case "stable":
				return "➡️";
			default:
				return "➡️";
		}
	};

	return (
		<section ref={sectionRef} className="performance-board-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
					<h2 className="section-title">
						<span className="title-text">Performance Leaderboard</span>
					</h2>
					<p className="section-subtitle">Top Lion Dance Teams in Vietnam</p>
					<div className="section-description">
						<p>Discover the leading lion dance teams with impressive achievements, from national awards to international success.</p>
					</div>
				</motion.div>

				{/* Filters and Controls */}
				<motion.div className="board-controls" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
					{/* Category Filter */}
					<div className="category-filter">
						{performanceCategories.map((category) => (
							<button key={category.id} className={`category-btn ${selectedCategory === category.id ? "active" : ""}`} onClick={() => setSelectedCategory(category.id)}>
								<span className="category-icon">{category.icon}</span>
								<span className="category-name">{category.name}</span>
							</button>
						))}
					</div>

					{/* Sort Options */}
					<div className="sort-controls">
						<label htmlFor="sort-select">Sort by:</label>
						<select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
							<option value="rank">Rank</option>
							<option value="score">Score</option>
							<option value="performances">Performances</option>
							<option value="yearsActive">Years of Experience</option>
						</select>
					</div>
				</motion.div>

				{/* Performance Board */}
				<motion.div className="performance-board" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
					{/* Board Header */}
					<div className="board-header">
						<div className="header-rank">Rank</div>
						<div className="header-team">Team</div>
						<div className="header-score">Score</div>
						<div className="header-stats">Statistics</div>
						<div className="header-achievements">Achievements</div>
						<div className="header-trend">Trend</div>
					</div>

					{/* Board Rows */}
					<div className="board-rows">
						{sortedData.map((team, index) => (
							<motion.div
								key={team.id}
								className="board-row"
								initial={{ opacity: 0, x: -50 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.1 * index }}
							>
								{/* Rank */}
								<div className="row-rank">
									<span className="rank-number">{team.rank}</span>
									<span className="rank-badge">{team.badge}</span>
								</div>

								{/* Team Info */}
								<div className="row-team">
									<div className="team-avatar">
										<img
											src={team.image}
											alt={team.teamName}
											onError={(e) => {
												e.target.src = "/src/assets/images/illustrations/collage2.png";
											}}
										/>
									</div>
									<div className="team-info">
										<h4 className="team-name">{team.teamName}</h4>
										<p className="team-location">📍 {team.location}</p>
									</div>
								</div>

								{/* Score */}
								<div className="row-score">
									<div className="score-display">
										<span className="score-number">{team.score}</span>
										<div className="score-bar">
											<div className="score-fill" style={{ width: `${(team.score / 100) * 100}%` }} />
										</div>
									</div>
								</div>

								{/* Stats */}
								<div className="row-stats">
									<div className="stats-grid">
										<div className="stat-item">
											<span className="stat-label">Performances</span>
											<span className="stat-value">{team.performances}</span>
										</div>
										<div className="stat-item">
											<span className="stat-label">Experience</span>
											<span className="stat-value">{team.yearsActive} years</span>
										</div>
										<div className="stat-item">
											<span className="stat-label">Members</span>
											<span className="stat-value">{team.members}</span>
										</div>
									</div>
								</div>

								{/* Achievements */}
								<div className="row-achievements">
									<div className="achievements-list">
										{team.achievements.slice(0, 2).map((achievement, idx) => (
											<div key={idx} className="achievement-item">
												<span className="achievement-icon">🏆</span>
												<span className="achievement-text">{achievement}</span>
											</div>
										))}
										{team.achievements.length > 2 && <div className="achievement-more">+{team.achievements.length - 2} more achievements</div>}
									</div>
								</div>

								{/* Trend */}
								<div className="row-trend">
									<span className="trend-icon">{getTrendIcon(team.trend)}</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Board Summary - Integrated into main board */}
				<motion.div className="board-summary-integrated" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
					<div className="summary-stats">
						<div className="summary-item">
							<span className="summary-number">{performanceData.length}</span>
							<span className="summary-label">Outstanding Teams</span>
						</div>
						<div className="summary-item">
							<span className="summary-number">{Math.round((performanceData.reduce((acc, team) => acc + team.score, 0) / performanceData.length) * 10) / 10}</span>
							<span className="summary-label">Average Score</span>
						</div>
						<div className="summary-item">
							<span className="summary-number">{performanceData.reduce((acc, team) => acc + team.performances, 0)}</span>
							<span className="summary-label">Total Performances</span>
						</div>
					</div>

					{/* Call to Action */}
					<div className="board-cta">
						<button className="cta-button primary">
							<span>📊</span>
							View Detailed Report
						</button>
						<button className="cta-button secondary">
							<span>🏆</span>
							Join Competition
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PerformanceBoardSection;
