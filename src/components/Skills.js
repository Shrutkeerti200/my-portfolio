import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Skills.css'; // Create this file for custom styling
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaCloud, FaVial, FaTools } from 'react-icons/fa';

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    items: ['Java', 'JavaScript']
  },
  {
    title: 'Frontend',
    icon: <FaLaptopCode />,
    items: ['HTML5', 'CSS3', 'ReactJS', 'Bootstrap 4', 'jQuery']
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    items: ['Spring Boot', 'Node.js']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud />,
    items: ['Git & GitHub', 'AWS & GCE Basics', 'CI/CD', 'Linux', 'Shell Scripting']
  },
  {
    title: 'API Testing & Documentation',
    icon: <FaVial />,
    items: ['Postman', 'Swagger UI']
  },
  {
    title: 'Tools & Software',
    icon: <FaTools />,
    items: ['Spring Tool Suite', 'NetBeans', 'VS Code', 'MS SQL Server', 'Eclipse', 'Sublime Text']
  }
];

function Skills() {
  return (
    <section id="skills" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Skills</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {skillsData.map((skill, idx) => (
            <Col key={idx}>
              <Card className="skill-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2">
                    <span className="skill-icon">{skill.icon}</span>
                    <strong>{skill.title}</strong>
                  </Card.Title>
                  <ul className="mt-3 ps-3">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
