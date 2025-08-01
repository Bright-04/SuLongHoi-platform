import React from "react";
import "../styles/main.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import KnowledgeSection from "../components/sections/KnowledgeSection";
import DesignerSection from "../components/sections/DesignerSection";
import LearnSection from "../components/sections/LearnSection";
import EventsSection from "../components/sections/EventsSection";
import CommunitySection from "../components/sections/CommunitySection";
import CompetitionsSection from "../components/sections/CompetitionsSection";

const Home = () => {
	return (
		<div className="website-container">
			<Navbar />
			<HeroSection />
			<KnowledgeSection />
			<DesignerSection />
			<LearnSection />
			<EventsSection />
			<CommunitySection />
			<CompetitionsSection />
			<Footer />
		</div>
	);
};

export default Home;
