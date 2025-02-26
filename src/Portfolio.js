import React, { useState, useEffect, useRef } from "react";
import "./styles.css"; // Import the styles
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg";
import project5 from "./images/project5.jpg";
import project6 from "./images/project6.jpg";
import profileImage from "./images/profile.jpg";
import resumeIcon from "./images/resume-icon.png";

export default function Portfolio() {
  // Step 1: Store words in a `useRef` so it remains stable across renders
  const words = useRef(["wrangling data", "scribbling code", "crafting models"]);
  const [currentWord, setCurrentWord] = useState(words.current[0]);
  const wordRef = useRef(null); // Reference for smooth transition

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (wordRef.current) {
        // Fade Out
        wordRef.current.style.opacity = "0";
        wordRef.current.style.transform = "translateY(-10px)";
      }

      setTimeout(() => {
        // Change Word
        index = (index + 1) % words.current.length;
        setCurrentWord(words.current[index]);

        // Fade In
        if (wordRef.current) {
          wordRef.current.style.opacity = "1";
          wordRef.current.style.transform = "translateY(0)";
        }
      }, 300); // Wait for fade-out before changing text
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []); // ✅ Empty dependency array to avoid re-renders

  return (
    <div className="main-container">  
      {/* Portfolio Section - Left Side */}
      <div className="portfolio-container">
        <h1 className="main-heading">Hi, I'm Shaheer Khan.</h1>
        <h2 className="subheading">
          I like <span className="word-transition" ref={wordRef}>{currentWord}</span> for fun, wby?
        </h2>
        <hr className="section-divider" />  {/* Divider Line */}

        {/* About Me Section */}
        <h2 className="section-heading">About Me</h2>
        <p className="section-description">
          I'm a final-year Data Engineering student who loves solving problems 
          with code, optimizing workflows, and working on projects that automate tasks. 
          I enjoy learning new technologies and pushing boundaries. Find my resume
          in the links below.
        </p>

        {/* Skills Section */}
        <h2 className="section-heading">Some of my Skills</h2>
        <p className="section-description">
          I have fluency in Python, JavaScript, and R.  
          When it comes to databases, I can navigate MySQL and MongoDB like a seasoned traveler.  
          Networking? I’ve got CISCO covered.  
          For cloud computing, I excel in Azure.  
          And if we’re talking about the big leagues—Machine Learning, AI, and NLP—let’s just say, I’m always training my models to be smarter. 
        </p>

        {/* Contact Section */}
        <h2 className="section-heading">Let's Connect</h2>
        <p className="section-description">
          Whether you want to talk data, tech, or just say hi—I'm always up for a chat.  
          Reach out through any of the platforms below.  
        </p>

        <div className="contact-links">
          <a href="https://github.com/shaheersighs" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
          </a>

          <a href="https://linkedin.com/in/shaheer-khan-052023294" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-icon" />
          </a>

          <a href="mailto:mshaheerkhan2002@gmail.com" className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" className="contact-icon" />
          </a>

          <a href="https://twitter.com/khanshaheer12" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="Twitter" className="contact-icon" />
          </a>

          <a href="/resume.pdf" download className="contact-item">
            <img src={resumeIcon} alt="Resume" className="contact-icon" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        {/* Profile Picture Above Projects */}
        <img src={profileImage} alt="Profile" className="profile-picture" />
        <h2 className="projects-heading">Some of my Projects</h2>

        {/* Grid Layout for Project Blocks */}
        <div className="projects-grid">
          <a href="https://github.com/shaheersighs/Flight-Management-System" className="project-box" style={{ backgroundImage: `url(${project1})` }}>Flight Management System</a>
          <a href="https://github.com/shaheersighs/Fake-Currency-Detection---MGP" className="project-box" style={{ backgroundImage: `url(${project2})` }}>Fake Currency Detection</a>
          <a href="https://github.com/shaheersighs/project3" className="project-box" style={{ backgroundImage: `url(${project3})` }}>Resume Screening Tool</a>
          <a href="https://github.com/shaheersighs/project4" className="project-box" style={{ backgroundImage: `url(${project4})` }}>Project 4</a>
          <a href="https://github.com/shaheersighs/project5" className="project-box" style={{ backgroundImage: `url(${project5})` }}>Project 5</a>
          <a href="https://github.com/shaheersighs/project6" className="project-box" style={{ backgroundImage: `url(${project6})` }}>Project 6</a>
        </div>
      </div>
    </div>
  );
}










