import React from "react";
import { Button, Card, SectionTitle } from "../common";
import { useNavigate } from "react-router-dom";

const KnowledgePreview = () => {
	const navigate = useNavigate();

	const featuredItems = [
		{
			id: 1,
			category: "History",
			title: "Origins of Lion Dance",
			excerpt: "Explore the ancient roots and cultural significance of traditional lion dance across Vietnam...",
			readTime: "5 min read",
			icon: "🏮",
			difficulty: "Beginner",
		},
		{
			id: 2,
			category: "Techniques",
			title: "Dragon Dance Formations",
			excerpt: "Master the intricate movements and coordination required for breathtaking dragon performances...",
			readTime: "8 min read",
			icon: "🐉",
			difficulty: "Intermediate",
		},
		{
			id: 3,
			category: "Music",
			title: "Traditional Rhythms",
			excerpt: "Understand the percussion patterns and musical accompaniment that drive the dance...",
			readTime: "6 min read",
			icon: "🥁",
			difficulty: "Beginner",
		},
		{
			id: 4,
			category: "Culture",
			title: "Regional Variations",
			excerpt: "Discover how different regions of Vietnam have developed unique styles and traditions...",
			readTime: "10 min read",
			icon: "🗺️",
			difficulty: "Advanced",
		},
	];

	const stats = [
		{ number: "150+", label: "Articles & Guides" },
		{ number: "50+", label: "Video Tutorials" },
		{ number: "25+", label: "Historical Documents" },
		{ number: "100+", label: "Cultural Stories" },
	];

	return (
		<section id="knowledge" className="knowledge-preview">
			<div className="container">
				<div className="preview-header">
					<SectionTitle>Knowledge Library</SectionTitle>
					<p className="preview-subtitle">
						Dive deep into the rich heritage of Vietnamese traditional performing arts. Our comprehensive library contains centuries of wisdom, techniques, and cultural stories.
					</p>
				</div>

				{/* Stats Section */}
				<div className="library-stats">
					{stats.map((stat, index) => (
						<div key={index} className="stat-item">
							<div className="stat-number">{stat.number}</div>
							<div className="stat-label">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Featured Content Grid */}
				<div className="featured-content">
					<div className="section-header">
						<h3>Featured Articles</h3>
						<Button variant="outline" size="small" onClick={() => navigate("/knowledge")}>
							View All →
						</Button>
					</div>

					<div className="featured-grid">
						{featuredItems.map((item) => (
							<Card key={item.id} variant="default" hover className="featured-card">
								<div className="card-header">
									<div className="card-icon">{item.icon}</div>
									<div className="card-meta">
										<span className="category">{item.category}</span>
										<span className={`difficulty ${item.difficulty.toLowerCase()}`}>{item.difficulty}</span>
									</div>
								</div>

								<h4 className="card-title">{item.title}</h4>
								<p className="card-excerpt">{item.excerpt}</p>

								<div className="card-footer">
									<span className="read-time">{item.readTime}</span>
									<Button variant="ghost" size="small" onClick={() => navigate(`/knowledge/article/${item.id}`)}>
										Read More
									</Button>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="library-cta">
					<div className="cta-content">
						<h3>Ready to explore more?</h3>
						<p>Access our full library with hundreds of articles, videos, and interactive content</p>
						<div className="cta-buttons">
							<Button variant="primary" size="large" onClick={() => navigate("/knowledge")}>
								Explore Library
							</Button>
							<Button variant="outline" size="large" onClick={() => navigate("/knowledge/search")}>
								Search Content
							</Button>
						</div>
					</div>
					<div className="cta-visual">
						<div className="floating-cards">
							<div className="mini-card">📚</div>
							<div className="mini-card">🎭</div>
							<div className="mini-card">🏮</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KnowledgePreview;
