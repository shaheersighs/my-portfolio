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
  const words = useRef(["wrangling data", "scribbling code", "training models"]);
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
      }, 300); 
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array to avoid re-renders

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
        I have strong proficiency in Python, JavaScript, and R, with a solid foundation in software development 
        and scripting. My experience spans across both relational and non-relational databases, 
        including MySQL and MongoDB, enabling efficient data modeling and management. 
        I’m well-versed in computer networking fundamentals, with hands-on exposure to CISCO technologies. 
        My core focus lies in Machine Learning, AI, and Natural Language Processing, where I actively build 
        and train intelligent systems. With a passion for Data Engineering, I enjoy designing pipelines, 
        wrangling large datasets, and optimizing data workflows to drive meaningful insights and automation. 
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

          <a href="/shaheer's_resume.pdf" download className="contact-item">
            <img src={resumeIcon} alt="Resume" className="contact-icon" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        {/* Profile Picture Above Projects */}
        <img src={profileImage} alt="Profile" className="profile-picture" />
        <h2 className="projects-heading">My Projects</h2>

        {/* Grid Layout for Project Blocks */}
        <div className="projects-grid">
          <a href="https://github.com/shaheersighs/Flight-Management-System" className="project-box" style={{ backgroundImage: `url(${project1})` }}>Flight Management System</a>
          <a href="https://github.com/shaheersighs/Counterfeit-Currency-Detection" className="project-box" style={{ backgroundImage: `url(${project2})` }}>Counterfeit Currency Detection</a>
          <a href="https://github.com/shaheersighs/Tech-Resumes-Analysis" className="project-box" style={{ backgroundImage: `url(${project3})` }}>Tech Resumes Analysis System</a>
          <a href="https://github.com/shaheersighs/Brain-Tumour-MRI-Classification" className="project-box" style={{ backgroundImage: `url(${project4})` }}>Brain Tumour MRI Classification</a>
          <a href="https://github.com/shaheersighs/Network-Anomaly-Detection-Using-Clustering-methods" className="project-box" style={{ backgroundImage: `url(${project5})` }}>Network Anomaly Detection</a>
          <a href="https://github.com/shaheersighs/Activity-Detection-using-Machine-Learning" className="project-box" style={{ backgroundImage: `url(${project6})` }}>Activity Detection using Machine Learning</a>
        </div>
      </div>
    </div>
  );
}










