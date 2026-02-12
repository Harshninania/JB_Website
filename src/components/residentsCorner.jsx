import React from "react";
import "../app.css";

const testimonials = [
    {
        name: "Shourya Sharma",
        text: "Hello, This is Shourya Sharma. Living at Jawahar Bhawan has truly been a wonderful experience. The sense of community and camaraderie among the residents is heartwarming. With ample spaces to relax, including the game room and the cozy canteen, there's always a way to unwind.",
        img: "shourya.png" // Replace with your actual image names in public/Images/
    },
    {
        name: "Samita",
        text: "Hello, This is Samita. Staying at Jawahar Bhawan has been an absolute pleasure. The blend of comfort, convenience, and community makes it an ideal place for both study and recreation. With everything from a game room to a well-equipped canteen, there's never a dull moment.",
        img: "samita.png"
    },
    {
        name: "Nitish Sharma",
        text: "Hello, This is Nitish Sharma. My stay at Jawahar Bhawan has been an enriching and enjoyable experience. It's a place that truly understands the balance between work and relaxation. From the peaceful rooms to the vibrant common areas, everything here is designed for comfort.",
        img: "nitish.png"
    }
];

export default function ResidentsCorner() {
    return (
        <section className="residentsSection">
            <div className="residentsHeading">
                <h1 className="backTitle">BHAWAN RESIDENT'S CORNER</h1>
                <h2 className="frontTitle">BHAWAN RESIDENT'S CORNER</h2>
                <p className="subtitle">Your Space, Your Voice, Your Community</p>
            </div>

            <div className="testimonialsContainer">
                {testimonials.map((item, index) => (
                    <div className="testimonialCard" key={index}>
                        <div className="quoteContent">
                            <span className="quoteIcon start">“</span>
                            <p>{item.text}</p>
                            <span className="quoteIcon end">”</span>
                        </div>
                        <div className="profileSection">
                            <div className="avatarWrapper">
                                <img src={`./Images/${item.img}`} alt={item.name} />
                            </div>
                            <h3 className="residentName">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}