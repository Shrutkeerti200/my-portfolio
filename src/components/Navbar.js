import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope, FaTools, FaAward } from 'react-icons/fa';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" fixed="top" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold">SHRUTKEERTI</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-3">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80}
              activeClass="active" 
              className="nav-link"
            >
              <FaHome /> Home
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaUser /> About
            </Link>
            <Link 
              to="experience" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaBriefcase /> Experience
            </Link>
            <Link 
              to="education" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaGraduationCap /> Education
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaCode /> Projects
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaTools /> Skills
            </Link>
            <Link 
              to="certifications" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaAward /> Certifications
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active" 
              className="nav-link"
            >
              <FaEnvelope /> Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
