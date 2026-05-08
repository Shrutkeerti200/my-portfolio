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
                    Developed and maintained 5+ full-stack web applications by integrating ReactJS on the frontend with Spring Boot (MVC and Hibernate) on the backend, serving 1,000+ end users.
                  </li>
                  <li>
                    Managed seamless data flow between layers using RESTful and SOAP-based services across 8+ business modules, reducing API response times by 30%.
                  </li>
                  <li>
                    Integrated MySQL, PostgreSQL, and MongoDB for optimized query performance, improving data retrieval speeds by 40% through query optimization and indexing.
                  </li>
                  <li>
                    Collaborated in Agile teams through daily stand-ups, sprint planning, code reviews, and debugging — consistently delivering features 2–3 days ahead of sprint deadlines.
                  </li>
                  <li>
                    Wrote 50+ unit and integration tests using JUnit and Mockito, increasing code coverage from 45% to 85% and reducing production bugs by 25%.
                  </li>
                  <li>
                    Mentored 2 junior developers on Spring Boot best practices and conducted weekly code review sessions to maintain code quality standards.
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
                    Designed and built 3 mobile-responsive web applications using ReactJS and Spring Boot, achieving 98% cross-browser compatibility and seamless user experience.
                  </li>
                  <li>
                    Built PostgreSQL CRUD modules handling 1,500+ records with consistent data integrity and optimized backend logic, reducing page load time by 35%.
                  </li>
                  <li>
                    Developed 15+ reusable React components focusing on usability, navigation, and accessibility, contributing to 2 team projects.
                  </li>
                  <li>
                    Worked with senior developers to translate business requirements into technical solutions, delivering 100% of assigned features.
                  </li>
                  <li>
                    Documented REST API endpoints using Swagger UI, reducing onboarding time for new developers by 40%.
                  </li>
                  <li>
                    Participated in debugging sessions that resolved 10+ critical bugs, ensuring high-quality code delivery.
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
