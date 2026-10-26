
import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar-head.png";
import hoverAvatar from "./assets/avatar-hover.png";
import fullBodyAvatar from "./assets/avatar-fullbody.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Saathvika <span>Gottimukkula</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-stage">
            {/* Decorative background elements */}
            <span className="hero-decoration decoration-one">♡</span>
            <span className="hero-decoration decoration-two">✿</span>
            <span className="hero-decoration decoration-three">✧</span>
            <span className="hero-decoration decoration-four">✦</span>

            {/* Top-left information */}
            <div className="info-card info-location">
              <span className="info-icon">📍</span>
              <div>
                <span className="info-label">MY HOMETOWN</span>
                <h3>Hyderabad</h3>
                <p>India ♡</p>
              </div>
            </div>

            {/* Top-right information */}
            <div className="info-card info-student">
              <span className="info-icon">🎀</span>
              <div>
                <span className="info-label">A LITTLE ABOUT ME</span>
                <h3>CSE Student</h3>
                <p>Class of 2027</p>
              </div>
            </div>

            {/* Center avatar */}
            <div className="avatar-wrapper">
              <span className="sparkle sparkle-one">✦</span>
              <span className="sparkle sparkle-two">✧</span>
              <span className="sparkle sparkle-three">✦</span>

              <img
  src={avatar}
  alt="Chibi illustration representing Saathvika"
  className="hero-avatar"
  onMouseEnter={(e) => {
    e.currentTarget.src = hoverAvatar;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.src = avatar;
  }}
/>
            </div>

            {/* Bottom-left information */}
            <div className="info-card info-developer">
              <span className="info-icon">💻</span>
              <div>
                <span className="info-label">CURRENTLY LEARNING</span>
                <h3>Web Development</h3>
                <p>Learning by building ✨</p>
              </div>
            </div>

            {/* Bottom-right clickable information */}
            <a href="#projects" className="info-card info-projects">
              <span className="info-icon">🌸</span>
              <div>
                <span className="info-label">TAKE A LOOK</span>
                <h3>Projects & Skills</h3>
                <p>Explore my work <span className="card-arrow">↗</span></p>
              </div>
            </a>

            {/* Curved arrows: start near avatar and point outward */}
            <svg
              className="hero-arrows"
              viewBox="0 0 1000 650"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
               <marker
  id="arrowhead"
  markerWidth="8"
  markerHeight="8"
  refX="6"
  refY="4"
  orient="auto"
  markerUnits="userSpaceOnUse"
>
  <path
    d="M1,1 L6,4 L1,7"
    fill="none"
    stroke="#c95789"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</marker>
              </defs>

              {/* Avatar to hometown */}
             {/* Top-left arrow */}
<path d="M 405 245 Q 350 190 290 140" markerEnd="url(#arrowhead)" />

{/* Top-right arrow */}
<path d="M 595 245 Q 650 190 710 140" markerEnd="url(#arrowhead)" />

{/* Bottom-left arrow */}
<path d="M 405 390 Q 350 445 290 510" markerEnd="url(#arrowhead)" />

{/* Bottom-right arrow */}
<path d="M 595 390 Q 650 445 710 510" markerEnd="url(#arrowhead)" />
            </svg>
          </div>

          <a href="#about" className="scroll-hint">
            <span>↓</span> scroll to explore
          </a>
        </section>

        
{/* About Me Section */}
<section className="about-section" id="about">
  <div className="about-layout">

    {/* Full-body avatar */}
    <div className="about-avatar">
      <img
        src={fullBodyAvatar}
        alt="Saathvika's illustrated avatar"
      />
      <span className="about-doodle doodle-heart">♡</span>
      <span className="about-doodle doodle-star">✧</span>
    </div>

    {/* Large speech bubble */}
    <div className="about-speech-bubble">

      <div className="about-intro">
        <p className="about-eyebrow">GET TO KNOW ME</p>
        <h2>A little about me <span>♡</span></h2>

        <h3>Hi, I'm Saathvika!</h3>

        <p>
          I'm a Computer Science Engineering student who loves exploring
          technology, building things for the web, and turning ideas into
          something real.
        </p>

        <p>
          Currently, I'm strengthening my development skills, solving
          Data Structures and Algorithms problems, and exploring the
          exciting world of AI. I believe every project and every mistake
          is an opportunity to learn something new.
        </p>

      
      </div>


      
    </div>
  </div>
</section>


        {/* Projects Section */}
        <section
          className="placeholder-section projects-placeholder"
          id="projects"
        >
          <p className="eyebrow">THINGS I'VE BUILT</p>
          <h2>My little creations. 💻</h2>
          <p>Our interactive project cards are coming next!</p>
        </section>

        {/* Contact Section */}
        <section className="placeholder-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have something in mind? ♡</h2>
          <p>We'll create your interactive contact section here!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
