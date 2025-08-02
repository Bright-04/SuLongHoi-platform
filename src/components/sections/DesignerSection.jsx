import React from "react";
import { Link } from "react-router-dom";

const DesignerSection = () => {
	return (
		<section id="designer" className="designer-hero">
			<div className="designer-hero-background">
				<div className="designer-hero-overlay"></div>
			</div>
			
			<div className="designer-hero-container">
				<div className="designer-hero-content">
					{/* Hero Header */}
					<div className="designer-hero-header">
						<h1 className="designer-hero-title">
							<span className="designer-hero-icon">🎨</span>
							Digital Lion Head Design Tool
						</h1>
						<p className="designer-hero-subtitle">
							Experience the future of lion head design with our cutting-edge 3D tool. 
							Create stunning digital lion heads with real-time customization.
						</p>
					</div>

					{/* Hero Features */}
					<div className="designer-hero-features">
						<div className="designer-feature-card">
							<span className="designer-feature-icon">🎨</span>
							<h3>Customize Everything</h3>
							<p>Colors, textures, and patterns</p>
						</div>
						<div className="designer-feature-card">
							<span className="designer-feature-icon">🔄</span>
							<h3>Real-time Preview</h3>
							<p>Smooth 3D controls</p>
						</div>
						<div className="designer-feature-card">
							<span className="designer-feature-icon">💾</span>
							<h3>Export & Share</h3>
							<p>Save and share designs</p>
						</div>
						<div className="designer-feature-card">
							<span className="designer-feature-icon">📱</span>
							<h3>All Devices</h3>
							<p>Works everywhere</p>
						</div>
					</div>

					{/* Hero Actions */}
					<div className="designer-hero-actions">
						<Link to="/design" className="designer-hero-btn primary">
							🎨 Start Designing Now
						</Link>
						<button className="designer-hero-btn secondary">
							📖 Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesignerSection;
