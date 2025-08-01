import React, { useState } from "react";
import { Button, Card, SectionTitle } from "../common";

const KnowledgeSection = () => {
	const [activeTab, setActiveTab] = useState("history");
	const [selectedRegion, setSelectedRegion] = useState("all");

	return (
		<section id="knowledge" className="knowledge-section">
			<div className="container">
				<SectionTitle>Khám phá nghệ thuật Lân - Sư - Rồng</SectionTitle>

				<div className="knowledge-tabs">
					<button className={`tab ${activeTab === "history" ? "active" : ""}`} onClick={() => setActiveTab("history")}>
						Lịch sử
					</button>
					<button className={`tab ${activeTab === "types" ? "active" : ""}`} onClick={() => setActiveTab("types")}>
						Các loại hình
					</button>
					<button className={`tab ${activeTab === "regions" ? "active" : ""}`} onClick={() => setActiveTab("regions")}>
						Theo vùng miền
					</button>
					<button className={`tab ${activeTab === "unesco" ? "active" : ""}`} onClick={() => setActiveTab("unesco")}>
						UNESCO Di sản
					</button>
				</div>

				<div className="knowledge-content">
					<div className="search-filters">
						<input type="text" placeholder="Search traditions, regions, teams..." className="search-bar" />
						<select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="filter-select">
							<option value="all">All Regions</option>
							<option value="north">North Vietnam</option>
							<option value="central">Central Vietnam</option>
							<option value="south">South Vietnam</option>
						</select>
					</div>

					<div className="vietnam-map">
						<div className="map-placeholder">
							🗺️ Interactive Map of Vietnam
							<div className="map-markers">
								<div className="marker north">Northern Style</div>
								<div className="marker central">Central Style</div>
								<div className="marker south">Southern Style</div>
							</div>
						</div>
					</div>

					<div className="knowledge-cards">
						<Card variant="default" hover className="knowledge-card">
							<div className="card-image">🏮</div>
							<h3>Traditional Lion Dance History</h3>
							<p>Discover the ancient origins and cultural significance...</p>
							<Button variant="primary" size="small" className="learn-more-btn">
								Learn more
							</Button>
						</Card>
						<Card variant="default" hover className="knowledge-card">
							<div className="card-image">🥁</div>
							<h3>Musical Accompaniment</h3>
							<p>The rhythms and instruments that bring the dance to life...</p>
							<Button variant="primary" size="small" className="learn-more-btn">
								Learn more
							</Button>
						</Card>
						<Card variant="default" hover className="knowledge-card">
							<div className="card-image">🎭</div>
							<h3>Regional Variations</h3>
							<p>How different regions developed unique styles...</p>
							<Button variant="primary" size="small" className="learn-more-btn">
								Learn more
							</Button>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KnowledgeSection;
