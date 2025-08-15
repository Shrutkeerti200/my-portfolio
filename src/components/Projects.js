import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaGithub } from 'react-icons/fa';
import '../css/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Cloud Computing Infrastructure & Deployment",
      date: "May 2025",
      description: [
        "Built and deployed a Spring Boot application to perform file operations and track application health across AWS, GCE, and DigitalOcean.",
        "Provisioned scalable cloud infrastructure using Terraform with components like EC2, S3, RDS, VPC, Subnets, Load Balancer, and Auto Scaling.",
        "Implemented secure cloud environments using IAM, KMS, Secrets Manager, and Security Groups for access control and encryption.",
        "Set up CloudWatch, CloudWatch Logs, and Route 53 for monitoring, logging, and DNS management.",
        "Configured GitHub Actions CI/CD pipelines for automated deployments and infrastructure updates.",
        "Used Linux commands and shell scripting to manage virtual machines and automate setup tasks."
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Postman", "Terraform", "AWS", "GCP", "DigitalOcean", "GitHub Actions", "Shell Scripting", "Linux"]
    },
    {
      title: "Space Tourism Portal",
      date: "April 2025",
      description: [
        "Developed a role-based full-stack web portal for managing interstellar tourism missions with secure login and access control.",
        "Implemented separate dashboards and workflows for Admin, Traveler, Trip Coordinator, and Certified Space Guide.",
        "Enabled travelers to browse space destinations, book missions, and view trip history via a responsive React interface.",
        "Trip Coordinators can assign guides, manage seat capacity, and update mission statuses (Scheduled, Delayed, Completed).",
        "Guides can view their assigned missions, post pre-trip instructions, and cancel or complete missions as needed.",
        "Integrated MongoDB for dynamic mission storage, JWT for authentication, and deployed using Heroku and Render platforms."
      ],
      tech: ["HTML5 & CSS3", "React", "Node.js", "MongoDB", "JWT", "Stripe", "Bootstrap"]
    },
    {
      title: "Patient Complaint Management System",
      date: "Dec 2024",
      description: [
        "Built a role-based Swing application to streamline the triaging and resolution of patient complaints in healthcare settings.",
        "Automatically categorized complaints by severity (Severe, Moderate, Follow-up) and routed them to appropriate medical professionals.",
        "Specialists handled severe cases, general physicians addressed moderate issues, and follow-up complaints were directed to support staff.",
        "Implemented secure user interfaces for multiple stakeholders including doctors, pharmacists, and researchers.",
        "Ensured data integrity, confidentiality, and consistent complaint tracking across the entire system.",
        "Used object-oriented design principles to create a modular, maintainable codebase with clearly defined user profiles and workflows."
      ],
      tech: ["Java", "Swing", "PostgreSQL", "Object-Oriented Design"]
    },
    {
      title: "Pricing Model Simulation Tool",
      date: "Nov 2024",
      description: [
        "Developed a Java Swing application to simulate the impact of target price adjustments on product profitability across multiple suppliers.",
        "Integrated a range pricing model to align target prices with actual sales performance using market behavior insights.",
        "Enabled the pricing team to lower or raise target prices based on sales trends and run simulations to evaluate profitability.",
        "Used synthetic sales data (from 5 suppliers, 10 products each, and 1000+ generated orders) to test real-time pricing scenarios.",
        "Included a simulation engine to track revenue changes, identify optimal price points, and refine profit margins dynamically.",
        "Generated final reports displaying target price changes, revenue impact, and sales frequencies above/below target thresholds."
      ],
      tech: ["Java", "Swing", "Object-Oriented Design", "Simulation Algorithms"]
    }
    // {
    //   title: "Social Media Application",
    //   date: "Mar 2024",
    //   description: [
    //     "Built a full-stack Instagram-style social media platform enabling user registration, profile creation, and authentication.",
    //     "Implemented core features such as photo/video posting, liking, commenting, following/unfollowing users, and real-time feeds.",
    //     "Designed RESTful APIs using Java Spring Boot and documented them using Swagger UI for easier testing and integration.",
    //     "Integrated PostgreSQL for persistent data storage and optimized relational data handling for users, posts, and interactions.",
    //     "Used ReactJS to create a responsive, user-friendly interface with seamless navigation and modern UI/UX design.",
    //     "Ensured code quality with SonarQube analysis and tested APIs using Postman to validate data flow and edge cases."
    //   ],
    //   tech: ["Spring Boot", "PostgreSQL", "Swagger UI", "SonarQube", "Postman", "JWT"]
    // }
  ];

  return (
    <section id="projects" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col md={6} key={idx}>
              <Card className="project-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-2">{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                    <FaCalendarAlt className="me-2" />
                    {project.date}
                  </Card.Subtitle>

                  <ul className="mb-3">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {project.tech.map((techItem, index) => (
                      <span key={index} className="tag">{techItem}</span>
                    ))}
                  </div>

                  {project.title === "Cloud Computing Infrastructure & Deployment" && (
                    <div className="github-link mt-3">
                      <a
                        href="https://github.com/orgs/SkyComputeLabs/repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )}

                  {project.title === "Space Tourism Portal" && (
                    <div className="github-link mt-3">
                      <a
                        href="https://github.com/Shrutkeerti200/Space-Tourism-Portal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )}

                  {project.title === "Patient Complaint Management System" && (
                    <div className="github-link mt-3">
                      <a
                        href="https://github.com/Shrutkeerti200/Patient-Complaint-Management-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )}

                  {project.title === "Pricing Model Simulation Tool" && (
                    <div className="github-link mt-3">
                      <a
                        href="https://github.com/Shrutkeerti200/Pricing-Model"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )}

                  {/* {project.title === "Social Media Application" && (
                    <div className="github-link mt-3">
                      <a
                        href="https://github.com/Shrutkeerti200/social-media-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )} */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
