import React, { useState, useEffect } from 'react';
import '../styles/InteractiveButton.css';

const InteractiveButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
      
      // Show button when scrolled down 200px
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="interactive-button-container">
      <button
        className={`interactive-button ${isVisible ? 'visible' : ''}`}
        onClick={handleButtonClick}
        title="Back to Top"
      >
        <span className="button-text">↑ Back to Top</span>
        <span className="button-glow"></span>
      </button>

      {/* Decorative scroll indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress"
          style={{ width: `${Math.min((scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default InteractiveButton;
