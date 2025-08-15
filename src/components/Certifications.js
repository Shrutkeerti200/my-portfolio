// src/components/Certifications.js
import React, { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/Certifications.css';

function Certifications() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;
    if (direction === 'left') current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    else current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "June 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/Cloud/46298246_Microsoft%20Azure%20Fundamentals%20AZ-900.pdf"
    },
    {
      title: "Digital Transformation with Google Cloud",
      issuer: "Google Cloud",
      date: "July 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/Cloud/Digital%20Transformation%20with%20Google%20Cloud%20-%20Coursera%20Certificate.pdf"
    },
    {
      title: "Java Microservices with Spring Cloud",
      issuer: "Pluralsight",
      date: "February 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/Java/Java%20Microservices%20with%20Spring%20Cloud%20Developing%20Services.pdf"
    },
    {
      title: "JavaScript Essentials for Beginners",
      issuer: "Coursera",
      date: "January 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/JavaScript%20%26%20ES6/JavaScript%20Essentials%20For%20Beginners.pdf"
    },
    {
      title: "Modern JavaScript: ES6 Basics",
      issuer: "Coursera",
      date: "January 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/JavaScript%20%26%20ES6/Modern%20JavaScript%20ES6%20Basics.pdf"
    },
    {
      title: "Building Applications with React 17 and Redux",
      issuer: "Pluralsight",
      date: "January 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/React/Building%20Applications%20with%20React%2017%20and%20Redux.pdf"
    },
    {
      title: "Deploy Microservices with Spring Cloud Framework",
      issuer: "Coursera",
      date: "March 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/Spring%20%26%20SpringBoot/Deploy%20Microservices%20using%20Spring%20Cloud%20Framework.pdf"
    },
    {
      title: "Spring Framework Spring Data JPA 5 with Hibernate",
      issuer: "Coursera",
      date: "March 2023",
      link: "https://github.com/Shrutkeerti200/Certifications/blob/main/Spring%20%26%20SpringBoot/Spring%20Framework%20Spring%20Data%20JPA%205%20with%20Hibernate.pdf"
    }
  ];

  const issuerLogos = {
    "Microsoft": "/assets/microsoft.png",
    "Google Cloud": "/assets/gc.png",
    "Coursera": "/assets/coursera.png",
    "Pluralsight": "/assets/pluralsight.png"
  };

  return (
    <section id="certifications" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">Certifications</h2>
        <div className="carousel-wrapper">
          <Button variant="light" className="carousel-btn left" onClick={() => scroll('left')}>
            <FaChevronLeft />
          </Button>

          <div className="carousel" ref={scrollRef}>
            {certifications.map((cert, idx) => (
              <Card className="cert-card shadow-sm" key={idx}>
                <Card.Body>
                  <Card.Title className="fw-bold mb-2">{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                    {issuerLogos[cert.issuer] && (
                      <img
                        src={issuerLogos[cert.issuer]}
                        alt={cert.issuer}
                        className="issuer-logo me-2"
                      />
                    )}
                    {cert.issuer}
                  </Card.Subtitle>
                  <div className="d-flex align-items-center text-muted mb-3">
                    <FaCalendarAlt className="me-2" />
                    {cert.date}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate <FaExternalLinkAlt className="ms-1" />
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>

          <Button variant="light" className="carousel-btn right" onClick={() => scroll('right')}>
            <FaChevronRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Certifications;