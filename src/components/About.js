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
                                I am a passionate and detail-oriented software engineer with 1.5 years of experience in full-stack development. My core expertise lies in designing and building scalable web applications using Java, Spring Boot, ReactJS, SQL, and NoSQL databases. I’ve consistently delivered impactful solutions by combining backend optimization with responsive, user-friendly interfaces. Currently, I am pursuing a Master of Science in Information Systems from Northeastern University, Boston.
                            </p>
                            <br />
                            <p>
                                Throughout my career, I’ve demonstrated strong problem-solving abilities and project management skills while working in collaborative, cross-functional teams. I have experience developing enterprise-grade web applications using Java Spring Boot for robust backend services and ReactJS for intuitive frontends. My projects have focused on aligning technical implementations with real business needs, ensuring efficient, maintainable, and goal-driven solutions.
                            </p>
                            <br />
                            <p>
                                Looking forward, I am driven by a vision to grow into leadership roles—whether by guiding development teams or launching my own startup. My ambition is to contribute meaningfully to organizations by combining technical innovation with strategic thinking. With a focus on continuous learning and professional growth, I aim to build a sustainable and impactful career in the evolving tech landscape.
                            </p>
                        </div>
                    </Col>
                    <Col md={5} className="text-center mt-4 mt-md-0">
                        <img src="/assets/woman.png" alt="Profile" className="img-fluid rounded-circle shadow" style={{ maxWidth: '250px' }} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
