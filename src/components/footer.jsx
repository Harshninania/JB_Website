import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../app.css";

export default function Footer() {
	return (
		<section className="footerMain" id="ContactUs">
			<div className="footerContainer">
				{/* Left Side: Contact Card */}
				<div className="leftSection">
					<div className="topLeftSection">
						<h1 className="footerHead">Contact Us</h1>
						<div className="contact-item">
							<FaEnvelope className="contact-icon" />
							<p><a href="mailto:jawaharbhawan@iitr.ac.in">jawaharbhawan@iitr.ac.in</a></p>
						</div>
						<div className="contact-item">
							<FaPhoneAlt className="contact-icon" />
							<p>+91 90457 89183</p>
						</div>
						<div className="contact-item">
							<FaMapMarkerAlt className="contact-icon" />
							<p>
								Jawahar Bhawan, Jawahar Bhawan Road,
								<br />
								IIT Roorkee, Roorkee – 247667
								<br />
								Uttarakhand, India
							</p>
						</div>
					</div>

					<div className="bottomLeftSection">
						<a href="#top" className="footer-link">Home</a>
						<a href="https://channeli.in/bhawan_app/complain" target="_blank" rel="noreferrer" className="footer-link">Feedback Form</a>
						<a href="https://channeli.in/bhawan_app/complain" target="_blank" rel="noreferrer" className="footer-link">Register a Complaint</a>
					</div>
				</div>

				{/* Right Side: Map Section */}
				<div className="rightSection">
					<h1 className="footerHead">Find Us Here</h1>
					<div className="mapWrapper">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.8119324506313!2d77.9000185827351!3d29.86429626323842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb368ef396751%3A0xeddda126ec67f931!2sJawahar%20Bhawan%20Rd%2C%20Indian%20Institute%20of%20Technology%20Roorkee%2C%20Roorkee%2C%20Uttarakhand%20247667!5e0!3m2!1sen!2sin!4v1649440856842!5m2!1sen!2sin"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Jawahar Bhawan Location"
						></iframe>
					</div>
				</div>
			</div>

			{/* Copyright & Social Section */}
			<div className="footer-bottom">
				<p className="copyright">© <b>Jawahar Bhawan</b>. All Rights Reserved.</p>
				<div className="credits">
					<p><b>Maintained by:</b> Technical Secretary (Jawahar Bhawan)</p>
					<p><b>Website Structured and designed by:</b> <span className="highlight">Harsh Ninania</span> [PNI/2ND YEAR]</p>
				</div>

				<div className="social-section">
					<h2 className="social-heading">Follow Us</h2>
					<p className="social-subheading">Stay connected on social media</p>
					<div className="social-icons">
						<a href="#" className="twitter" aria-label="Twitter"><FaTwitter /></a>
						<a href="#" className="facebook" aria-label="Facebook"><FaFacebookF /></a>
						<a href="#" className="instagram" aria-label="Instagram"><FaInstagram /></a>
						<a href="#" className="linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
						<a href="#" className="youtube" aria-label="YouTube"><FaYoutube /></a>
					</div>
				</div>
			</div>
		</section>
	);
}