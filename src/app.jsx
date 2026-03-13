import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import TeamSection from "./components/team/teamSection";
import ResidentsCorner from "./components/residentsCorner";

export default function App() {

	const [pageLoaded, setPageLoaded] = useState(false);

	useEffect(() => {
		setPageLoaded(true);
	}, []);

	return (
		pageLoaded && (
			<>
				<Navbar />

				<Landing />

				{/* About Section */}
				<About />

				{/* Facilities Slider */}
				<Facilities />

				{/* Team */}
				<TeamSection />

				{/* Residents Corner */}
				<ResidentsCorner />

				{/* Gallery */}
				<Gallery />

				{/* Footer */}
				<Footer />
			</>
		)
	);
}