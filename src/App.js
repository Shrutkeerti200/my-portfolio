import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
