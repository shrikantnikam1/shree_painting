import React from 'react';
import paintingImg from '../img/amol-paint-pic.jpeg';
import amolImg from '../img/amol.jpeg';
import { useState } from 'react';

// simple carousel for client testimonials
const TestimonialCarousel = () => {
  const testimonials = [
    { name: 'Shrikant Nikam', comment: 'Excellent work! Very professional team and quality service.' },
    { name: 'Priyanka Patel', comment: 'Great waterproofing work. No leaks after the monsoon!' },
    { name: 'Abhijeet Deshmukh', comment: 'Beautiful interior painting. Highly recommend their services.' }
  ];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="max-w-xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <p className="text-gray-600 italic mb-4">"{testimonials[index].comment}"</p>
        <p className="font-bold text-gray-800">- {testimonials[index].name}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prev} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
          Previous
        </button>
        <button onClick={next} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
          Next
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer professional painting and waterproofing solutions tailored to your needs.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={paintingImg}
            alt="Painting service"
            className="rounded-lg shadow-lg w-full max-w-lg object-cover"
          />
        </div>
        <div className="mt-12 space-y-6 text-gray-700 max-w-2xl mx-auto">
          <p>
            From interior and exterior painting to full property refreshes, our skilled team
            uses premium materials to deliver a flawless finish. We also provide waterproofing
            services to protect your home or business from moisture damage.
          </p>
          <ul className="list-disc pl-5">
            <li>Interior Painting</li>
            <li>Exterior Painting</li>
            <li>Waterproofing</li>
            <li>Color Consultation</li>
            <li>Commercial Projects</li>
          </ul>
        </div>

        {/* Amol profile section */}
        <div className="mt-20 bg-gray-50 py-12">
          <div className="container-custom flex flex-col md:flex-row items-center gap-8">
            <img
              src={amolImg}
              alt="Amol Salunkhe"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <div className="text-gray-800">
              <h2 className="text-2xl font-bold mb-2">Meet Amol Salunkhe</h2>
              <p className="mb-2">
                Senior Painter with over 8 years of hands-on experience. Amol leads our
                painting team, ensuring each project receives meticulous attention to
                detail and color accuracy.
              </p>
              <p>
                Known for his friendly approach and creative solutions, Amol has helped
                hundreds of clients transform their spaces with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="mt-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Clients Who Were Impressed</h2>
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;