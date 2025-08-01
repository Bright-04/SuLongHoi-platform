import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LionDesigner from "./pages/LionDesigner";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import KnowledgePage from "./pages/KnowledgePage";
import ArticlePage from "./pages/ArticlePage";
import Layout from "./components/layout/Layout";
import { Loading, ProgressBar } from "./components/common";

function App() {
	return (
		<Router>
			<ProgressBar />
			<Suspense fallback={<Loading message="Loading SuLongHoi Platform..." />}>
				<Routes>
					<Route path="/design" element={<LionDesigner />} />
					<Route path="/designer" element={<LionDesigner />} />
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="knowledge" element={<KnowledgePage />} />
						<Route path="knowledge/article/:id" element={<ArticlePage />} />
						<Route path="knowledge/search" element={<KnowledgePage />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
