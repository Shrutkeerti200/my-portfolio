import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="home" smooth={true} duration={500}><FaHome /></Link>
      <Link to="about" smooth={true} duration={500}><FaUser /></Link>
      <Link to="experience" smooth={true} duration={500}><FaBriefcase /></Link>
      <Link to="projects" smooth={true} duration={500}><FaCode /></Link>
      <Link to="education" smooth={true} duration={500}><FaGraduationCap /></Link>
    </div>
  );
}

export default Sidebar;
