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

      {/* Our Painting Expertise Section */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Professional Painting Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Specializing in comprehensive painting and waterproofing solutions for homes and businesses. Expert craftsmanship with premium materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Painting Types */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-orange-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Interior Painting</h3>
              <p className="text-gray-600">Transform indoor spaces with vibrant colors and professional finishes. Expert wall preparation and premium paint selection.</p>
            </div>

            {/* Exterior Painting */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18M5 9v6M19 9v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Exterior Painting</h3>
              <p className="text-gray-600">Weather-resistant coatings to protect and beautify your property. Durable finish that lasts for years in harsh conditions.</p>
            </div>

            {/* Waterproofing */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-amber-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Waterproofing</h3>
              <p className="text-gray-600">Complete moisture and leak prevention for roofs, terraces, and basements. Long-term protection from water damage.</p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-orange-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Materials</h3>
              <p className="text-gray-600">Premium paints and coating materials from trusted brands. Certified application techniques for lasting results.</p>
            </div>
          </div>

          {/* Painting Materials & Process */}
          <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Why Choose Professional Painting Services?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Expert Surface Preparation</h4>
                    <p className="text-gray-600">Thorough cleaning, sanding, and priming ensures flawless paint adhesion and durability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Premium Paint Quality</h4>
                    <p className="text-gray-600">Eco-friendly and weather-resistant paints that provide superior coverage and longevity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Professional Techniques</h4>
                    <p className="text-gray-600">Skilled application methods ensure even coverage, smooth finishes, and professional results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Quality Guaranteed</h4>
                    <p className="text-gray-600">Every project meets our high standards with final inspection and customer satisfaction assurance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img 
                src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional painting service in action"
                className="rounded-xl shadow-2xl border-4 border-orange-200"
              />
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