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
		{ id: "all", name: "Tất cả", icon: "🖼️" },
		{ id: "performances", name: "Biểu diễn", icon: "🎭" },
		{ id: "costumes", name: "Trang phục", icon: "👘" },
		{ id: "teams", name: "Đội lân", icon: "🦁" },
		{ id: "events", name: "Sự kiện", icon: "🎪" },
	];

	const imageLibrary = [
		{
			id: 1,
			title: "Lân Sư Rồng Vàng biểu diễn",
			category: "performances",
			image: "/src/assets/images/illustrations/mockup(1).jpg",
			description: "Màn biểu diễn ấn tượng của đội Lân Sư Rồng Vàng tại Festival 2023",
			team: "Đội Lân Sư Rồng Vàng",
			year: "2023",
		},
		{
			id: 2,
			title: "Trang phục lân truyền thống",
			category: "costumes",
			image: "/src/assets/images/illustrations/mockup(10).JPG",
			description: "Bộ trang phục lân truyền thống với họa tiết tinh xảo",
			team: "Đội Lân Sư Phượng Hoàng",
			year: "2023",
		},
		{
			id: 3,
			title: "Đội lân thiếu nhi",
			category: "teams",
			image: "/src/assets/images/illustrations/mockup(11).JPG",
			description: "Thế hệ trẻ tiếp nối truyền thống văn hóa",
			team: "Đội Lân Sư Thiên Long",
			year: "2023",
		},
		{
			id: 4,
			title: "Festival Lân Sư 2023",
			category: "events",
			image: "/src/assets/images/illustrations/mockup(12).JPG",
			description: "Không khí sôi động tại Festival Lân Sư quốc tế",
			team: "Nhiều đội tham gia",
			year: "2023",
		},
		{
			id: 5,
			title: "Múa lân cầu tài",
			category: "performances",
			image: "/src/assets/images/illustrations/mockup(13).JPG",
			description: "Tiết mục múa lân cầu tài lộc truyền thống",
			team: "Đội Lân Sư Rồng Vàng",
			year: "2023",
		},
		{
			id: 6,
			title: "Trang phục lân hiện đại",
			category: "costumes",
			image: "/src/assets/images/illustrations/mockup(8).JPG",
			description: "Thiết kế trang phục lân kết hợp truyền thống và hiện đại",
			team: "Đội Lân Sư Phượng Hoàng",
			year: "2023",
		},
		{
			id: 7,
			title: "Tập luyện đội lân",
			category: "teams",
			image: "/src/assets/images/illustrations/mockup(9).jpg",
			description: "Quá trình tập luyện gian khổ của các thành viên",
			team: "Đội Lân Sư Thiên Long",
			year: "2023",
		},
		{
			id: 8,
			title: "Lễ hội mùa xuân",
			category: "events",
			image: "/src/assets/images/illustrations/collage1.png",
			description: "Không khí tưng bừng trong dịp Tết Nguyên Đán",
			team: "Nhiều đội tham gia",
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
		<section ref={sectionRef} className="image-library-section">
			<div className="container">
				{/* Section Header */}
				<motion.div className="section-header" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
					<h2 className="section-title">
						<span className="title-text">Thư Viện Hình Ảnh</span>
					</h2>
					<p className="section-subtitle">Khám phá kho tàng hình ảnh đẹp về nghệ thuật múa lân sư</p>
					<div className="section-description">
						<p>Bộ sưu tập hình ảnh đa dạng từ các buổi biểu diễn, trang phục truyền thống, đến những khoảnh khắc đáng nhớ của các đội lân sư hàng đầu Việt Nam.</p>
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
						Xem thêm hình ảnh
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
