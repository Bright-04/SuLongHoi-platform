import React from "react";

const DesignerSection = () => {
	return (
		<section id="designer" className="designer-section">
			<div className="designer-container">
				<h2 className="section-title">3D Lion Head Designer</h2>

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
							<div className="slider-group">
								<label>Face Type</label>
								<input type="range" className="slider" />
							</div>
						</div>
					</div>

					<div className="designer-viewer">
						<div className="model-viewer">
							🦁 3D Lion Head Model
							<div className="viewer-controls">
								<button>Rotate</button>
								<button>Zoom</button>
								<button>Reset</button>
							</div>
						</div>
					</div>

					<div className="designer-actions">
						<h3>Share & Create</h3>
						<button className="action-btn">🎭 Send to a Lion Team</button>
						<button className="action-btn">🧵 Send to Artisan for Quote</button>
						<button className="action-btn">🧑‍🎨 Collaborate with Designer</button>
						<div className="export-options">
							<button className="export-btn">Download</button>
							<button className="export-btn">Share</button>
							<button className="export-btn">Save</button>
						</div>
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
