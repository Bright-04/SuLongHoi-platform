import React from "react";
import "../styles/main.css";
import HeroSection from "../components/sections/HeroSection";
import StorytellingSection from "../components/sections/StorytellingSection";
import ImageLibrarySection from "../components/sections/ImageLibrarySection";
import TimelineHistorySection from "../components/sections/TimelineHistorySection";
import PerformanceBoardSection from "../components/sections/PerformanceBoardSection";
import KnowledgePreview from "../components/sections/KnowledgePreview";
import DesignerSection from "../components/sections/DesignerSection";
import LearnSection from "../components/sections/LearnSection";
import EventsSection from "../components/sections/EventsSection";
import CommunitySection from "../components/sections/CommunitySection";
import CompetitionsSection from "../components/sections/CompetitionsSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<StorytellingSection />
			<ImageLibrarySection />
			<TimelineHistorySection />
			<PerformanceBoardSection />
			<KnowledgePreview />
			<DesignerSection />
			<LearnSection />
			<EventsSection />
			<CommunitySection />
			<CompetitionsSection />
		</>
	);
};

export default Home;
