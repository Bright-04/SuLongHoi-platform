import React from "react";

const LearnSection = () => {
	return (
		<section id="learn" className="learn-section">
			<div className="container">
				<h2 className="section-title">Sư Long Hội Academy</h2>

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
	);
};

export default LearnSection;
