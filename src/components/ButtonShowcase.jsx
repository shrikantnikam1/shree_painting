import React, { useState, useEffect } from 'react';
import '../styles/ButtonShowcase.css';

const ButtonShowcase = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="button-showcase section-padding bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Interactive Button Features
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Scroll down to activate the floating button, hover over buttons to see animations, 
          responsive design for all devices
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Button 1 - Primary */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Primary Button</h3>
            <button className="showcase-btn btn-primary-showcase">
              Get Started
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Purple gradient with smooth hover effects
            </p>
          </div>

          {/* Button 2 - Success */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Success Button</h3>
            <button className="showcase-btn btn-success-showcase">
              ✓ Confirmed
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Green color for positive actions
            </p>
          </div>

          {/* Button 3 - Warning */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Warning Button</h3>
            <button className="showcase-btn btn-warning-showcase">
              ⚠ Proceed
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Orange color for caution actions
            </p>
          </div>

          {/* Button 4 - Danger */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Danger Button</h3>
            <button className="showcase-btn btn-danger-showcase">
              Delete
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Red color for destructive actions
            </p>
          </div>

          {/* Button 5 - Info */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Info Button</h3>
            <button className="showcase-btn btn-info-showcase">
              ℹ Learn More
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Blue color for informational content
            </p>
          </div>

          {/* Button 6 - Glow */}
          <div className="button-card">
            <h3 className="text-white font-bold mb-4">Glow Button</h3>
            <button className="showcase-btn btn-glow-showcase">
              ✨ Glow Effect
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Neon glow effect on hover
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Scroll position indicator:</p>
          <div className="inline-block bg-gray-700 rounded-full px-6 py-3">
            <span className="text-white font-bold">{Math.round(scrollY)}px</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonShowcase;
