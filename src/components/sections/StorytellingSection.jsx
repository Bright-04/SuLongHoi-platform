import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/sections/StorytellingSection.css";

const StorytellingSection = () => {
	const [activeStory, setActiveStory] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	// Sample lion dance team stories
	const teamStories = [
		{
			id: 1,
			name: "Đội Lân Sư Rồng Vàng",
			location: "Hồ Chí Minh",
			yearsActive: "1995 - Hiện tại",
			members: 25,
			achievements: ["Giải nhất Festival Lân Sư 2023", "Đại diện Việt Nam tại World Lion Dance Championship 2022"],
			story: "Từ một nhóm bạn trẻ đam mê văn hóa truyền thống, Đội Lân Sư Rồng Vàng đã phát triển thành một trong những đội lân sư hàng đầu Việt Nam. Với gần 30 năm hoạt động, đội đã đào tạo hàng trăm thế hệ vũ công và gìn giữ những kỹ thuật biểu diễn cổ truyền.",
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			video: "https://example.com/team1-video.mp4",
			costumes: ["Lân vàng truyền thống", "Lân đỏ phong thủy", "Lân xanh biển"],
			performances: ["Múa lân cầu tài", "Múa lân cầu phúc", "Múa lân khai trương"],
		},
		{
			id: 2,
			name: "Đội Lân Sư Phượng Hoàng",
			location: "Hà Nội",
			yearsActive: "2000 - Hiện tại",
			members: 18,
			achievements: ["Giải nhì Festival Lân Sư 2023", "Giải nhất Hội diễn Văn nghệ Quần chúng 2021"],
			story: "Đội Lân Sư Phượng Hoàng được thành lập với mục tiêu bảo tồn và phát triển nghệ thuật múa lân sư miền Bắc. Đội nổi tiếng với những màn biểu diễn độc đáo kết hợp giữa truyền thống và hiện đại.",
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			video: "https://example.com/team2-video.mp4",
			costumes: ["Lân đỏ truyền thống", "Lân vàng phú quý", "Lân xanh thanh cao"],
			performances: ["Múa lân cầu an", "Múa lân chúc phúc", "Múa lân khai xuân"],
		},
		{
			id: 3,
			name: "Đội Lân Sư Thiên Long",
			location: "Đà Nẵng",
			yearsActive: "2008 - Hiện tại",
			members: 22,
			achievements: ["Giải ba Festival Lân Sư 2023", "Giải nhất Liên hoan Văn hóa Miền Trung 2022"],
			story: "Đội Lân Sư Thiên Long là niềm tự hào của vùng đất miền Trung. Với sự sáng tạo trong việc kết hợp âm nhạc truyền thống và hiện đại, đội đã tạo ra những màn biểu diễn độc đáo thu hút đông đảo khán giả.",
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			video: "https://example.com/team3-video.mp4",
			costumes: ["Lân xanh biển", "Lân đỏ rực lửa", "Lân vàng ánh kim"],
			performances: ["Múa lân cầu mưa", "Múa lân cầu gió", "Múa lân khai hội"],
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
		<section ref={sectionRef} className="storytelling-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
					<h2 className="section-title">
						<span className="title-text">Truyền Cảm Hứng</span>
					</h2>
					<p className="section-subtitle">Khám phá những câu chuyện đầy cảm hứng từ các đội lân sư hàng đầu Việt Nam</p>
					<div className="section-description">
						<p>
							Nơi lưu giữ và chia sẻ những câu chuyện, thành tích và đam mê của các đội lân sư. Mỗi đội đều có một câu chuyện riêng về hành trình bảo tồn và phát triển văn hóa truyền
							thống.
						</p>
					</div>
				</motion.div>

				{/* Story Navigation */}
				<motion.div className="story-navigation" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="nav-dots">
						{teamStories.map((_, index) => (
							<button key={index} className={`nav-dot ${index === activeStory ? "active" : ""}`} onClick={() => setActiveStory(index)} />
						))}
					</div>
					<div className="nav-arrows">
						<button className="nav-arrow prev" onClick={prevStory}>
							<span>‹</span>
						</button>
						<button className="nav-arrow next" onClick={nextStory}>
							<span>›</span>
						</button>
					</div>
				</motion.div>

				{/* Story Content */}
				<motion.div className="story-content" key={activeStory} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
					<div className="story-grid">
						{/* Story Media */}
						<div className="story-media">
							<div className="media-container">
								<div className="story-image">
									<img
										src={currentStory.image}
										alt={currentStory.name}
										onError={(e) => {
											e.target.src = "/src/assets/images/illustrations/collage2.png";
										}}
									/>
									<div className="image-overlay">
										<div className="play-button">
											<span>▶</span>
										</div>
									</div>
								</div>
								<div className="media-info">
									<div className="team-stats">
										<div className="stat">
											<span className="stat-number">{currentStory.members}</span>
											<span className="stat-label">Thành viên</span>
										</div>
										<div className="stat">
											<span className="stat-number">
												{currentStory.yearsActive.split(" - ")[1] === "Hiện tại"
													? new Date().getFullYear() - parseInt(currentStory.yearsActive.split(" - ")[0])
													: currentStory.yearsActive.split(" - ")[1] - parseInt(currentStory.yearsActive.split(" - ")[0])}
											</span>
											<span className="stat-label">Năm kinh nghiệm</span>
										</div>
										<div className="stat">
											<span className="stat-number">{currentStory.achievements.length}</span>
											<span className="stat-label">Giải thưởng</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Story Details */}
						<div className="story-details">
							<div className="team-header">
								<h3 className="team-name">{currentStory.name}</h3>
								<div className="team-location">
									<span className="location-icon">📍</span>
									{currentStory.location}
								</div>
								<div className="team-years">
									<span className="years-icon">📅</span>
									{currentStory.yearsActive}
								</div>
							</div>

							<div className="story-text">
								<p>{currentStory.story}</p>
							</div>

							{/* Achievements */}
							<div className="achievements-section">
								<h4 className="section-subtitle">🏆 Thành tích nổi bật</h4>
								<div className="achievements-list">
									{currentStory.achievements.map((achievement, index) => (
										<div key={index} className="achievement-item">
											<span className="achievement-icon">🏅</span>
											<span>{achievement}</span>
										</div>
									))}
								</div>
							</div>

							{/* Costumes & Performances */}
							<div className="team-specialties">
								<div className="specialty-group">
									<h4 className="section-subtitle">🎭 Trang phục</h4>
									<div className="specialty-tags">
										{currentStory.costumes.map((costume, index) => (
											<span key={index} className="specialty-tag">
												{costume}
											</span>
										))}
									</div>
								</div>
								<div className="specialty-group">
									<h4 className="section-subtitle">💃 Tiết mục</h4>
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
							<div className="story-cta">
								<button className="cta-button primary">
									<span>📖</span>
									Xem chi tiết
								</button>
								<button className="cta-button secondary">
									<span>📞</span>
									Liên hệ đội
								</button>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Story Progress */}
				<motion.div className="story-progress" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
					<div className="progress-bar">
						<div className="progress-fill" style={{ width: `${((activeStory + 1) / teamStories.length) * 100}%` }} />
					</div>
					<span className="progress-text">
						{activeStory + 1} / {teamStories.length}
					</span>
				</motion.div>
			</div>
		</section>
	);
};

export default StorytellingSection;
