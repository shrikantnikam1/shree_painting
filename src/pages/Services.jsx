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
  const services = [
    {
      icon: "🎨",
      title: "Interior Painting",
      description: "Transform your indoor spaces with our premium interior painting services. We use high-quality, eco-friendly paints that are durable and beautifully finished.",
      features: ["Wall painting", "Ceiling painting", "Color consultation"]
    },
    {
      icon: "🏠",
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant coatings. Our team ensures long-lasting results that withstand harsh weather.",
      features: ["Facade painting", "Weatherproofing", "Rust prevention"]
    },
    {
      icon: "💧",
      title: "Waterproofing",
      description: "Shield your property from water damage with our advanced waterproofing solutions. Perfect for roofs, basements, and underground structures.",
      features: ["Roof waterproofing", "Bathroom sealing", "Basement protection"]
    },
    {
      icon: "🎯",
      title: "Color Consultation",
      description: "Get expert advice on selecting the perfect colors for your space. Our color specialists help you choose shades that match your vision.",
      features: ["Color selection", "Trend advice", "Samples provided"]
    },
    {
      icon: "🏢",
      title: "Commercial Painting",
      description: "Large-scale projects require expertise. We handle commercial buildings, offices, and industrial properties with precision and efficiency.",
      features: ["Quick turnaround", "Minimal disruption", "Quality assurance"]
    },
    {
      icon: "✨",
      title: "Special Coatings",
      description: "Anti-bacterial, anti-fungal, and specialty coatings for kitchens, bathrooms, and commercial spaces. Perfect for hygiene-sensitive areas.",
      features: ["Anti-mold coatings", "Anti-bacterial paints", "Glossy finishes"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We visit your location to understand your needs and provide a free, no-obligation quote."
    },
    {
      step: "2",
      title: "Surface Preparation",
      description: "We thoroughly prepare surfaces by cleaning, filling cracks, and sanding to ensure perfect paint adhesion."
    },
    {
      step: "3",
      title: "Expert Application",
      description: "Our skilled professionals apply paints with precision using premium materials and proven techniques."
    },
    {
      step: "4",
      title: "Quality Inspection",
      description: "We conduct final inspections to ensure every detail meets our high standards before project completion."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div 
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=1200')"
          }}
        ></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Our Professional Services</h1>
            <p className="text-xl text-gray-200" data-aos="fade-up" data-aos-delay="200">
              Comprehensive painting and waterproofing solutions for residential and commercial properties
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Tailored solutions for all your painting and waterproofing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="zoom-in-up" data-aos-delay={`${index * 100}`}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              From consultation to completion, here's how we work
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={`${index * 150}`}>
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-8 w-16 h-1 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src={paintingImg}
                alt="Painting service showcase"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Quality You Can Trust</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 12 years of industry experience, we've perfected the art of painting and waterproofing. 
                  Our commitment to excellence means every project receives meticulous attention to detail.
                </p>
                <p>
                  We use only premium materials from trusted manufacturers, ensuring your investment lasts for years. 
                  Our skilled team undergoes regular training to stay updated with the latest techniques and standards.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span>Professional and certified team</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span>Warranty on all services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span>On-time project completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amol profile section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12" data-aos="zoom-in-up">
            <img
              src={amolImg}
              alt="Amol Salunkhe"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary"
            />
            <div className="text-gray-800 flex-1">
              <p className="text-primary font-semibold uppercase mb-2">Meet Our Specialist</p>
              <h2 className="text-3xl font-bold mb-4">Amol Salunkhe</h2>
              <p className="text-lg font-semibold text-gray-700 mb-3">Senior Painter • 8+ Years Experience</p>
              <div className="space-y-3 text-gray-600">
                <p>
                  Amol is our lead painter and the backbone of our quality assurance. With over 8 years of hands-on 
                  experience, he brings unparalleled expertise to every project he touches.
                </p>
                <p>
                  Known for his meticulous attention to detail, creative problem-solving, and friendly approach, 
                  Amol has directly contributed to transforming hundreds of spaces and earning countless 5-star reviews.
                </p>
                <p className="italic text-primary font-semibold">
                  "Quality isn't an act, it's a habit. Every brushstroke matters."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">Clients Who Were Impressed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Real feedback from satisfied customers
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Get a free consultation and quote today. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Request Free Consultation
            </a>
            <a href="tel:7769941729" className="btn-secondary border-2 border-white hover:bg-white hover:text-primary">
              Call: 7769941729
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;