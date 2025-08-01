import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToTop } from "../../hooks";
import { useRouteLoading } from "../../hooks/useRouteLoading";
import { Loading, PageTransition } from "../common";

const Layout = () => {
	// Auto scroll to top on route changes
	useScrollToTop();

	// Show loading state during navigation with route-specific messages
	const { isLoading, isVisible, loadingMessage } = useRouteLoading();

	return (
		<>
			{isLoading && <Loading message={loadingMessage} isVisible={isVisible} />}
			<div className="website-container">
				<Navbar />
				<PageTransition isLoading={isLoading}>
					<main>
						<Outlet />
					</main>
				</PageTransition>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
