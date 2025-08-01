import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LionDesigner from "./pages/LionDesigner";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/designer" element={<LionDesigner />} />
			</Routes>
		</Router>
	);
}

export default App;
