import React from "react";
import { Link } from "react-router-dom";

const DesignerSection = () => {
	return (
		<section id="designer" className="designer-section">
			<div className="designer-container">
				<h2 className="section-title">Digital Lion Design Tool</h2>
				<p className="section-subtitle">Create Your Own Lion Head</p>

				<div className="designer-preview">
					<div className="preview-content">
						<div className="preview-text">
							<h3>🎨 Interactive 3D Designer</h3>
							<p>Experience the future of lion head design with our cutting-edge 3D tool. Customize every aspect of your digital lion head in real-time.</p>

							<div className="feature-list">
								<div className="feature-item">
									<span className="feature-icon">🎨</span>
									<span>Customize colors, textures, and patterns</span>
								</div>
								<div className="feature-item">
									<span className="feature-icon">🔄</span>
									<span>Real-time 3D preview with smooth controls</span>
								</div>
								<div className="feature-item">
									<span className="feature-icon">💾</span>
									<span>Export and share your designs</span>
								</div>
								<div className="feature-item">
									<span className="feature-icon">📱</span>
									<span>Works on all devices</span>
								</div>
							</div>
						</div>

						<div className="preview-visual">
							<div className="mock-3d-viewer">
								<div className="mock-lion-head">🦁</div>
								<div className="mock-controls">
									<div className="mock-color-picker">
										<div className="color-dot" style={{ backgroundColor: "#D4AF37" }}></div>
										<div className="color-dot" style={{ backgroundColor: "#8B4513" }}></div>
										<div className="color-dot" style={{ backgroundColor: "#FFD700" }}></div>
									</div>
									<div className="mock-sliders">
										<div className="mock-slider"></div>
										<div className="mock-slider"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="designer-interface designer-interface--under-construction">
					<div className="designer-sidebar">
						<h3>Customize Your Lion</h3>
						<div className="prompt-input">
							<textarea placeholder="Describe your vision..."></textarea>
						</div>
						<div className="sliders">
							<div className="slider-group">
								<label>Color Theme</label>
								<input type="range" className="slider" />
							</div>
							<div className="slider-group">
								<label>Horn Style</label>
								<input type="range" className="slider" />
							</div>
						</div>
					</div>
				</div>

				<div className="designer-actions">
					<h3>Ready to Create?</h3>
					<div className="action-buttons">
						<Link to="/designer" className="action-btn primary">
							🎨 Start Designing
						</Link>
						<button className="action-btn secondary">📖 Learn More</button>
					</div>
				</div>

				<div className="under-construction-overlay">
					<div className="under-construction-message">
						<div className="construction-icon">🚧</div>
						<h3>Under Construction</h3>
						<p>Our team is working hard to bring you an amazing 3D Lion Head Designer experience. Please check back soon!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesignerSection;
