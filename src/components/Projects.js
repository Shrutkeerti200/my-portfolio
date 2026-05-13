import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaGithub, FaStar, FaTimes } from 'react-icons/fa';
import '../css/Projects.css';

/* ===== ANIMATED SVG SCENES ===== */

const RiskientScene = () => (
  <svg viewBox="0 0 400 200" className="scene-svg">
    <defs>
      <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="#1a1020" />
    {/* Grid lines */}
    {[40,80,120,160].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(249,115,22,0.08)" strokeWidth="0.5"/>)}
    {[50,100,150,200,250,300,350].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(249,115,22,0.08)" strokeWidth="0.5"/>)}
    {/* Animated chart line */}
    <polyline points="30,150 80,120 130,140 180,80 230,100 280,50 330,70 380,30" fill="none" stroke="url(#rg1)" strokeWidth="2.5" strokeLinecap="round" className="anim-draw" />
    {/* Dots on chart */}
    {[[80,120],[180,80],[280,50],[380,30]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="#f97316" className="anim-pulse" style={{animationDelay: `${i*0.3}s`}} />
    ))}
    {/* Floating candlesticks */}
    {[50,110,170,230,290,350].map((x,i) => {
      const h = 20 + Math.random()*40;
      const y = 100 + Math.random()*60;
      const green = i % 2 === 0;
      return (
        <g key={i} className="anim-float" style={{animationDelay: `${i*0.4}s`}}>
          <line x1={x} y1={y-h/2-8} x2={x} y2={y+h/2+8} stroke={green?"#22d3ee":"#f97316"} strokeWidth="1" opacity="0.4"/>
          <rect x={x-4} y={y-h/2} width="8" height={h} rx="1" fill={green?"#22d3ee":"#f97316"} opacity="0.3"/>
        </g>
      );
    })}
    {/* AI brain icon */}
    <circle cx="340" cy="160" r="18" fill="rgba(249,115,22,0.15)" className="anim-pulse" />
    <text x="340" y="166" textAnchor="middle" fontSize="16" fill="#f97316" className="anim-pulse">🤖</text>
  </svg>
);

const CloudScene = () => (
  <svg viewBox="0 0 400 200" className="scene-svg">
    <rect width="400" height="200" fill="#0c1929" />
    {/* Stars */}
    {Array.from({length:20}).map((_,i) => (
      <circle key={i} cx={Math.random()*400} cy={Math.random()*100} r={Math.random()*1.5+0.5} fill="white" opacity={Math.random()*0.5+0.2} className="anim-twinkle" style={{animationDelay:`${i*0.2}s`}} />
    ))}
    {/* Cloud 1 */}
    <g className="anim-cloud" style={{animationDelay:'0s'}}>
      <ellipse cx="100" cy="80" rx="50" ry="25" fill="rgba(59,130,246,0.25)" />
      <ellipse cx="80" cy="75" rx="30" ry="20" fill="rgba(59,130,246,0.3)" />
      <ellipse cx="120" cy="78" rx="35" ry="18" fill="rgba(59,130,246,0.2)" />
    </g>
    {/* Cloud 2 */}
    <g className="anim-cloud" style={{animationDelay:'2s'}}>
      <ellipse cx="300" cy="60" rx="45" ry="22" fill="rgba(34,211,238,0.2)" />
      <ellipse cx="280" cy="55" rx="28" ry="18" fill="rgba(34,211,238,0.25)" />
      <ellipse cx="320" cy="58" rx="30" ry="16" fill="rgba(34,211,238,0.15)" />
    </g>
    {/* Server racks */}
    {[120,160,200,240,280].map((x,i) => (
      <g key={i} className="anim-float" style={{animationDelay:`${i*0.3}s`}}>
        <rect x={x-12} y="120" width="24" height="55" rx="3" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
        <rect x={x-8} y="128" width="16" height="3" rx="1" fill="#3b82f6" opacity="0.5"/>
        <rect x={x-8} y="135" width="16" height="3" rx="1" fill="#22d3ee" opacity="0.4"/>
        <rect x={x-8} y="142" width="16" height="3" rx="1" fill="#3b82f6" opacity="0.3"/>
        <circle cx={x+7} cy="165" r="2" fill="#22d3ee" className="anim-blink" style={{animationDelay:`${i*0.5}s`}}/>
      </g>
    ))}
    {/* Connection lines */}
    <line x1="148" y1="148" x2="172" y2="148" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" strokeDasharray="3,3" className="anim-dash"/>
    <line x1="212" y1="148" x2="240" y2="148" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" strokeDasharray="3,3" className="anim-dash"/>
    {/* AWS text */}
    <text x="200" y="195" textAnchor="middle" fontSize="10" fill="rgba(59,130,246,0.3)" fontFamily="monospace">terraform apply ✓</text>
  </svg>
);

const SpaceScene = () => (
  <svg viewBox="0 0 400 200" className="scene-svg">
    <rect width="400" height="200" fill="#0f0a1a" />
    {/* Stars */}
    {Array.from({length:30}).map((_,i) => (
      <circle key={i} cx={Math.random()*400} cy={Math.random()*200} r={Math.random()*1.5+0.3} fill="white" opacity={Math.random()*0.6+0.2} className="anim-twinkle" style={{animationDelay:`${i*0.15}s`}} />
    ))}
    {/* Planet */}
    <circle cx="320" cy="70" r="35" fill="rgba(139,92,246,0.3)" />
    <ellipse cx="320" cy="70" rx="50" ry="8" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" transform="rotate(-15 320 70)"/>
    {/* Rocket */}
    <g className="anim-rocket">
      <polygon points="180,120 195,80 210,120" fill="rgba(139,92,246,0.6)" />
      <rect x="185" y="120" width="20" height="8" rx="2" fill="rgba(139,92,246,0.4)" />
      <polygon points="195,128 190,145 195,138 200,145" fill="#f97316" opacity="0.6" className="anim-flame"/>
      <circle cx="195" cy="100" r="4" fill="rgba(255,255,255,0.3)" />
    </g>
    {/* Moon */}
    <circle cx="60" cy="50" r="20" fill="rgba(228,228,231,0.1)" />
    <circle cx="55" cy="45" r="3" fill="rgba(228,228,231,0.05)" />
    <circle cx="68" cy="55" r="4" fill="rgba(228,228,231,0.05)" />
    {/* Floating particles */}
    {Array.from({length:8}).map((_,i) => (
      <circle key={i} cx={50+i*45} cy={150+Math.sin(i)*20} r="1.5" fill="#8b5cf6" opacity="0.3" className="anim-float" style={{animationDelay:`${i*0.4}s`}} />
    ))}
  </svg>
);

const HealthcareScene = () => (
  <svg viewBox="0 0 400 200" className="scene-svg">
    <rect width="400" height="200" fill="#091a14" />
    {/* Heartbeat line */}
    <polyline points="0,100 60,100 80,100 90,60 100,140 110,100 160,100 200,100 220,100 230,55 240,145 250,100 300,100 400,100" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" className="anim-heartbeat"/>
    {/* Hospital building */}
    <rect x="140" y="60" width="120" height="100" rx="4" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="0.5"/>
    {/* Windows */}
    {[160,185,210,235].map(x => [75,95,115,135].map(y => (
      <rect key={`${x}-${y}`} x={x} y={y} width="12" height="10" rx="1" fill="rgba(16,185,129,0.15)" className="anim-blink" style={{animationDelay:`${(x+y)*0.01}s`}}/>
    )))}
    {/* Cross */}
    <rect x="192" y="65" width="16" height="4" rx="1" fill="#10b981" opacity="0.6"/>
    <rect x="198" y="59" width="4" height="16" rx="1" fill="#10b981" opacity="0.6"/>
    {/* Floating medical icons */}
    <text x="60" y="70" fontSize="20" className="anim-float" style={{animationDelay:'0s'}}>💊</text>
    <text x="320" y="80" fontSize="18" className="anim-float" style={{animationDelay:'1s'}}>🩺</text>
    <text x="40" y="150" fontSize="16" className="anim-float" style={{animationDelay:'2s'}}>📋</text>
    <text x="340" y="155" fontSize="16" className="anim-float" style={{animationDelay:'0.5s'}}>🏥</text>
    {/* Data flow dots */}
    {Array.from({length:6}).map((_,i) => (
      <circle key={i} cx={60+i*55} cy={170+Math.sin(i*2)*10} r="3" fill="rgba(16,185,129,0.2)" className="anim-pulse" style={{animationDelay:`${i*0.3}s`}} />
    ))}
  </svg>
);

const PricingScene = () => (
  <svg viewBox="0 0 400 200" className="scene-svg">
    <rect width="400" height="200" fill="#1a1408" />
    {/* Bar chart */}
    {[60,110,160,210,260,310,360].map((x,i) => {
      const h = 30 + Math.random()*80;
      return (
        <g key={i} className="anim-grow" style={{animationDelay:`${i*0.15}s`}}>
          <rect x={x-15} y={170-h} width="30" height={h} rx="3" fill={`rgba(245,158,11,${0.15+i*0.05})`} stroke="rgba(245,158,11,0.3)" strokeWidth="0.5"/>
          <rect x={x-15} y={170-h} width="30" height="4" rx="2" fill="#f59e0b" opacity="0.5"/>
        </g>
      );
    })}
    {/* Trend line */}
    <polyline points="60,130 110,110 160,120 210,90 260,85 310,60 360,40" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" className="anim-dash"/>
    {/* Dollar signs floating */}
    {['$','$','$','¥','€'].map((s,i) => (
      <text key={i} x={40+i*80} y={30+Math.random()*30} fontSize="14" fill="rgba(245,158,11,0.2)" fontWeight="bold" className="anim-float" style={{animationDelay:`${i*0.5}s`}}>{s}</text>
    ))}
    {/* Simulation badge */}
    <rect x="130" y="10" width="140" height="22" rx="11" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)" strokeWidth="0.5"/>
    <text x="200" y="25" textAnchor="middle" fontSize="9" fill="rgba(245,158,11,0.5)" fontFamily="monospace">simulation running...</text>
  </svg>
);

