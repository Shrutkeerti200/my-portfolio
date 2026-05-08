import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Skills.css';
import {
  FaJava, FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs,
  FaDocker, FaAws, FaGitAlt, FaGithub, FaLinux, FaDatabase, FaFigma,
  FaTerminal, FaChartBar, FaVial
} from 'react-icons/fa';
import {
  SiSpringboot, SiSpringsecurity, SiSpring, SiTailwindcss, SiVite, SiApachekafka,
  SiRabbitmq, SiRedis, SiPostgresql, SiMysql, SiMongodb, SiTerraform,
  SiPostman, SiSwagger, SiSonarqubeserver, SiJunit5, SiGithubactions,
  SiIntellijidea, SiVscodium, SiJsonwebtokens, SiGooglecloud,
  SiTypescript, SiJquery, SiHibernate, SiKubernetes, SiDigitalocean
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'SQL', icon: <FaDatabase color="#336791" /> },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact color="#61DAFB" /> },
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'jQuery', icon: <SiJquery color="#0769AD" /> },
      { name: 'Recharts', icon: <FaChartBar color="#8884d8" /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
      { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
      { name: 'Spring Data JPA', icon: <SiSpring color="#6DB33F" /> },
      { name: 'Hibernate', icon: <SiHibernate color="#59666C" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'REST APIs', icon: <FaTerminal color="#4EAA25" /> },
      { name: 'JWT', icon: <SiJsonwebtokens color="#000000" /> },
    ]
  },
  {
    title: 'Databases & Messaging',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
      { name: 'Apache Kafka', icon: <SiApachekafka color="#231F20" /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq color="#FF6600" /> },
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
      { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
      { name: 'AWS', icon: <FaAws color="#FF9900" /> },
      { name: 'GCP', icon: <SiGooglecloud color="#4285F4" /> },
      { name: 'DigitalOcean', icon: <SiDigitalocean color="#0080FF" /> },
      { name: 'Terraform', icon: <SiTerraform color="#7B42BC" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
      { name: 'CI/CD', icon: <FaGitAlt color="#F05032" /> },
      { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
      { name: 'Shell Scripting', icon: <FaTerminal color="#4EAA25" /> },
    ]
  },
  {
    title: 'Testing & Tools',
    skills: [
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'Swagger', icon: <SiSwagger color="#85EA2D" /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver color="#4E9BCD" /> },
      { name: 'JUnit 5', icon: <SiJunit5 color="#25A162" /> },
      { name: 'Mockito', icon: <FaVial color="#78A641" /> },
      { name: 'Git', icon: <FaGithub color="#181717" /> },
      { name: 'VS Code', icon: <SiVscodium color="#2F80ED" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea color="#000000" /> },
      { name: 'Docker Desktop', icon: <FaDocker color="#2496ED" /> },
      { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
    ]
  },
];

function Skills() {
  return (
    <section id="skills" className="section bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-2">Skills</h2>
        <p className="text-center mb-5" style={{ color: 'rgba(228,228,231,0.4)' }}>Technologies I work with</p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h6 className="category-title">{category.title}</h6>
              <div className="skill-chips">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-chip">
                    <span className="chip-icon">{skill.icon}</span>
                    <span className="chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;