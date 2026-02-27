import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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
    },
    {
      name: "Rajesh Kadam",
      comment: "The team was punctual and left everything clean. Great job!",
      rating: 5
    },
    {
      name: "Sneha Sawant",
      comment: "Transformed our home with excellent color choices and finishing.",
      rating: 5
    },
    {
      name: "Vilas Kulkarni",
      comment: "Professional service from start to finish. Very impressed with the quality.",
      rating: 5
    },
    {
      name: "Anjali Jadhav",
      comment: "Best painting service in the area. Highly professional and reliable.",
      rating: 5
    },
    {
      name: "Ashok Patil",
      comment: "Exceptional work quality. Would definitely hire them again.",
      rating: 5
    },
    {
      name: "Pooja Nair",
      comment: "The waterproofing they did has completely solved our moisture issues.",
      rating: 5
    },
    {
      name: "Suresh Rao",
      comment: "Great communication, timely completion, and outstanding results.",
      rating: 5
    },
    {
      name: "Meera Sharma",
      comment: "Professional team with attention to detail. Very satisfied customer.",
      rating: 5
    },
    {
      name: "Ravi Iyer",
      comment: "Excellent exterior painting. The house looks brand new!",
      rating: 5
    },
    {
      name: "Deepa Maharashtra",
      comment: "Quality materials, skilled workers, and fair pricing. Highly recommended!",
      rating: 5
    }
  ];

  const getVisibleTestimonials = () => {
    const visibleCount = 3;
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(testimonialIndex + i) % testimonials.length]);
    }
    return items;
  };

  const getPrevTestimonials = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const getNextTestimonials = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white">
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
              <Link to="/contact" className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-opacity-90 font-semibold inline-block text-center hover:shadow-lg transition-all duration-300">
                Get Free Quote
              </Link>
              <a 
                href={`tel:${contactNumber}`} 
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 font-semibold inline-block text-center transition-all duration-300"
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 border-l-4 border-orange-600 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden border-2 border-orange-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="section-padding bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-right" data-aos-duration="1000">
                Why Choose Shree Painting?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                className="rounded-lg shadow-lg w-full border-4 border-orange-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="relative mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-orange-500 transition-all duration-300" data-aos="flip-left" data-aos-delay={`${index * 100}`}>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic min-h-20">"{testimonial.comment}"</p>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center gap-6">
              <button 
                onClick={getPrevTestimonials}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold"
              >
                ← Back
              </button>
              
              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index * 3 % testimonials.length)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === Math.floor(testimonialIndex / 3)
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={getNextTestimonials}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in" data-aos-duration="1000">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get a free quote today and let our experts bring your vision to life with quality painting and waterproofing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-opacity-90 font-semibold hover:shadow-lg transition-all duration-300">
              Get Free Quote
            </Link>
            <a href={`tel:${contactNumber}`} className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 font-semibold transition-all duration-300">
              Call: {contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;