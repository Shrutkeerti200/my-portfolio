import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../css/Experience.css';

function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-5">Experience</h2>

        <Row className="g-4">
          {/* Analyst – Software Engineer */}
          <Col md={6}>
            <Card className="experience-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold mb-2">Analyst – Software Engineer</Card.Title>
                <Card.Subtitle className="mb-1 text-muted d-flex align-items-center">
                  <Image src="/assets/capg2.png" alt="Capgemini" className="company-logo me-2" />
                  Capgemini Technology Services India Limited
                </Card.Subtitle>

                {/* Date & Location Row */}
                <div className="d-flex align-items-center text-muted mb-2">
                  <FaCalendarAlt className="me-2" />
                  Dec 2022 – Dec 2023
                  <span className="mx-3">|</span>
                  <FaMapMarkerAlt className="me-2" />
                  Mumbai, India
                </div>

                <ul>
                  <li>
                    Developed and maintained full-stack web applications by integrating ReactJS on the frontend with Spring Boot (MVC and Hibernate) on the backend.
                  </li>
                  <li>
                    Managed seamless data flow between layers using RESTful and SOAP-based services across business modules.
                  </li>
                  <li>
                    Integrated MySQL, PostgreSQL, and MongoDB for optimized query performance and data storage.
                  </li>
                  <li>
                    Collaborated in Agile teams through stand-ups, sprint planning, code reviews, and debugging.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Intern – Software Developer */}
          <Col md={6}>
            <Card className="experience-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold mb-2">Intern – Software Developer</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                    <Image src="/assets/capg2.png" alt="Capgemini" className="company-logo me-2" />
                  Capgemini Technology Services India Limited
                </Card.Subtitle>

                {/* Date & Location Row */}
                <div className="d-flex align-items-center text-muted mb-2">
                  <FaCalendarAlt className="me-2" />
                  Mar 2022 – Jun 2022
                  <span className="mx-3">|</span>
                  <FaMapMarkerAlt className="me-2" />
                  Mumbai, India
                </div>

                <ul>
                  <li>
                    Designed mobile-responsive web apps using ReactJS and Spring Boot for seamless user experience.
                  </li>
                  <li>
                    Built PostgreSQL CRUD modules to ensure consistent data handling and backend logic.
                  </li>
                  <li>
                    Developed component-based UI focusing on usability, navigation, and accessibility.
                  </li>
                  <li>
                    Worked with senior developers to translate requirements into technical solutions.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
