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
		{ id: "all", name: "Tất cả", icon: "🏆" },
		{ id: "national", name: "Quốc gia", icon: "🇻🇳" },
		{ id: "international", name: "Quốc tế", icon: "🌍" },
		{ id: "regional", name: "Khu vực", icon: "🏘️" },
		{ id: "youth", name: "Thiếu nhi", icon: "👶" },
	];

	// Performance data
	const performanceData = [
		{
			id: 1,
			rank: 1,
			teamName: "Đội Lân Sư Rồng Vàng",
			location: "Hồ Chí Minh",
			category: "national",
			score: 98.5,
			achievements: ["Giải nhất Festival Lân Sư 2023", "Đại diện Việt Nam tại World Lion Dance Championship 2022", "Giải nhất Hội diễn Văn nghệ Quần chúng 2021"],
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
			teamName: "Đội Lân Sư Phượng Hoàng",
			location: "Hà Nội",
			category: "national",
			score: 96.8,
			achievements: ["Giải nhì Festival Lân Sư 2023", "Giải nhất Hội diễn Văn nghệ Quần chúng 2021", "Giải ba World Lion Dance Championship 2022"],
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
			teamName: "Đội Lân Sư Thiên Long",
			location: "Đà Nẵng",
			category: "national",
			score: 95.2,
			achievements: ["Giải ba Festival Lân Sư 2023", "Giải nhất Liên hoan Văn hóa Miền Trung 2022", "Giải nhì Hội diễn Văn nghệ Quần chúng 2021"],
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
			teamName: "Đội Lân Sư Hoa Sen",
			location: "Cần Thơ",
			category: "regional",
			score: 93.7,
			achievements: ["Giải nhất Liên hoan Văn hóa Đồng bằng sông Cửu Long 2023", "Giải nhì Festival Lân Sư 2023", "Giải nhất Hội diễn Văn nghệ Miền Nam 2022"],
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
			teamName: "Đội Lân Sư Bảo Vệ",
			location: "Hải Phòng",
			category: "regional",
			score: 92.1,
			achievements: ["Giải nhất Liên hoan Văn hóa Miền Bắc 2023", "Giải ba Festival Lân Sư 2023", "Giải nhì Hội diễn Văn nghệ Miền Bắc 2022"],
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
			teamName: "Đội Lân Sư Tuổi Thơ",
			location: "Hồ Chí Minh",
			category: "youth",
			score: 90.5,
			achievements: ["Giải nhất Liên hoan Lân Sư Thiếu nhi 2023", "Giải nhì Festival Lân Sư 2023 (Hạng thiếu nhi)", "Giải nhất Hội diễn Văn nghệ Thiếu nhi 2022"],
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
			teamName: "Đội Lân Sư Hùng Vương",
			location: "Huế",
			category: "regional",
			score: 89.3,
			achievements: ["Giải nhì Liên hoan Văn hóa Miền Trung 2023", "Giải ba Festival Lân Sư 2023", "Giải nhất Hội diễn Văn nghệ Thừa Thiên Huế 2022"],
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
			teamName: "Đội Lân Sư Việt Nam",
			location: "Hà Nội",
			category: "international",
			score: 88.7,
			achievements: ["Đại diện Việt Nam tại World Lion Dance Championship 2023", "Giải nhì Asian Lion Dance Championship 2022", "Giải nhất Southeast Asian Lion Dance Festival 2021"],
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
						<span className="title-text">Bảng Xếp Hạng Thành Tích</span>
					</h2>
					<p className="section-subtitle">Top các đội lân sư xuất sắc nhất Việt Nam</p>
					<div className="section-description">
						<p>Khám phá những đội lân sư hàng đầu với thành tích ấn tượng, từ các giải thưởng quốc gia đến thành công quốc tế.</p>
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
						<label htmlFor="sort-select">Sắp xếp theo:</label>
						<select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
							<option value="rank">Thứ hạng</option>
							<option value="score">Điểm số</option>
							<option value="performances">Số buổi biểu diễn</option>
							<option value="yearsActive">Năm kinh nghiệm</option>
						</select>
					</div>
				</motion.div>

				{/* Performance Board */}
				<motion.div className="performance-board" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
					{/* Board Header */}
					<div className="board-header">
						<div className="header-rank">Hạng</div>
						<div className="header-team">Đội lân</div>
						<div className="header-score">Điểm</div>
						<div className="header-stats">Thống kê</div>
						<div className="header-achievements">Thành tích</div>
						<div className="header-trend">Xu hướng</div>
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
											<span className="stat-label">Biểu diễn</span>
											<span className="stat-value">{team.performances}</span>
										</div>
										<div className="stat-item">
											<span className="stat-label">Kinh nghiệm</span>
											<span className="stat-value">{team.yearsActive} năm</span>
										</div>
										<div className="stat-item">
											<span className="stat-label">Thành viên</span>
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
										{team.achievements.length > 2 && <div className="achievement-more">+{team.achievements.length - 2} thành tích khác</div>}
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

				{/* Board Summary */}
				<motion.div className="board-summary" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
					<div className="summary-stats">
						<div className="summary-item">
							<span className="summary-number">{performanceData.length}</span>
							<span className="summary-label">Đội lân xuất sắc</span>
						</div>
						<div className="summary-item">
							<span className="summary-number">{Math.round((performanceData.reduce((acc, team) => acc + team.score, 0) / performanceData.length) * 10) / 10}</span>
							<span className="summary-label">Điểm trung bình</span>
						</div>
						<div className="summary-item">
							<span className="summary-number">{performanceData.reduce((acc, team) => acc + team.performances, 0)}</span>
							<span className="summary-label">Tổng buổi biểu diễn</span>
						</div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div className="board-cta" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
					<button className="cta-button primary">
						<span>📊</span>
						Xem báo cáo chi tiết
					</button>
					<button className="cta-button secondary">
						<span>🏆</span>
						Đăng ký tham gia
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default PerformanceBoardSection;
