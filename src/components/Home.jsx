import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Home.css";
import FractalTree from "./FractalTree";

const Home = () => {
  const featuredProjects = [
    {
      title: "FULL-STACK LUXURY E-COMMERCE",
      description: " Luxury online retail platform with full-stack functionality",
      image: "/homeGlam.png",
      technologies: ["React.js", "Node.js", "Rest API", "Firebase" ,  "Yoco-backend"],
      githubLink: "https://github.com/TonyStagon/GlamNest",
      liveLink: "https://glam-nest.vercel.app/"
    },
    {
      title: "VIRTUAL-GALLERY-3D ",
      description: "The 3D Virtual Gallery is an immersive web-based application that allows users to explore a virtual art exhibition space rendered in real time",
      image: "/public/gallery.png",
      technologies: ["Node.js", "Three.js", "React.js", "JavaScript ", "GLTF/GLB"],
      githubLink: "https://github.com/TonyStagon/3d-Virtual-Gallery",
      liveLink: "https://3d-virtual-gallery.vercel.app/"
    },
    {
      title: "Online Bag Store",
      description: "Management interface for Toronto District School Board.",
      image: "/public/Thurto.png",
      technologies: ["Python (Flask)", "Vue.js", "Bootstrap", "SQL"],
      githubLink: "https://github.com/TonyStagon/Ecommerce-Project-front",
      liveLink: "https://ecommerce-project-front-eight.vercel.app/"
    },
    {
      title: "Hotel Magement System",
      description: "Self-learning A.I. using genetic algorithm for maze traversal.",
      image: "/public/hotel.png",
      technologies: ["Javascript", "HTML/CSS"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const additionalProjects = [
    {
      title: "Distributed Logging",
      description: "System for communicating logs from microservices.",
      technologies: ["Node.js", "Express.js", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio built with React and CSS.",
      technologies: ["React", "CSS", "JavaScript"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  return (
    <section className="home-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Profile" className="profile-img" />
          <span className="profile-name">Arthur Maatlane</span>
        </div>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </nav>

      <div className="content-wrapper">
        {/* Fractal Tree */}
        <div className="fractal-container">
          <FractalTree />
        </div>
        
        {/* Main Heading */}
        <h1 className="heading">HEY, MY NAME IS ARTHUR MAATLANE</h1>
        <p className="subtext">
          Welcome to my portfolio. I am a passionate developer with experience in React.js, CSS, and modern web technologies.
        </p>

        {/* Projects Button */}
        <button className="projects-btn">VIEW PROJECTS</button>

        {/* Projects Section */}
        <div className="projects-section">
          <h2 className="section-title">MY PROJECTS</h2>
          
          {/* Featured Projects Carousel */}
          <div className="featured-projects">
            <h3 className="projects-subtitle">Featured Projects</h3>
            <div className="carousel-container">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <motion.div
                    className="carousel-slide"
                    key={index}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: index === currentProjectIndex ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-card">
                      <div className="project-image-container">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                          {project.technologies.map((tech, i) => (
                            <span key={i}>{tech}</span>
                          ))}
                        </div>
                        <div className="project-links">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub /> Code
                          </a>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> Live
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="carousel-btn prev" onClick={prevProject}>
                <FaChevronLeft />
              </button>
              <button className="carousel-btn next" onClick={nextProject}>
                <FaChevronRight />
              </button>
            </div>
            <div className="carousel-indicators">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Additional Projects Grid */}
          <div className="additional-projects">
            <h3 className="projects-subtitle">Other Projects</h3>
            <div className="projects-grid">
              {additionalProjects.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-section">
          <h2>About Me</h2>
          <p>
            I am currently a <strong>Software Development Engineer</strong> at <strong>Reslocate</strong>, working in Enhancing the Software and improving it with Trending Features that are  Educational using python . At the same time, I am undertaking a part-time <strong>Master's of Science</strong> in <strong>Software Engineering</strong> at <strong>University of Oxford</strong>.
          </p>
          
          <p>Here are some technologies I have been working with:</p>
          
          <ul className="tech-list">
            <li>Typescript</li>
            <li>Python</li>
            <li>React.js</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>C#</li>
          </ul>
          
          <p>
            Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikTok's.
          </p>
        </div>
      </div>

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