import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import OtherFacilities from "./components/otherFacilities";
import TeamSection from "./components/team/teamSection";
import ResidentsCorner from "./components/residentsCorner";

export default function App() {
	const [pageLoaded, setPageloaded] = useState(false);

	useEffect(() => {
		setPageloaded(true);
	}, []);


	return (
		pageLoaded && (
			<React.Fragment>
				<Navbar />
				<Landing />
				<div className="landingDiv"/>
				{/* <About /> */}
				<Facilities />
				{/* <OtherFacilities /> */}
				<TeamSection />
<ResidentsCorner />  {/* Added after Meet the Team */}
<Gallery />
<Footer />
			</React.Fragment>
		)
	);
}
