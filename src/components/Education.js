import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../css/Education.css'; // Ensure path is correct

function Education() {
  return (
    <section id="education" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Education</h2>

        <Row className="g-4">
          {/* Master's Degree */}
          <Col md={6}>
            <Card className="education-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold mb-2">Master of Science in Information Systems</Card.Title>
                <Card.Subtitle className="mb-1 text-muted d-flex align-items-center">
                  <Image src="/assets/neu.png" alt="Northeastern" className="university-logo me-2" />
                  Northeastern University
                </Card.Subtitle>
                <div className="d-flex align-items-center text-muted mb-2">
                  <FaCalendarAlt className="me-2" />
                  Expected Dec 2026
                  <span className="mx-3">|</span>
                  <FaMapMarkerAlt className="me-2" />
                  Boston, MA, USA
                </div>
                <h6 className="fw-semibold mt-3">Coursework:</h6>
                <div className="coursework-tags">
                  <span className="tag">Application Engineering and Development</span>
                  <span className="tag">Database Management and Database Design</span>
                  <span className="tag">Web Development and User Experience</span>
                  <span className="tag">Network Structures and Cloud Computing</span>
                  <span className="tag">Agile Software Development and Methodologies</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Bachelor's Degree */}
          <Col md={6}>
            <Card className="education-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold mb-2">Bachelor of Engineering in Information Technology</Card.Title>
                <Card.Subtitle className="mb-1 text-muted d-flex align-items-center">
                  <Image src="/assets/sppu.png" alt="Pune University" className="university-logo me-2" />
                  Pune University
                </Card.Subtitle>
                <div className="d-flex align-items-center text-muted mb-2">
                  <FaCalendarAlt className="me-2" />
                  Graduated Apr 2022
                  <span className="mx-3">|</span>
                  <FaMapMarkerAlt className="me-2" />
                  Pune, India
                </div>
                <h6 className="fw-semibold mt-3">Coursework:</h6>
                <div className="coursework-tags">
                  <span className="tag">Computer Organization and Architecture</span>
                  <span className="tag">Fundamentals of Data Structures</span>
                  <span className="tag">Problem Solving and OOPS</span>
                  <span className="tag">Database Management Systems</span>
                  <span className="tag">Software Engineering and Project Management</span>
                  <span className="tag">Human Computer Interaction</span>
                  <span className="tag">Software Design and Modeling</span>
                  <span className="tag">Business Analytics</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
