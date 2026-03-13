import React, { useState, useEffect } from "react";
import data from "./data.js";
import "../../app.css";
import OtherFacilities from "../otherFacilities.jsx";

export default function Facilities() {

	const [currentIndex, setCurrentIndex] = useState(0);
	const totalCards = data.length;

	const nextCard = () => {
		setCurrentIndex((prev) => (prev + 1) % totalCards);
	};

	const prevCard = () => {
		setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
	};

	const goToCard = (index) => {
		setCurrentIndex(index);
	};

	/* Keyboard Navigation */
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "ArrowLeft") prevCard();
			if (e.key === "ArrowRight") nextCard();
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, []);

	/* Touch Swipe Support */

	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) nextCard();
		if (touchStart - touchEnd < -50) prevCard();
	};

	return (
		<>

			{/* Facilities Section */}

			<section className="facilitiesContainer" id="Facilities">

				<div className="facilities-heading-wrapper">
					<h1 className="facilities-heading">Bhawan Facilities</h1>
					<div className="facilities-heading-divider"></div>
				</div>

				<div className="slider-container">

					<div className="card-counter">
						<span>{currentIndex + 1}</span> / <span>{totalCards}</span>
					</div>

					<div
						className="cards-wrapper"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>

						{data.map((facility, index) => (

							<div key={index} className="facility-card">

								<img
									src={`/Images/card/${facility.img}`}
									alt={facility.name}
									className="card-image"
								/>

								<div className="card-overlay"></div>

								<div className="card-content">

									<div className="card-icon-wrapper">
										<img
											src={`/Images/card/${facility.vector}`}
											alt={`${facility.name} icon`}
											className="card-icon"
										/>
									</div>

									<h2 className="card-title">
										{facility.name}
									</h2>

									<div className="card-divider"></div>

									<p className="card-description">
										{facility.description}
									</p>

								</div>

							</div>

						))}

					</div>


					{/* Navigation Buttons */}

					<button
						className="nav-button prev-button"
						onClick={prevCard}
						aria-label="Previous facility"
					>
						<svg viewBox="0 0 24 24">
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
						</svg>
					</button>

					<button
						className="nav-button next-button"
						onClick={nextCard}
						aria-label="Next facility"
					>
						<svg viewBox="0 0 24 24">
							<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
						</svg>
					</button>


					{/* Indicator Dots */}

					<div className="indicator-dots">

						{data.map((_, index) => (
							<div
								key={index}
								className={`dot ${index === currentIndex ? "active" : ""}`}
								onClick={() => goToCard(index)}
							></div>
						))}

					</div>

				</div>

			</section>


			{/* Other Facilities */}

			<section className="otherFacilitiesContainer">
				<OtherFacilities />
			</section>

		</>
	);
}