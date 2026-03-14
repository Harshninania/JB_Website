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
							</p>
						</div>
					</div>
				</div>

				{/* Right Side: Map Section */}
				<div className="rightSection">
					<h1 className="footerHead">Find Us Here</h1>
					<div className="mapWrapper">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.4358814741!2d77.89380927532244!3d29.866105375266835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36ef24a4993%3A0xc3f19154f3a0953c!2sJawahar%20Bhawan!5e0!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin"
							loading="lazy"
							title="Jawahar Bhawan Location"
						></iframe>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="social-section">
					<h2 className="social-heading">Bhawan Utilities</h2>
					<div className="social-icons bhawan-utilities">
                        {/* Bhawan Utility Links as individual <a> tags */}
						<a href="https://channeli.in/bhawan_complaint/" className="bhawan-link" aria-label="Bhawan Complaint App" target="_blank" rel="noreferrer">
                            <img src="/Images/icons/b_logo.svg" alt="" className="bhawan-footer-icon" />
                        </a>
						
						<a href="https://channeli.in/" className="bhawan-link" aria-label="Channeli App" target="_blank" rel="noreferrer">
                            <img src="/Images/icons/channeli_logo.svg" alt="" className="bhawan-footer-icon" />
                        </a>
					
						<a href="https://channeli.in/appetizer/" className="bhawan-link" aria-label="Appetizer" target="_blank" rel="noreferrer">
                            <img src="/Images/icons/appetizer_logo.jpeg" alt="" className="bhawan-footer-icon" />
                        </a>
					</div>
				</div>

				<div className="social-section" style={{ marginTop: '40px' }}>
					<h2 className="social-heading">Follow Us</h2>
					<div className="social-icons">
						
						<a href="https://www.bing.com/ck/a?!&&p=aaab12a27819509e7aa896baba98b67955afc1ecef1864f2dfca9ea7a5e1ddfaJmltdHM9MTc3MzI3MzYwMA&ptn=3&ver=2&hsh=4&fclid=29285e28-a61a-6bc7-3fc1-4aeda7e86a52&psq=jawahar+iit+instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qYXdhaGFyYmhhd2FuX2lpdHIv" className="instagram" aria-label="Instagram"><FaInstagram /></a>
						
					</div>
				</div>
                
                <div className="credits">
					<p><b>Maintained by:</b> Technical Secretary (Jawahar Bhawan)</p>
					<p><b>Website designed by:</b> <span className="highlight">Harsh Ninania</span></p>
				</div>
			</div>
		</section>
	);
}