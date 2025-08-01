import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "../components/common";

const KnowledgePage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedDifficulty, setSelectedDifficulty] = useState("all");
	const [sortBy, setSortBy] = useState("newest");
	const [viewMode, setViewMode] = useState("grid"); // grid or list
	const [filteredItems, setFilteredItems] = useState([]);
	const navigate = useNavigate();

	const categories = [
		{ id: "all", name: "All Topics", icon: "📚", count: 125 },
		{ id: "history", name: "History & Origins", icon: "🏮", count: 25 },
		{ id: "techniques", name: "Techniques & Forms", icon: "🎭", count: 40 },
		{ id: "music", name: "Music & Rhythms", icon: "🥁", count: 20 },
		{ id: "culture", name: "Cultural Context", icon: "🗺️", count: 30 },
		{ id: "costumes", name: "Costumes & Props", icon: "👘", count: 15 },
		{ id: "stories", name: "Stories & Legends", icon: "📖", count: 18 },
	];

	const knowledgeItems = [
		{
			id: 1,
			title: "The Ancient Origins of Lion Dance in Vietnam",
			excerpt: "Discover how Chinese immigrants brought the lion dance tradition to Vietnam in the 12th century, and how it evolved into a uniquely Vietnamese art form...",
			category: "history",
			difficulty: "beginner",
			readTime: "8 min read",
			author: "Dr. Nguyen Van Minh",
			publishDate: "2024-01-15",
			views: 1250,
			likes: 89,
			type: "article",
			featured: true,
			tags: ["origins", "chinese-influence", "cultural-adaptation"],
		},
		{
			id: 2,
			title: "Master the Seven-Star Dragon Formation",
			excerpt: "Learn the intricate choreography and coordination required for the traditional seven-star dragon dance formation, including timing, spacing, and energy flow...",
			category: "techniques",
			difficulty: "advanced",
			readTime: "15 min read",
			author: "Master Li Wei Chen",
			publishDate: "2024-01-20",
			views: 2100,
			likes: 156,
			type: "tutorial",
			featured: true,
			tags: ["formations", "choreography", "coordination"],
		},
		{
			id: 3,
			title: "Traditional Percussion Patterns Guide",
			excerpt: "Master the fundamental drum patterns and cymbal rhythms that accompany lion and dragon dances. Includes audio examples and practice exercises...",
			category: "music",
			difficulty: "intermediate",
			readTime: "12 min read",
			author: "Maestro Tran Duc Hai",
			publishDate: "2024-01-18",
			views: 950,
			likes: 67,
			type: "guide",
			featured: false,
			tags: ["percussion", "rhythms", "timing"],
		},
		{
			id: 4,
			title: "Regional Variations: North vs South Vietnamese Styles",
			excerpt: "Explore the distinct differences between Northern and Southern Vietnamese lion dance styles, from costume design to movement patterns and cultural significance...",
			category: "culture",
			difficulty: "intermediate",
			readTime: "10 min read",
			author: "Prof. Le Thi Hong",
			publishDate: "2024-01-12",
			views: 1800,
			likes: 124,
			type: "article",
			featured: true,
			tags: ["regional-styles", "cultural-differences", "traditions"],
		},
		{
			id: 5,
			title: "Crafting Traditional Lion Head Costumes",
			excerpt: "Step-by-step guide to creating authentic lion head costumes using traditional materials and techniques passed down through generations...",
			category: "costumes",
			difficulty: "advanced",
			readTime: "25 min read",
			author: "Artisan Pham Van Duc",
			publishDate: "2024-01-10",
			views: 750,
			likes: 45,
			type: "tutorial",
			featured: false,
			tags: ["craftsmanship", "traditional-materials", "costume-making"],
		},
		{
			id: 6,
			title: "The Legend of the Nian Monster",
			excerpt: "Delve into the ancient Chinese legend that gave birth to the lion dance tradition, and how this mythology shaped the performance art we know today...",
			category: "stories",
			difficulty: "beginner",
			readTime: "6 min read",
			author: "Storyteller Cao Minh Tam",
			publishDate: "2024-01-08",
			views: 1650,
			likes: 203,
			type: "story",
			featured: false,
			tags: ["mythology", "legends", "cultural-stories"],
		},
	];

	useEffect(() => {
		let filtered = knowledgeItems;

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(item) =>
					item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
					item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
			);
		}

		// Filter by category
		if (selectedCategory !== "all") {
			filtered = filtered.filter((item) => item.category === selectedCategory);
		}

		// Filter by difficulty
		if (selectedDifficulty !== "all") {
			filtered = filtered.filter((item) => item.difficulty === selectedDifficulty);
		}

		// Sort items
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "newest":
					return new Date(b.publishDate) - new Date(a.publishDate);
				case "oldest":
					return new Date(a.publishDate) - new Date(b.publishDate);
				case "popular":
					return b.views - a.views;
				case "title":
					return a.title.localeCompare(b.title);
				default:
					return 0;
			}
		});

		setFilteredItems(filtered);
	}, [searchTerm, selectedCategory, selectedDifficulty, sortBy]);

	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
			case "beginner":
				return "#16a34a";
			case "intermediate":
				return "#d97706";
			case "advanced":
				return "#dc2626";
			default:
				return "#6b7280";
		}
	};

	const getTypeIcon = (type) => {
		switch (type) {
			case "article":
				return "📄";
			case "tutorial":
				return "🎯";
			case "guide":
				return "📋";
			case "story":
				return "📖";
			case "video":
				return "🎥";
			default:
				return "📚";
		}
	};

	return (
		<div className="knowledge-page">
			{/* Hero Header */}
			<section className="knowledge-hero">
				<div className="container">
					<div className="hero-content">
						<h1>Knowledge Library</h1>
						<p>Explore the rich heritage and techniques of Vietnamese traditional performing arts</p>
						<div className="hero-search">
							<input type="text" placeholder="Search articles, tutorials, guides..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="hero-search-input" />
							<Button variant="primary" className="search-btn">
								🔍 Search
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="knowledge-main">
				<div className="container">
					<div className="knowledge-layout">
						{/* Sidebar */}
						<aside className="knowledge-sidebar">
							{/* Categories */}
							<div className="filter-section">
								<h3>Categories</h3>
								<div className="category-list">
									{categories.map((category) => (
										<button key={category.id} className={`category-item ${selectedCategory === category.id ? "active" : ""}`} onClick={() => setSelectedCategory(category.id)}>
											<span className="category-icon">{category.icon}</span>
											<span className="category-name">{category.name}</span>
											<span className="category-count">{category.count}</span>
										</button>
									))}
								</div>
							</div>

							{/* Difficulty Filter */}
							<div className="filter-section">
								<h3>Difficulty Level</h3>
								<div className="difficulty-filters">
									{["all", "beginner", "intermediate", "advanced"].map((level) => (
										<button
											key={level}
											className={`difficulty-btn ${selectedDifficulty === level ? "active" : ""}`}
											onClick={() => setSelectedDifficulty(level)}
											style={{
												borderColor: selectedDifficulty === level ? getDifficultyColor(level) : "#e5e7eb",
												backgroundColor: selectedDifficulty === level ? getDifficultyColor(level) + "20" : "transparent",
											}}
										>
											{level === "all" ? "All Levels" : level.charAt(0).toUpperCase() + level.slice(1)}
										</button>
									))}
								</div>
							</div>

							{/* Featured Article */}
							<div className="featured-sidebar">
								<h3>Featured This Week</h3>
								<Card className="featured-mini">
									<div className="featured-mini-icon">🏮</div>
									<h4>Master the Ancient Art</h4>
									<p>Complete beginner's guide to lion dance fundamentals</p>
									<Button variant="outline" size="small">
										Read Now
									</Button>
								</Card>
							</div>
						</aside>

						{/* Main Content Area */}
						<main className="knowledge-content">
							{/* Toolbar */}
							<div className="content-toolbar">
								<div className="toolbar-left">
									<h2>
										{selectedCategory === "all" ? "All Articles" : categories.find((c) => c.id === selectedCategory)?.name}
										<span className="result-count">({filteredItems.length} articles)</span>
									</h2>
								</div>
								<div className="toolbar-right">
									<select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
										<option value="newest">Newest First</option>
										<option value="oldest">Oldest First</option>
										<option value="popular">Most Popular</option>
										<option value="title">Alphabetical</option>
									</select>
									<div className="view-toggle">
										<button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
											⊞
										</button>
										<button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}>
											☰
										</button>
									</div>
								</div>
							</div>

							{/* Content Grid/List */}
							<div className={`content-grid ${viewMode}`}>
								{filteredItems.map((item) => (
									<Card key={item.id} className={`knowledge-item ${item.featured ? "featured" : ""}`} hover onClick={() => navigate(`/knowledge/article/${item.id}`)}>
										<div className="item-header">
											<div className="item-meta">
												<span className="item-type">{getTypeIcon(item.type)}</span>
												<span className={`difficulty-badge ${item.difficulty}`}>{item.difficulty}</span>
												{item.featured && <span className="featured-badge">Featured</span>}
											</div>
											<div className="item-stats">
												<span className="views">👁 {item.views}</span>
												<span className="likes">❤ {item.likes}</span>
											</div>
										</div>

										<h3 className="item-title">{item.title}</h3>
										<p className="item-excerpt">{item.excerpt}</p>

										<div className="item-tags">
											{item.tags.slice(0, 3).map((tag) => (
												<span key={tag} className="tag">
													#{tag}
												</span>
											))}
										</div>

										<div className="item-footer">
											<div className="author-info">
												<span className="author">{item.author}</span>
												<span className="date">{new Date(item.publishDate).toLocaleDateString()}</span>
											</div>
											<span className="read-time">{item.readTime}</span>
										</div>
									</Card>
								))}
							</div>

							{/* Load More */}
							{filteredItems.length > 0 && (
								<div className="load-more">
									<Button variant="outline" size="large">
										Load More Articles
									</Button>
								</div>
							)}

							{/* No Results */}
							{filteredItems.length === 0 && (
								<div className="no-results">
									<div className="no-results-icon">🔍</div>
									<h3>No articles found</h3>
									<p>Try adjusting your search criteria or browse different categories</p>
									<Button
										variant="primary"
										onClick={() => {
											setSearchTerm("");
											setSelectedCategory("all");
											setSelectedDifficulty("all");
										}}
									>
										Clear Filters
									</Button>
								</div>
							)}
						</main>
					</div>
				</div>
			</section>
		</div>
	);
};

export default KnowledgePage;
