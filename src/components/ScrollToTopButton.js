import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../css/ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    isVisible && (
      <div className="scroll-up-button" onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </div>
    )
  );
}

export default ScrollToTopButton;
