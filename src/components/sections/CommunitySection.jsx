import React, { useState } from "react";

const CommunitySection = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [showAllStories, setShowAllStories] = useState(false);
	const [showAllPosts, setShowAllPosts] = useState(false);

	const marketplaceProducts = [
		{
			id: 1,
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			title: "Traditional Red Lion Head",
			seller: "Master Artisan Le",
			rating: 5,
			price: 299,
			category: "heads",
			featured: true,
		},
		{
			id: 2,
			image: "/src/assets/images/illustrations/mockup(8).JPG",
			title: "Golden Dragon Style Lion Head",
			seller: "Dragon Arts Studio",
			rating: 5,
			price: 449,
			category: "heads",
		},
		{
			id: 3,
			image: "/src/assets/images/illustrations/mockup(9).jpg",
			title: "Silk Lion Costume Set",
			seller: "Traditional Crafts Co.",
			rating: 5,
			price: 159,
			category: "costumes",
		},
		{
			id: 4,
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			title: "Premium Performance Outfit",
			seller: "Heritage Textiles",
			rating: 4,
			price: 229,
			category: "costumes",
		},
		{
			id: 5,
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			title: "Traditional Lion Dance Drums",
			seller: "Rhythm Masters",
			rating: 5,
			price: 189,
			category: "accessories",
		},
		{
			id: 6,
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			title: "Ceremonial Bells Set",
			seller: "Sound of Heritage",
			rating: 4,
			price: 79,
			category: "accessories",
		},
		{
			id: 7,
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			title: "Lion Dance Performance - 2 Hours",
			seller: "Master Chen's Troupe",
			rating: 5,
			price: 650,
			category: "booking",
		},
		{
			id: 8,
			image: "/src/assets/images/illustrations/collage1.png",
			title: "Workshop & Performance Package",
			seller: "Cultural Arts Academy",
			rating: 5,
			price: 850,
			category: "booking",
		},
	];

	const storyWallPosts = [
		{
			id: 1,
			author: "Master Wong",
			avatar: "👨‍🦳",
			time: "2 hours ago",
			content:
				"After 40 years of lion dancing, I'm still amazed by the energy of young performers. Today, I watched a 12-year-old nail the most complex routine on her first try. The future of our tradition is bright! 🦁✨",
			likes: 127,
			comments: 23,
			type: "motivation",
		},
		{
			id: 2,
			author: "Sarah Chen",
			avatar: "👩",
			time: "5 hours ago",
			content:
				"From being afraid of heights to leading my school's lion dance team! Sometimes the biggest transformations happen when we face our fears. Thank you to all my mentors who believed in me 💪",
			likes: 89,
			comments: 15,
			type: "personal-story",
		},
		{
			id: 3,
			author: "Lion Arts Collective",
			avatar: "🏛️",
			time: "1 day ago",
			content:
				"🎉 Congratulations to our student teams for winning 3 gold medals at the National Championships! Their dedication, discipline, and respect for tradition paid off. Proud mentor moment! 🏆",
			likes: 234,
			comments: 41,
			type: "achievement",
		},
		{
			id: 4,
			author: "David Kim",
			avatar: "👨",
			time: "2 days ago",
			content:
				"Every scar tells a story, every bruise teaches a lesson. 6 months into my lion dance journey and I've never felt more connected to my heritage. The physical challenge is nothing compared to the spiritual growth 🙏",
			likes: 156,
			comments: 28,
			type: "journey",
		},
	];

	const stories = [
		{
			id: 1,
			image: "/src/assets/images/illustrations/collage2.png",
			title: "Behind the Scenes: Master Craftsman",
			description: "Follow the journey of creating a lion head from bamboo to finished masterpiece...",
			type: "documentary",
			duration: "12 min",
		},
		{
			id: 2,
			image: "/src/assets/images/illustrations/mockup(1).WEBP",
			title: "Young Performer's Journey",
			description: "A teenager's path to mastering the art and finding their cultural identity...",
			type: "personal-story",
			duration: "8 min",
		},
		{
			id: 3,
			image: "/src/assets/images/illustrations/preview-site.png",
			title: "Championship Dreams",
			description: "Follow three teams as they prepare for the international lion dance competition...",
			type: "competition",
			duration: "15 min",
		},
		{
			id: 4,
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			title: "Wisdom of the Masters",
			description: "Elder masters share their knowledge and the deep philosophy behind lion dance...",
			type: "wisdom",
			duration: "20 min",
		},
	];

	const filteredProducts = activeCategory === "all" ? marketplaceProducts : marketplaceProducts.filter((product) => product.category === activeCategory);
	const displayedStories = showAllStories ? stories : stories.slice(0, 2);
	const displayedPosts = showAllPosts ? storyWallPosts : storyWallPosts.slice(0, 3);

	const renderStars = (rating) => {
		return "⭐".repeat(rating) + "☆".repeat(5 - rating);
	};

	return (
		<section id="community" className="community-section">
			<div className="container">
				<h2 className="section-title">Community & Marketplace</h2>

				<div className="community-grid">
					{/* Marketplace Column */}
					<div className="marketplace-column">
						<div className="marketplace">
							<div className="marketplace-header">
								<h3>Discover Authentic Lion Dance Items</h3>
								<p>Support traditional craftsmen and performers worldwide</p>
							</div>

							<div className="marketplace-categories">
								<button className={`category-btn ${activeCategory === "all" ? "active" : ""}`} onClick={() => setActiveCategory("all")}>
									All Items
								</button>
								<button className={`category-btn ${activeCategory === "heads" ? "active" : ""}`} onClick={() => setActiveCategory("heads")}>
									Lion Heads
								</button>
								<button className={`category-btn ${activeCategory === "costumes" ? "active" : ""}`} onClick={() => setActiveCategory("costumes")}>
									Costumes
								</button>
								<button className={`category-btn ${activeCategory === "accessories" ? "active" : ""}`} onClick={() => setActiveCategory("accessories")}>
									Accessories
								</button>
								<button className={`category-btn ${activeCategory === "booking" ? "active" : ""}`} onClick={() => setActiveCategory("booking")}>
									Performance Booking
								</button>
							</div>

							<div className="marketplace-grid">
								{filteredProducts.slice(0, 4).map((product) => (
									<div key={product.id} className={`product-card ${product.featured ? "featured" : ""}`}>
										{product.featured && <div className="featured-badge">Featured</div>}
										<div className="product-image">
											<img src={product.image} alt={product.title} />
										</div>
										<h4>{product.title}</h4>
										<div className="seller-info">
											<span>By {product.seller}</span>
											<div className="rating">{renderStars(product.rating)}</div>
										</div>
										<div className="price">${product.price}</div>
										<div className="product-actions">
											<button className="btn-primary">View Details</button>
											<button className="btn-secondary">Add to Cart</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Stories Column */}
					<div className="stories-column">
						<div className="community-stories">
							<div className="stories-header">
								<h3>Kể chuyện – Truyền nhân</h3>
								<p>Inspiring stories from our community</p>
							</div>
							<div className="stories-gallery">
								{displayedStories.map((story) => (
									<div key={story.id} className="story-card">
										<div className="story-image">
											<img src={story.image} alt={story.title} />
										</div>
										<div className="story-meta">
											<span className="story-type">{story.type}</span>
											<span className="story-duration">{story.duration}</span>
										</div>
										<h4>{story.title}</h4>
										<p>{story.description}</p>
										<button className="story-btn">Watch Story</button>
									</div>
								))}
							</div>
							{stories.length > 2 && (
								<div className="show-more-container">
									<button className="show-more-btn" onClick={() => setShowAllStories(!showAllStories)}>
										{showAllStories ? "Show Less" : "Show More"}
									</button>
								</div>
							)}
						</div>
					</div>

					{/* Community Wall Column */}
					<div className="community-column">
						<div className="community-wall">
							<div className="wall-header">
								<h3>Community Motivation Wall</h3>
								<p>Share your journey, inspire others</p>
								<button className="post-btn">Share Your Story</button>
							</div>

							<div className="story-wall">
								{displayedPosts.map((post) => (
									<div key={post.id} className={`wall-post ${post.type}`}>
										<div className="post-header">
											<div className="author-info">
												<span className="avatar">{post.avatar}</span>
												<div>
													<span className="author-name">{post.author}</span>
													<span className="post-time">{post.time}</span>
												</div>
											</div>
											<span className={`post-type-badge ${post.type}`}>{post.type.replace("-", " ")}</span>
										</div>
										<div className="post-content">{post.content}</div>
										<div className="post-actions">
											<button className="action-btn like">❤️ {post.likes}</button>
											<button className="action-btn comment">💬 {post.comments}</button>
											<button className="action-btn share">🔗 Share</button>
										</div>
									</div>
								))}
							</div>
							{storyWallPosts.length > 3 && (
								<div className="show-more-container">
									<button className="show-more-btn" onClick={() => setShowAllPosts(!showAllPosts)}>
										{showAllPosts ? "Show Less" : "Show More"}
									</button>
								</div>
							)}

							<div className="motivation-quotes">
								<h4>Daily Inspiration</h4>
								<div className="quote-carousel">
									<div className="quote-card">
										<p>"The lion dance is not just movement, it's the heartbeat of our culture."</p>
										<span>- Master Li Wei</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;
