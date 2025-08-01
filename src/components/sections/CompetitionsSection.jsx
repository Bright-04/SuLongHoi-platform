import React from "react";

const CompetitionsSection = () => {
	return (
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
	);
};

export default CompetitionsSection;
