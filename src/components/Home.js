import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import '../css/Home.css';

function Home() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section home-section">
      <Container className="text-center py-5 hero-container">

        <div className="status-badge mb-3">
          <span className="status-dot"></span>
          <span>Open to Opportunities</span>
        </div>

        <p className="hero-tagline">JAVA FULL STACK · MICROSERVICES · REACTJS · CLOUD · AI INTEGRATION</p>

        <h1 className="hero-name">
          Hi, I'm Shrutkeerti <span className="wave">👋</span>
        </h1>

        <p className="hero-description">
          Master's graduate from Northeastern University with a background in Full Stack
          Development, currently exploring opportunities in Java Full Stack, Cloud Infrastructure, and AI-integrated systems to build scalable, intelligent applications.
        </p>

        <div className="hero-buttons mt-4">
          <Button
            href="/Shrutkeerti_Sangolkar_Resume.pdf"
            download
            className="download-btn me-3"
          >
            Download CV
          </Button>
          <Button
            href="#projects"
            className="projects-btn"
          >
            View Projects
          </Button>
        </div>

        {/* Scroll Down Arrow */}
        <div className="scroll-down" onClick={scrollToNextSection}>
          <p className="scroll-text">Scroll Down</p>
          <FaChevronDown className="bounce-arrow" />
        </div>
      </Container>
    </section>
  );
}

export default Home;