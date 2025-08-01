import React from "react";
import { Link } from "react-router-dom";
import "../styles/LionDesigner.css";
import LionDesigner3D from "../components/designer/LionDesigner3D";
import DesignControls from "../components/designer/DesignControls";
import useLionDesignStore from "../store/lionDesignStore";

const LionDesigner = () => {
	const { design } = useLionDesignStore();

	return (
		<div className="lion-designer">
			{/* Header */}
			<header className="designer-header">
				<div className="header-content">
					<Link to="/" className="back-button">
						← Back to Home
					</Link>
					<div className="header-title">
						<h1>Digital Lân Sư Design Tool</h1>
						<p>Create Your Own Lân Sư Head</p>
					</div>
					<div style={{ width: "140px" }}></div> {/* Spacer for centering */}
				</div>
			</header>

			{/* Main Content */}
			<div className="designer-container">
				{/* 3D Viewer */}
				<div className="viewer-section" data-background={design.background}>
					<div className="viewer-container">
						<LionDesigner3D />
					</div>
					<div className="viewer-controls">
						<p>Drag to rotate • Scroll to zoom • Right-click to pan</p>
					</div>
				</div>

				{/* Design Controls */}
				<div className="controls-section">
					<DesignControls />
				</div>
			</div>

			{/* Footer */}
			<footer className="designer-footer">
				<p>© 2024 SuLongHoi Platform - Digital Lân Sư Designer</p>
			</footer>
		</div>
	);
};

export default LionDesigner;