const sceneMap = {
  'Riskient': RiskientScene,
  'Cloud Infra': CloudScene,
  'Space Tourism': SpaceScene,
  'Healthcare CMS': HealthcareScene,
  'Pricing Engine': PricingScene,
};

/* ===== MAIN COMPONENT ===== */

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Riskient — Portfolio Risk Analytics Platform",
      shortTitle: "Riskient",
      date: "May 2025",
      featured: true,
      sceneKey: "Riskient",
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
      shortTitle: "Cloud Infra",
      date: "May 2025",
      featured: false,
      sceneKey: "Cloud Infra",
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
      shortTitle: "Space Tourism",
      date: "April 2025",
      featured: false,
      sceneKey: "Space Tourism",
      description: [
        "Developed a role-based full-stack web portal for managing interstellar tourism missions with secure login, access control, and 4 distinct user dashboards.",
        "Built a responsive React frontend with 20+ reusable components for browsing space destinations, booking missions, and managing seat capacity.",
        "Implemented separate workflows per role — Trip Coordinators assign guides and update mission statuses, Guides post pre-trip instructions.",
        "Integrated MongoDB for dynamic mission storage handling 500+ mission records with nested documents.",
        "Secured the platform with JWT-based authentication and role-based middleware across all 15+ API endpoints.",
        "Integrated Stripe payment gateway for mission booking with secure checkout flow.",
        "Deployed on Heroku (backend) and Render (frontend) with environment-based configuration."
      ],
      tech: ["HTML5 & CSS3", "React", "Node.js", "MongoDB", "JWT", "Stripe", "Bootstrap"],
      github: "https://github.com/Shrutkeerti200/Space-Tourism-Portal"
    },
    {
      title: "Patient Complaint Management System",
      shortTitle: "Healthcare CMS",
      date: "Dec 2024",
      featured: false,
      sceneKey: "Healthcare CMS",
      description: [
        "Built a role-based Java Swing application to streamline the triaging and resolution of patient complaints, supporting 6 distinct user roles.",
        "Automatically categorized complaints by severity and routed them to appropriate medical professionals — reducing manual triage time by 60%.",
        "Implemented secure user interfaces for multiple stakeholders including specialists, general physicians, pharmacists, and researchers.",
        "Designed a complaint lifecycle workflow tracking each case from submission through resolution with full audit trail.",
        "Ensured HIPAA-aligned data integrity with role-based access control.",
        "Used object-oriented design principles (Factory, Strategy, Observer patterns) for a modular, maintainable codebase.",
        "Integrated PostgreSQL with optimized queries across 5+ interconnected database tables."
      ],
      tech: ["Java", "Swing", "PostgreSQL", "Object-Oriented Design"],
      github: "https://github.com/Shrutkeerti200/Patient-Complaint-Management-System"
    },
    {
      title: "Pricing Model Simulation Tool",
      shortTitle: "Pricing Engine",
      date: "Nov 2024",
      featured: false,
      sceneKey: "Pricing Engine",
      description: [
        "Developed a Java Swing application to simulate target price adjustments on product profitability across 5 suppliers and 10 products.",
        "Integrated a range pricing model enabling the pricing team to identify optimal price points that maximized margins by up to 15%.",
        "Generated and processed 1,000+ synthetic sales orders to test real-time pricing scenarios.",
        "Built a simulation engine that dynamically tracks revenue changes and visualizes profit margin shifts in real-time.",
        "Generated comprehensive reports displaying target price changes, revenue impact, and sales frequency distribution.",
        "Implemented undo/redo functionality for comparing multiple what-if scenarios side by side.",
        "Used clean object-oriented architecture with separation of concerns across distinct modules."
      ],
      tech: ["Java", "Swing", "Object-Oriented Design", "Simulation Algorithms"],
      github: "https://github.com/Shrutkeerti200/Pricing-Model"
    }
  ];

  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="text-center fw-bold mb-2">Projects</h2>
        <p className="text-center mb-5" style={{ color: 'rgba(228,228,231,0.4)' }}>
          Click on a card to view details
        </p>

        <Row className="g-4">
          {projects.map((project, idx) => {
            const SceneComponent = sceneMap[project.sceneKey];
            return (
              <Col md={project.featured ? 12 : 6} lg={project.featured ? 12 : 4} key={idx}>
                <div
                  className={`project-card-animated ${project.featured ? 'featured-card' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card-visual-scene">
                    {SceneComponent && <SceneComponent />}
                    {project.featured && (
                      <div className="featured-floating-badge">
                        <FaStar /> Featured
                      </div>
                    )}
                  </div>

                  <div className="card-info">
                    <h3 className="card-title-text">{project.featured ? project.title : project.shortTitle}</h3>
                    <span className="card-date">
                      <FaCalendarAlt className="me-1" />
                      {project.date}
                    </span>
                    <div className="card-tech-preview">
                      {project.tech.slice(0, project.featured ? 6 : 3).map((t, i) => (
                        <span key={i} className="mini-tag">{t}</span>
                      ))}
                      {project.tech.length > (project.featured ? 6 : 3) && (
                        <span className="mini-tag more-tag">+{project.tech.length - (project.featured ? 6 : 3)}</span>
                      )}
                    </div>
                  </div>

                  <div className="card-hover-overlay">
                    <span>View Details →</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <div className="modal-header-scene">
                {sceneMap[selectedProject.sceneKey] && React.createElement(sceneMap[selectedProject.sceneKey])}
              </div>

              <div className="modal-body">
                {selectedProject.featured && (
                  <div className="featured-badge mb-3">
                    <FaStar className="me-1" />
                    <span>Featured Project</span>
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-github">
                    <FaGithub />
                  </a>
                </div>

                <p className="modal-date" style={{ color: 'rgba(228,228,231,0.4)' }}>
                  <FaCalendarAlt className="me-2" />
                  {selectedProject.date}
                </p>

                <ul className="modal-list">
                  {selectedProject.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="modal-tags">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Projects;