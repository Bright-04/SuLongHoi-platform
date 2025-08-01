import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/common";

const ArticlePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// Mock article data - in a real app, this would come from an API
	const article = {
		id: parseInt(id),
		title: "The Ancient Origins of Lion Dance in Vietnam",
		content: `
			<h2>Introduction</h2>
			<p>The lion dance tradition in Vietnam has a rich and fascinating history that spans over eight centuries. Originally brought to Vietnam by Chinese immigrants during the Lý Dynasty (1009-1225), this art form has evolved into a uniquely Vietnamese cultural expression that reflects the country's spiritual beliefs, community values, and artistic heritage.</p>
			
			<h2>Historical Origins</h2>
			<p>The lion dance first appeared in Vietnam during the 12th century when Chinese traders and immigrants settled in major port cities like Hội An and Hà Nội. These early settlers brought with them not only their customs and traditions but also their performing arts, including the lion dance which was already well-established in Chinese culture.</p>
			
			<h2>Cultural Adaptation</h2>
			<p>What makes Vietnamese lion dance unique is how it has been adapted to reflect local beliefs and customs. While maintaining the core spiritual purpose of warding off evil spirits and bringing good fortune, Vietnamese practitioners incorporated elements from local folklore, traditional music, and regional artistic styles.</p>
			
			<h2>Regional Variations</h2>
			<p>As the art form spread throughout Vietnam, different regions developed their own distinctive styles:</p>
			<ul>
				<li><strong>Northern Style (Bắc Bộ):</strong> Characterized by more restrained movements and emphasis on traditional forms</li>
				<li><strong>Central Style (Trung Bộ):</strong> Features unique musical accompaniment and costume designs</li>
				<li><strong>Southern Style (Nam Bộ):</strong> Known for more dynamic and acrobatic performances</li>
			</ul>
			
			<h2>Modern Significance</h2>
			<p>Today, lion dance remains an integral part of Vietnamese cultural celebrations, particularly during Tết (Lunar New Year) and other important festivals. The art form continues to evolve while maintaining its traditional roots, serving as a bridge between Vietnam's past and present.</p>
		`,
		author: "Dr. Nguyen Van Minh",
		publishDate: "2024-01-15",
		readTime: "8 min read",
		category: "History & Origins",
		difficulty: "Beginner",
		tags: ["origins", "chinese-influence", "cultural-adaptation", "regional-styles"],
	};

	return (
		<div className="article-page">
			<div className="article-hero">
				<div className="container">
					<Button variant="ghost" onClick={() => navigate("/knowledge")} className="back-btn">
						← Back to Library
					</Button>

					<div className="article-meta">
						<span className="category">{article.category}</span>
						<span className={`difficulty ${article.difficulty.toLowerCase()}`}>{article.difficulty}</span>
					</div>

					<h1>{article.title}</h1>

					<div className="article-info">
						<div className="author-section">
							<div className="author-avatar">👨‍🏫</div>
							<div className="author-details">
								<div className="author-name">{article.author}</div>
								<div className="publish-date">Published {new Date(article.publishDate).toLocaleDateString()}</div>
							</div>
						</div>
						<div className="read-info">
							<span className="read-time">📖 {article.readTime}</span>
						</div>
					</div>
				</div>
			</div>

			<div className="article-content">
				<div className="container">
					<div className="content-layout">
						<article className="main-content">
							<div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

							<div className="article-tags">
								<h4>Tags:</h4>
								<div className="tags-list">
									{article.tags.map((tag) => (
										<span key={tag} className="tag">
											#{tag}
										</span>
									))}
								</div>
							</div>
						</article>

						<aside className="article-sidebar">
							<div className="sidebar-section">
								<h3>Table of Contents</h3>
								<ul className="toc">
									<li>
										<a href="#introduction">Introduction</a>
									</li>
									<li>
										<a href="#historical-origins">Historical Origins</a>
									</li>
									<li>
										<a href="#cultural-adaptation">Cultural Adaptation</a>
									</li>
									<li>
										<a href="#regional-variations">Regional Variations</a>
									</li>
									<li>
										<a href="#modern-significance">Modern Significance</a>
									</li>
								</ul>
							</div>

							<div className="sidebar-section">
								<h3>Related Articles</h3>
								<div className="related-articles">
									<div className="related-item">
										<h4>Dragon Dance Formations</h4>
										<p>Master the intricate choreography...</p>
									</div>
									<div className="related-item">
										<h4>Traditional Rhythms</h4>
										<p>Understand the percussion patterns...</p>
									</div>
								</div>
							</div>

							<div className="sidebar-section">
								<h3>Share this article</h3>
								<div className="share-buttons">
									<button className="share-btn facebook">📘 Facebook</button>
									<button className="share-btn twitter">🐦 Twitter</button>
									<button className="share-btn linkedin">💼 LinkedIn</button>
									<button className="share-btn copy">📋 Copy Link</button>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;
