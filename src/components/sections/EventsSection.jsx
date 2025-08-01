import React from "react";

const EventsSection = () => {
	return (
		<section id="events" className="events-section">
			<div className="container">
				<h2 className="section-title">Live Events & Culture Map</h2>

				<div className="events-interface">
					<div className="events-calendar">
						<h3>📅 Upcoming Events</h3>
						<div className="calendar-view">
							<div className="event-item">
								<div className="event-date">Aug 15</div>
								<div className="event-info">
									<h4>Lunar New Year Celebration</h4>
									<p>Ho Chi Minh City</p>
									<div className="event-actions">
										<button className="notify-btn">🔔 Notify Me</button>
										<button className="interested-btn">❤️ Interested</button>
									</div>
								</div>
							</div>
							<div className="event-item">
								<div className="event-date">Aug 22</div>
								<div className="event-info">
									<h4>Traditional Festival</h4>
									<p>Hanoi</p>
									<div className="event-actions">
										<button className="notify-btn">🔔 Notify Me</button>
										<button className="interested-btn">❤️ Interested</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="live-map">
						<h3>🌍 Live Culture Map</h3>
						<div className="map-container">
							<div className="live-stream-marker">📺 Live Stream Active</div>
							<div className="event-popups">
								<div className="popup">
									<h4>Dragon Festival</h4>
									<p>3:00 PM - 8:00 PM</p>
									<p>📍 District 1, HCMC</p>
									<button>RSVP</button>
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
