import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import '../css/Home.css'; // Make sure you have this file

function Home() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section bg-light">
      <Container className="text-center py-5">
        <h1><b>Shrutkeerti Sangolkar</b> 👋</h1>
        <p className="hero-description">
          Master's student at Northeastern University with a background in Full Stack Development, currently exploring opportunities in DevOps and Cloud infrastructure to build scalable, user-centric applications.
        </p>

        <Button
          variant="primary"
          href="/Shrutkeerti_Resume.pdf"
          download
          className="mt-3 download-btn"
        >
          Download CV
        </Button>

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
