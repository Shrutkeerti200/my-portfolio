import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <section id="about" className="section bg-white">
            <Container>
                <h2 className="text-center mb-5 fw-bold">About Me</h2>
                <Row className="align-items-center">
                    <Col md={7}>
                        <div className="p-4 bg-light rounded shadow-sm">
                            <p>
                                I am a passionate and detail-oriented software engineer with 1.5 years of experience in full-stack development. I specialize in building scalable, enterprise-grade web applications using Java, Spring Boot, ReactJS, SQL, and NoSQL databases, combining backend optimization with responsive, user-friendly interfaces. Alongside application development, I am actively exploring cloud computing and infrastructure/network engineering to build reliable and scalable systems.
                            </p>
                            <br />
                            <p>
                                I am currently pursuing a Master of Science in Information Systems at Northeastern University, Boston. Throughout my career, I have demonstrated strong problem-solving and project management skills, working effectively in collaborative, cross-functional teams. My work focuses on aligning technical solutions with real business needs to deliver efficient, maintainable, and goal-driven applications.
                            </p>
                            <br />
                            <p>
                                Looking ahead, I aspire to grow into leadership roles, whether by guiding development teams or launching my own startup. Driven by continuous learning and professional growth, I aim to build a sustainable and impactful career by combining technical innovation with strategic thinking.
                            </p>
                        </div>
                    </Col>
                    <Col md={5} className="text-center mt-4 mt-md-0">
                        <img src="/assets/image1.jpeg" alt="Profile" className="img-fluid rounded-circle shadow" style={{ maxWidth: '250px' }} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
