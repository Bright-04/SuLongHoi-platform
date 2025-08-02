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
			period: "Thế kỷ 17-18",
			title: "Khởi nguồn văn hóa",
			description: "Nghệ thuật múa lân sư được du nhập vào Việt Nam từ Trung Quốc, chủ yếu thông qua các cộng đồng người Hoa định cư tại các thành phố lớn.",
			events: ["Du nhập từ Trung Quốc", "Phát triển trong cộng đồng người Hoa", "Hình thành các đội lân đầu tiên"],
			image: "/src/assets/images/illustrations/collage1.png",
			icon: "🏛️",
			location: "Các thành phố lớn",
		},
		{
			id: 2,
			period: "Thế kỷ 19",
			title: "Phát triển truyền thống",
			description: "Nghệ thuật múa lân sư bắt đầu được Việt hóa và phát triển thành một phần không thể thiếu của văn hóa dân gian Việt Nam.",
			events: ["Việt hóa nghệ thuật múa lân", "Phát triển các kỹ thuật riêng", "Trở thành văn hóa dân gian"],
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			icon: "🎭",
			location: "Toàn quốc",
		},
		{
			id: 3,
			period: "1950-1975",
			title: "Thời kỳ khó khăn",
			description: "Trong thời kỳ chiến tranh, nghệ thuật múa lân sư gặp nhiều khó khăn nhưng vẫn được duy trì bởi các nghệ nhân tâm huyết.",
			events: ["Chiến tranh ảnh hưởng", "Nghệ nhân duy trì truyền thống", "Hoạt động hạn chế"],
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			icon: "⚔️",
			location: "Các vùng miền",
		},
		{
			id: 4,
			period: "1975-1990",
			title: "Khôi phục và phát triển",
			description: "Sau khi đất nước thống nhất, nghệ thuật múa lân sư được khôi phục và phát triển mạnh mẽ, trở thành một hoạt động văn hóa quan trọng.",
			events: ["Khôi phục sau chiến tranh", "Thành lập các đội lân mới", "Phát triển kỹ thuật biểu diễn"],
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			icon: "🕊️",
			location: "Cả nước",
		},
		{
			id: 5,
			period: "1990-2010",
			title: "Hiện đại hóa",
			description: "Nghệ thuật múa lân sư bước vào thời kỳ hiện đại hóa với sự kết hợp giữa truyền thống và hiện đại, tạo ra những màn biểu diễn ấn tượng.",
			events: ["Hiện đại hóa kỹ thuật", "Kết hợp âm nhạc hiện đại", "Phát triển trang phục mới"],
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			icon: "🚀",
			location: "Thành phố lớn",
		},
		{
			id: 6,
			period: "2010-Hiện tại",
			title: "Thời kỳ hoàng kim",
			description: "Nghệ thuật múa lân sư đạt đến đỉnh cao với sự phát triển mạnh mẽ, nhiều đội lân chuyên nghiệp và các cuộc thi quốc tế.",
			events: ["Phát triển chuyên nghiệp", "Tham gia thi đấu quốc tế", "Bảo tồn và phát huy văn hóa"],
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			icon: "👑",
			location: "Quốc tế",
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
						<span className="title-text">Lịch Sử Phát Triển</span>
					</h2>
					<p className="section-subtitle">Hành trình phát triển của nghệ thuật múa lân sư tại Việt Nam</p>
					<div className="section-description">
						<p>Khám phá lịch sử hàng trăm năm của nghệ thuật múa lân sư, từ những ngày đầu du nhập đến sự phát triển rực rỡ như ngày nay.</p>
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
								<h4 className="events-title">📅 Sự kiện chính</h4>
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
								<h4 className="impact-title">🎯 Tác động lịch sử</h4>
								<div className="impact-content">
									<p>Thời kỳ này đã đặt nền móng cho sự phát triển của nghệ thuật múa lân sư hiện đại và góp phần bảo tồn văn hóa truyền thống Việt Nam.</p>
								</div>
							</div>

							{/* Call to Action */}
							<div className="timeline-cta">
								<button className="cta-button primary">
									<span>📚</span>
									Tìm hiểu thêm
								</button>
								<button className="cta-button secondary">
									<span>🎬</span>
									Xem video lịch sử
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
