import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KnowledgePage from "./pages/KnowledgePage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<Router>
			<div className="website-container">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/knowledge" element={<KnowledgePage />} />
					<Route path="/knowledge/article/:id" element={<ArticlePage />} />
					<Route path="/knowledge/search" element={<KnowledgePage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
