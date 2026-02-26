import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const contactNumber = '7769941729';

  const services = [
    {
      title: "Interior Painting",
      description: "Transform your indoor spaces with professional interior painting services.",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Wall Preparation", "Premium Paints", "Clean Finish"]
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant paints.",
      image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Weather Protection", "Long-lasting", "Color Consultation"]
    },
    {
      title: "Waterproofing",
      description: "Complete waterproofing solutions for roofs, terraces, and basements.",
      image: "https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Leak Prevention", "Moisture Control", "Long-term Protection"]
    }
  ];

  const testimonials = [
    {
      name: "Shrikant Nikam",
      comment: "Excellent work! Very professional team and quality service.",
      rating: 5
    },
    {
      name: "Priyanka Patel",
      comment: "Great waterproofing work. No leaks after the monsoon!",
      rating: 5
    },
    {
      name: "Abhijeet Deshmukh",
      comment: "Beautiful interior painting. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
        <div 
          className="absolute inset-0 bg-black/20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1246799/pexels-photo-1246799.jpeg?auto=compress&cs=tinysrgb&w=1200')"
          }}
        ></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
              Professional Painting & Waterproofing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Transform your spaces with quality workmanship and premium materials. 
              Serving Pimpari Chinchwad and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary inline-block text-center">
                Get Free Quote
              </Link>
              <a 
                href={`tel:${contactNumber}`} 
                className="btn-primary inline-block text-center bg-white text-primary hover:bg-gray-100"
              >
                Call Now: {contactNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              We provide comprehensive painting and waterproofing solutions for residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-style group" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-right" data-aos-duration="1000">
                Why Choose Shree Painting?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="100">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">We use only premium paints and materials with guaranteed workmanship.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Timely Completion</h3>
                    <p className="text-gray-600">We respect your time and complete projects within agreed timeframes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Fair and transparent pricing with no hidden charges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img 
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional painting work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-style text-center" data-aos="flip-left" data-aos-delay={`${index * 200}`}>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in" data-aos-duration="1000">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get a free quote today and let our experts bring your vision to life with quality painting and waterproofing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Free Quote
            </Link>
            <a href={`tel:${contactNumber}`} className="btn-primary bg-white text-primary hover:bg-gray-100">
              Call: {contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;