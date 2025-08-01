import React from "react";

const CommunitySection = () => {
	return (
		<section id="community" className="community-section">
			<div className="container">
				<h2 className="section-title">Community & Marketplace</h2>

				<div className="community-tabs">
					<button className="community-tab active">Marketplace</button>
					<button className="community-tab">Stories</button>
					<button className="community-tab">Community Wall</button>
				</div>

				<div className="marketplace">
					<div className="marketplace-categories">
						<button className="category-btn">Lion Heads</button>
						<button className="category-btn">Costumes</button>
						<button className="category-btn">Accessories</button>
						<button className="category-btn">Performance Booking</button>
					</div>

					<div className="marketplace-grid">
						<div className="product-card">
							<div className="product-image">🦁</div>
							<h4>Traditional Red Lion Head</h4>
							<div className="seller-info">
								<span>By Master Artisan Le</span>
								<div className="rating">⭐⭐⭐⭐⭐</div>
							</div>
							<div className="price">$299</div>
						</div>

						<div className="product-card">
							<div className="product-image">👘</div>
							<h4>Silk Lion Costume Set</h4>
							<div className="seller-info">
								<span>By Traditional Crafts Co.</span>
								<div className="rating">⭐⭐⭐⭐⭐</div>
							</div>
							<div className="price">$159</div>
						</div>
					</div>
				</div>

				<div className="community-stories">
					<h3>Kể chuyện – Truyền nhân</h3>
					<div className="stories-gallery">
						<div className="story-card">
							<div className="story-image">📸</div>
							<h4>Behind the Scenes: Master Craftsman</h4>
							<p>Follow the journey of creating a lion head...</p>
							<button className="story-btn">Watch Story</button>
						</div>
						<div className="story-card">
							<div className="story-image">📸</div>
							<h4>Young Performer's Journey</h4>
							<p>A teenager's path to mastering the art...</p>
							<button className="story-btn">Support Artist</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;
