import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaGithub, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Riskient — Portfolio Risk Analytics Platform",
      date: "May 2025",
      featured: true,
      description: [
        "Built a real-time portfolio risk analytics platform using microservices architecture with three independently deployable Spring Boot services communicating through Kafka and RabbitMQ.",
        "Implemented live stock price streaming via Finnhub API with Apache Kafka, automatic risk metric calculation (Volatility, Sharpe Ratio, VaR, Beta), and Redis caching for low-latency dashboard reads.",
        "Developed an AI-powered portfolio analyst using Groq/Llama 3.3 for natural language portfolio analysis, daily digest generation, and stock research before adding holdings.",
        "Created interactive React dashboard with real-time charts (Recharts), historical price data via Yahoo Finance, market hours detection, Excel export, and grouped notification system.",
        "Built user-configurable alert rules with 1-hour cooldown, JWT authentication with email OTP verification, buy/sell transaction tracking with weighted average cost recalculation.",
        "Set up CI/CD pipeline with GitHub Actions, Docker Compose for infrastructure (PostgreSQL, Redis, Kafka, Zookeeper, RabbitMQ), and Swagger/OpenAPI documentation."
      ],
      tech: ["Java 21", "Spring Boot 3.5", "React 18", "Apache Kafka", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "Groq AI", "Tailwind CSS", "Vite", "Recharts", "GitHub Actions"],
      github: "https://github.com/Shrutkeerti200/Portfolio-Risk-Analysis-Platform"
    },
    {
      title: "Cloud Computing Infrastructure & Deployment",
      date: "May 2025",
      featured: false,
      description: [
        "Built and deployed a Spring Boot application to perform file operations and track application health across AWS, GCE, and DigitalOcean, supporting 99.9% uptime.",
        "Provisioned scalable cloud infrastructure using Terraform with components like EC2, S3, RDS, VPC, Subnets, Load Balancer, and Auto Scaling — reducing manual setup time by 70%.",
        "Implemented secure cloud environments using IAM, KMS, Secrets Manager, and Security Groups for access control and encryption across 3 cloud providers.",
        "Set up CloudWatch, CloudWatch Logs, and Route 53 for monitoring, logging, and DNS management — enabling real-time alerting for application health issues.",
        "Configured GitHub Actions CI/CD pipelines for automated deployments and infrastructure updates, cutting deployment time from 45 minutes to under 5 minutes.",
        "Used Linux commands and shell scripting to manage virtual machines and automate setup tasks, eliminating 10+ hours of repetitive manual configuration per week.",
        "Designed VPC architecture with public/private subnets, NAT gateways, and bastion hosts for secure multi-tier application deployment."
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Postman", "Terraform", "AWS", "GCP", "DigitalOcean", "GitHub Actions", "Shell Scripting", "Linux"],
      github: "https://github.com/orgs/SkyComputeLabs/repositories"
    },
    {
      title: "Space Tourism Portal",
      date: "April 2025",
      featured: false,
      description: [
        "Developed a role-based full-stack web portal for managing interstellar tourism missions with secure login, access control, and 4 distinct user dashboards (Admin, Traveler, Trip Coordinator, Space Guide).",
        "Built a responsive React frontend with 20+ reusable components for browsing space destinations, booking missions, viewing trip history, and managing seat capacity.",
        "Implemented separate workflows per role — Trip Coordinators assign guides and update mission statuses (Scheduled, Delayed, Completed), Guides post pre-trip instructions and manage assignments.",
        "Integrated MongoDB for dynamic mission storage handling 500+ mission records with nested documents for destinations, travelers, and guide assignments.",
        "Secured the platform with JWT-based authentication and role-based middleware, preventing unauthorized access across all 15+ API endpoints.",
        "Integrated Stripe payment gateway for mission booking with secure checkout flow and transaction history tracking.",
        "Deployed the application on Heroku (backend) and Render (frontend) with environment-based configuration for seamless staging and production deployments."
      ],
      tech: ["HTML5 & CSS3", "React", "Node.js", "MongoDB", "JWT", "Stripe", "Bootstrap"],
      github: "https://github.com/Shrutkeerti200/Space-Tourism-Portal"
    },
    {
      title: "Patient Complaint Management System",
      date: "Dec 2024",
      featured: false,
      description: [
        "Built a role-based Java Swing application to streamline the triaging and resolution of patient complaints in healthcare settings, supporting 6 distinct user roles.",
        "Automatically categorized complaints by severity (Severe, Moderate, Follow-up) and routed them to appropriate medical professionals — reducing manual triage time by 60%.",
        "Implemented secure user interfaces for multiple stakeholders including specialists, general physicians, pharmacists, researchers, and support staff.",
        "Designed a complaint lifecycle workflow tracking each case from submission through assignment, treatment, and resolution with full audit trail.",
        "Ensured HIPAA-aligned data integrity and confidentiality with role-based access control — each user only views complaints relevant to their specialty.",
        "Used object-oriented design principles (Factory, Strategy, Observer patterns) to create a modular, maintainable codebase with clearly defined user profiles and workflows.",
        "Integrated PostgreSQL with optimized queries for complaint filtering, status updates, and reporting across 5+ interconnected database tables."
      ],
      tech: ["Java", "Swing", "PostgreSQL", "Object-Oriented Design"],
      github: "https://github.com/Shrutkeerti200/Patient-Complaint-Management-System"
    },
    {
      title: "Pricing Model Simulation Tool",
      date: "Nov 2024",
      featured: false,
      description: [
        "Developed a Java Swing application to simulate the impact of target price adjustments on product profitability across 5 suppliers and 10 products each.",
        "Integrated a range pricing model to align target prices with actual sales performance, enabling the pricing team to identify optimal price points that maximized margins by up to 15%.",
        "Generated and processed 1,000+ synthetic sales orders to test real-time pricing scenarios across multiple market conditions and demand patterns.",
        "Built a simulation engine that dynamically tracks revenue changes, compares actual vs. target pricing, and visualizes profit margin shifts in real-time.",
        "Generated comprehensive final reports displaying target price changes, revenue impact, and sales frequency distribution above/below target thresholds.",
        "Implemented undo/redo functionality for price adjustments, allowing the pricing team to compare multiple what-if scenarios side by side.",
        "Used clean object-oriented architecture with separation of concerns — distinct modules for data generation, pricing logic, simulation engine, and report generation."
      ],
      tech: ["Java", "Swing", "Object-Oriented Design", "Simulation Algorithms"],
      github: "https://github.com/Shrutkeerti200/Pricing-Model"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-2">Projects</h2>
        <p className="text-center mb-4" style={{ color: 'rgba(228,228,231,0.4)' }}>
          {currentIndex + 1} / {projects.length}
        </p>

        <div className="slider-wrapper">
          {/* Left Arrow */}
          <button className="slider-arrow slider-arrow-left" onClick={goToPrevious} aria-label="Previous project">
            <FaChevronLeft />
          </button>

          {/* Project Card */}
          <div className="slider-card-wrapper" key={currentIndex}>
            <Card className={`project-card shadow-sm ${project.featured ? 'featured-project' : ''}`}>
              <Card.Body>
                {project.featured && (
                  <div className="featured-badge mb-2">
                    <FaStar className="me-1" />
                    <span>Featured Project</span>
                  </div>
                )}

                <div className="project-header">
                  <div>
                    <Card.Title className="fw-bold mb-2">{project.title}</Card.Title>
                    <Card.Subtitle className="mb-3 d-flex align-items-center" style={{ color: 'rgba(228,228,231,0.4)' }}>
                      <FaCalendarAlt className="me-2" />
                      {project.date}
                    </Card.Subtitle>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                    aria-label="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>

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
              </Card.Body>
            </Card>
          </div>

          {/* Right Arrow */}
          <button className="slider-arrow slider-arrow-right" onClick={goToNext} aria-label="Next project">
            <FaChevronRight />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="slider-dots">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;