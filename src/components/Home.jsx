import React from "react";
import "./Home.css";
import FractalTree from "./FractalTree"; // Import FractalTree component

const Home = () => {
  return (
    <section className="home-container">
      {/* Profile Image and Name */}
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Profile" className="profile-img" />
        <span className="profile-name">Trainee Name</span>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* Fractal Tree Logo - Positioned Above Heading */}
      <div className="fractal-container">
        <FractalTree />
      </div>

      {/* Main Heading */}
      <h1 className="heading">Hey, My Name Is Arthur Maatlane</h1>
      <p className="subtext">
        Welcome to my portfolio. I am a passionate developer with experience in React.js, CSS, and modern web technologies.
      </p>

      {/* Projects Button */}
      <button className="projects-btn">PROJECTS</button>

      {/* Social Icons */}
      <div className="social-icons">
        {[
          { src: "https://cdn-icons-png.flaticon.com/512/145/145807.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/arthur-maatlane-a975762a0" },
          { src: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub", link: "#" },
          { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter", link: "#" },
          { src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", alt: "YouTube", link: "#" },
          { src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram", link: "#" }
        ].map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;
