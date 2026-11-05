
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SmoothScroll from "./components/SmoothScroll";
import ScrollAnimations from "./components/ScrollAnimations";
import avatar from "./assets/avatar-head.png";
import hoverAvatar from "./assets/avatar-hover.png";
import fullBodyAvatar from "./assets/avatar-fullbody.png";
import Particles from "./components/Particles";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGithub,
} from "react-icons/si";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "GitHub", icon: <SiGithub /> },
];
  

  return (
   < >
   <SmoothScroll />
  <ScrollAnimations isIntroOpen={isIntroOpen} />
   

   
    
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
  <span className="logo-s">S</span>
  <span className="logo-rest">G.</span>
</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#education" onClick={closeMenu}>EDUCATION</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </div>
      </nav>

      <main>
        

        {/* FIRST SCREEN */}
<section
  className={`cover-section ${isIntroOpen ? "intro-open" : ""}`}
  id="home"
>
  
  {/* REACT BITS PARTICLES BACKGROUND */}
<div className="hero-particles">
  <Particles
  particleCount={200}
  particleSpread={10}
  particleColors={["#ff00aa", "#ffffff"]}
  speed={0.5}
  particleBaseSize={100}
  sizeRandomness={0.3}
  glow={1}
  twinkle={0.5}
  intro={false}
  opacity={1}
/>
</div>
  {/* PORTFOLIO TITLE */}
  <h1 className={`cover-title ${isIntroOpen ? "title-hidden" : ""}`}>
  PORTFOLIO’26
</h1>

  {/* CLICKABLE AVATAR */}
  <button
    className="cover-avatar"
    onClick={() => setIsIntroOpen(!isIntroOpen)}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    aria-label="Click to reveal my introduction"
  >
    {/* CLICK ME HINT */}
{!isIntroOpen && (
  <div className="avatar-hint">
    <span className="hint-arrow">↑</span>
    CLICK ME
  </div>
)}
    <img
      src={isHovering ? hoverAvatar : avatar}
      alt="Saathvika illustrated avatar"
    />
  </button>

  {/* INTRODUCTION REVEALED ON CLICK */}
  {/* INTRODUCTION REVEALED ON CLICK */}
<div className="cover-intro-content">

  <div className="intro-accent-line"></div>

  <div className="intro-text">

    <p className="intro-tag">
      CREATIVE DEVELOPER <span>•</span> TECH ENTHUSIAST
    </p>

    <h2>
      Hello, I'm <span>Saathvika</span>
    </h2>

    <h3>Full Stack Developer</h3>

    <p className="cover-description">
      Building ideas into digital experiences. Exploring web
      development, problem-solving and AI.
    </p>

    

    <a href="#contact" className="pink-button hire-button">
      HIRE ME
    </a>



  </div>
</div>

  
</section>

        {/* ABOUT */}
        <section className="content-section about-section" id="about">
          <p className="section-label">GET TO KNOW ME</p>
          <h2 className="section-heading">A LITTLE ABOUT <span>ME.</span></h2>

          <div className="about-grid">
            <div className="about-image">
              <img src={fullBodyAvatar} alt="Saathvika illustration" />
            </div>

            <div className="about-text">
              <h3>Curious mind. Creative soul.</h3>
              <p>
                I'm a CSE undergraduate who enjoys learning,
                experimenting, and turning ideas into real projects.
                I'm currently growing my skills in full-stack
                development, DSA, and artificial intelligence.
              </p>
              <p>
                I believe in learning by building, staying curious,
                and getting a little better every day.
              </p>
              <div className="about-actions">
  <a href="#projects" className="pink-button">
    EXPLORE MY WORK ↗
  </a>

  <a
    href="/Saathvika_Resume.pdf"
    download="Saathvika_Resume.pdf"
    className="pink-button resume-button"
  >
    DOWNLOAD RESUME ↓
  </a>
</div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
<section className="content-section education-section" id="education">
  <p className="section-label">MY ACADEMIC JOURNEY</p>
  <h2 className="section-heading">EDUCATION.</h2>
  

  <div className="education-timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="education-card">
        <span className="education-year">2023 — 2027</span>
        <h3>Bachelor of Engineering</h3>
        <h4>Computer Science & Engineering</h4>
        <p>Gokaraju Lailavathi Engineering College</p>
        <span className="education-score">CGPA: 8.9</span>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="education-card">
        <span className="education-year">2021 — 2023</span>
        <h3>Intermediate</h3>
        <p>Deeksha Junior College</p>
        <span className="education-score">Percentage: 94.4%</span>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="education-card">
        <span className="education-year">2021</span>
        <h3>Secondary Education (Class 10th)</h3>
        <p>St. Ann's High School</p>
        <span className="education-score">CGPA: 10</span>
      </div>
    </div>

  </div>
</section>

        {/* SKILLS */}
      
        <section className="content-section skills-section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>
  <h2 className="section-heading">MY TECH STACK.</h2>

  <div className="skills-grid">
    {skills.map((skill) => (
      <div className="skill-card" key={skill.name}>
        <span className="skill-icon">{skill.icon}</span>
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
</section>

        {/* PROJECTS */}
        <section className="content-section projects-section" id="projects">
          <p className="section-label">THINGS I'VE BUILT</p>
          <h2 className="section-heading">PROJECTS.</h2>

          <div className="projects-grid">
            <article className="project-card">
              <span className="project-number">01</span>
              <h3>GlowMax</h3>
              <p>Developed a full-stack wellness and productivity platform that helps users monitor daily health and
lifestyle activities such as mood tracking, hydration, sleep, workouts, journaling, hobbies, streak
progress, and career roadmaps.</p>
              <span className="project-tech">MERN Stack</span>
              <a href="#" className="project-link">VIEW PROJECT ↗</a>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>
              <h3>Apple Detection</h3>
              <p>Developed Python modules for report generation and post-detection analysis in a YOLOv9-based apple detection project. Implemented apple counting, size estimation, ripeness analysis, and yield prediction using OpenCV and NumPy. Selected for Project Expo.</p>
              <span className="project-tech">Python · YOLO · OpenCV</span>
              <a href="#" className="project-link">VIEW PROJECT ↗</a>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>
              <h3>Browser Game + Score API</h3>
              <p>Developed a browser-based reflex game featuring a live leaderboard for tracking high scores.</p>
              <span className="project-tech">Node.js ·  Express.js · JavaScript</span>
              <a href="#" className="project-link">VIEW PROJECT ↗</a>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <p className="section-label">HAVE A PROJECT IN MIND?</p>
          <h2>LET'S CREATE<br /><span>SOMETHING.</span></h2>
          <p>I'd love to connect, collaborate, and learn together.</p>

          <a href="mailto:saathvika.sathu05@gmail.com" className="pink-button">
            SAY HELLO 
          </a>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
       <div className="footer-logo">
  <a href="#home" className="logo">
    <span className="logo-s">S</span>
    <span className="logo-rest">G.</span>
  </a>
</div>
        <p>DESIGNED & BUILT BY SAATHVIKA © 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

    </div>
    
    </>
  );
}

export default App;

