import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/sections/ImageLibrarySection.css";

const ImageLibrarySection = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedImage, setSelectedImage] = useState(null);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	// Image categories and data
	const imageCategories = [
		{ id: "all", name: "All", icon: "🖼️" },
		{ id: "performances", name: "Performances", icon: "🎭" },
		{ id: "costumes", name: "Costumes", icon: "👘" },
		{ id: "teams", name: "Teams", icon: "🦁" },
		{ id: "events", name: "Events", icon: "🎪" },
	];

	const imageLibrary = [
		{
			id: 1,
			title: "Golden Dragon Lion Performance",
			category: "performances",
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			description: "Impressive performance by the Golden Dragon Lion team at Festival 2023",
			team: "Golden Dragon Lion Team",
			year: "2023",
		},
		{
			id: 2,
			title: "Traditional Lion Costume",
			category: "costumes",
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			description: "Traditional lion costume with intricate patterns",
			team: "Phoenix Lion Team",
			year: "2023",
		},
		{
			id: 3,
			title: "Youth Lion Team",
			category: "teams",
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			description: "Young generation continuing the cultural tradition",
			team: "Sky Dragon Lion Team",
			year: "2023",
		},
		{
			id: 4,
			title: "Lion Dance Festival 2023",
			category: "events",
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			description: "Vibrant atmosphere at the International Lion Dance Festival",
			team: "Multiple participating teams",
			year: "2023",
		},
		{
			id: 5,
			title: "Fortune Lion Dance",
			category: "performances",
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			description: "Traditional fortune-seeking lion dance performance",
			team: "Golden Dragon Lion Team",
			year: "2023",
		},
		{
			id: 6,
			title: "Modern Lion Costume",
			category: "costumes",
			image: "/src/assets/images/illustrations/mockup(8).JPG",
			description: "Modern lion costume design combining tradition and innovation",
			team: "Phoenix Lion Team",
			year: "2023",
		},
		{
			id: 7,
			title: "Lion Team Training",
			category: "teams",
			image: "/src/assets/images/illustrations/mockup(9).jpg",
			description: "Rigorous training process of team members",
			team: "Sky Dragon Lion Team",
			year: "2023",
		},
		{
			id: 8,
			title: "Spring Festival",
			category: "events",
			image: "/src/assets/images/illustrations/collage1.png",
			description: "Festive atmosphere during Lunar New Year celebrations",
			team: "Multiple participating teams",
			year: "2023",
		},
	];

	const filteredImages = selectedCategory === "all" ? imageLibrary : imageLibrary.filter((img) => img.category === selectedCategory);

	const openLightbox = (image) => {
		setSelectedImage(image);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
		setSelectedImage(null);
	};

	return (
		<section id="image-library" ref={sectionRef} className="image-library-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
					<h2 className="section-title">
						<span className="title-text">Image Library</span>
					</h2>
					<p className="section-subtitle">Discover the beautiful collection of lion dance art</p>
					<div className="section-description">
						<p>A diverse collection of images from performances, traditional costumes, to memorable moments of Vietnam's leading lion dance teams.</p>
					</div>
				</motion.div>

				{/* Category Filter */}
				<motion.div className="category-filter" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
					{imageCategories.map((category) => (
						<button key={category.id} className={`category-btn ${selectedCategory === category.id ? "active" : ""}`} onClick={() => setSelectedCategory(category.id)}>
							<span className="category-icon">{category.icon}</span>
							<span className="category-name">{category.name}</span>
						</button>
					))}
				</motion.div>

				{/* Image Grid */}
				<motion.div className="image-grid" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
					{filteredImages.map((image, index) => (
						<motion.div
							key={image.id}
							className="image-card"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.1 * index }}
							onClick={() => openLightbox(image)}
						>
							<div className="image-container">
								<img
									src={image.image}
									alt={image.title}
									onError={(e) => {
										e.target.src = "/src/assets/images/illustrations/collage2.png";
									}}
								/>
								<div className="image-overlay">
									<div className="overlay-content">
										<h4 className="image-title">{image.title}</h4>
										<p className="image-description">{image.description}</p>
										<div className="image-meta">
											<span className="team-name">{image.team}</span>
											<span className="year">{image.year}</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Load More Button */}
				<motion.div className="load-more-container" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
					<button className="load-more-btn">
						<span>📸</span>
						View More Images
					</button>
				</motion.div>
			</div>

			{/* Lightbox */}
			{isLightboxOpen && selectedImage && (
				<motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={closeLightbox}>
					<div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
						<button className="lightbox-close" onClick={closeLightbox}>
							×
						</button>
						<img
							src={selectedImage.image}
							alt={selectedImage.title}
							onError={(e) => {
								e.target.src = "/src/assets/images/illustrations/collage2.png";
							}}
						/>
						<div className="lightbox-info">
							<h3>{selectedImage.title}</h3>
							<p>{selectedImage.description}</p>
							<div className="lightbox-meta">
								<span className="team">{selectedImage.team}</span>
								<span className="year">{selectedImage.year}</span>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</section>
	);
};

export default ImageLibrarySection;
