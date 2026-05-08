import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/About.css';

function About() {
    return (
        <section id="about" className="section bg-white">
            <Container>
                <h2 className="text-center mb-5 fw-bold">About Me</h2>
                <Row className="about-row">
                    <Col md={7} className="d-flex">
                        <div className="terminal-card flex-grow-1">
                            <div className="terminal-header">
                                <span className="terminal-dot red"></span>
                                <span className="terminal-dot yellow"></span>
                                <span className="terminal-dot green"></span>
                            </div>
                            <div className="terminal-body">
                                <p>
                                    <span className="terminal-prompt">$</span> I'm a Full Stack Developer with 1.5 years of experience at Capgemini, where I built scalable web applications using Java, Spring Boot, React, and microservices. I enjoy turning complex business problems into clean, reliable software — from designing RESTful APIs and real-time data pipelines to integrating AI-powered features into production systems.
                                </p>
                                <p>
                                    I recently graduated with a Master's in Information Systems from Northeastern University, where I deepened my skills in distributed systems, cloud infrastructure, event-driven architecture, and AI integration. I work across the full stack with tools like Docker, Kafka, Redis, AWS, Terraform, and Groq/Llama for intelligent application features.
                                </p>
                                <p>
                                    I'm particularly drawn to financial services, healthcare, and enterprise SaaS — domains where software quality, data integrity, and scalability directly impact people's lives. I'm currently open to opportunities where I can build intelligent systems that matter.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} className="d-flex">
                        <div className="about-image-container flex-grow-1">
                            <img
                                src="/assets/Portfolio_Profile - Copy.jpeg"
                                alt="Shrutkeerti Sangolkar"
                                className="about-profile-img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;