import React from "react";
import mockup1 from "../../assets/images/illustrations/mockup(1).jpg";
import mockup8 from "../../assets/images/illustrations/mockup(8).JPG";
import mockup9 from "../../assets/images/illustrations/mockup(9).jpg";
import mockup10 from "../../assets/images/illustrations/mockup(10).JPG";
import mockup11 from "../../assets/images/illustrations/mockup(11).JPG";
import collage1 from "../../assets/images/illustrations/collage1.png";

const EventsSection = () => {
	return (
		<section id="events" className="events-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Live Events & Culture Map</h2>
					<p className="section-subtitle">Discover and join cultural events happening around you</p>
				</div>

				<div className="events-grid">
					{/* Events Calendar Column */}
					<div className="events-calendar-wrapper">
						<div className="section-card">
							<div className="card-header">
								<h3>📅 Upcoming Events</h3>
								<span className="event-count">3 events this month</span>
							</div>

							<div className="events-list">
								<div className="event-card">
									<div className="event-visual">
										<img src={mockup1} alt="Lunar New Year Celebration" />
										<div className="event-date-badge">
											<span className="date-day">15</span>
											<span className="date-month">Aug</span>
										</div>
									</div>
									<div className="event-content">
										<h4>Lunar New Year Celebration</h4>
										<p className="event-location">📍 Ho Chi Minh City</p>
										<p className="event-time">🕐 6:00 PM - 10:00 PM</p>
										<div className="event-actions">
											<button className="btn-notify">🔔 Notify</button>
											<button className="btn-interested">❤️ Interested</button>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="event-visual">
										<img src={mockup8} alt="Traditional Festival" />
										<div className="event-date-badge">
											<span className="date-day">22</span>
											<span className="date-month">Aug</span>
										</div>
									</div>
									<div className="event-content">
										<h4>Traditional Festival</h4>
										<p className="event-location">📍 Hanoi</p>
										<p className="event-time">🕐 2:00 PM - 8:00 PM</p>
										<div className="event-actions">
											<button className="btn-notify">🔔 Notify</button>
											<button className="btn-interested">❤️ Interested</button>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="event-visual">
										<img src={mockup9} alt="Cultural Workshop" />
										<div className="event-date-badge">
											<span className="date-day">05</span>
											<span className="date-month">Sep</span>
										</div>
									</div>
									<div className="event-content">
										<h4>Cultural Workshop</h4>
										<p className="event-location">📍 Da Nang</p>
										<p className="event-time">🕐 9:00 AM - 5:00 PM</p>
										<div className="event-actions">
											<button className="btn-notify">🔔 Notify</button>
											<button className="btn-interested">❤️ Interested</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Live Culture Map Column */}
					<div className="culture-map-wrapper">
						<div className="section-card">
							<div className="card-header">
								<h3>🌍 Live Culture Map</h3>
								<div className="live-indicator">
									<span className="live-dot"></span>
									<span>Live Events Active</span>
								</div>
							</div>

							<div className="map-viewport">
								<div className="map-background">
									<img src={collage1} alt="Cultural map background" />
								</div>

								<div className="map-overlay">
									<div className="live-event-marker marker-1">
										<div className="marker-pulse"></div>
										<div className="marker-content">
											<img src={mockup10} alt="Dragon Festival" />
										</div>
									</div>

									<div className="live-event-marker marker-2">
										<div className="marker-pulse"></div>
										<div className="marker-content">
											<img src={mockup11} alt="Art Exhibition" />
										</div>
									</div>
								</div>

								<div className="event-info-cards">
									<div className="info-card">
										<div className="info-image">
											<img src={mockup10} alt="Dragon Festival" />
										</div>
										<div className="info-details">
											<h5>Dragon Festival</h5>
											<p>3:00 PM - 8:00 PM</p>
											<p>📍 District 1, HCMC</p>
											<button className="btn-join">Join Live</button>
										</div>
									</div>

									<div className="info-card">
										<div className="info-image">
											<img src={mockup11} alt="Art Exhibition" />
										</div>
										<div className="info-details">
											<h5>Art Exhibition</h5>
											<p>10:00 AM - 6:00 PM</p>
											<p>📍 District 3, HCMC</p>
											<button className="btn-join">Explore</button>
										</div>
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

export default EventsSection;
