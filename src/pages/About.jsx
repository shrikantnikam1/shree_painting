import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import amolImg from '../img/amol.jpeg';
import pravinImg from '../img/pravin-founder.jpeg';
import logo2 from '../img/shreepainting-logo.png';

const About = () => {
  const contactNumber = '7769941729';
  
  const teamMembers = [
    {
      name: "Pravin Salunkhe",
      role: "Founder & Lead Contractor",
      image: pravinImg,
      experience: "12+ Years",
      specialties: ["Project Management", "Quality Assurance", "Customer Relations"]
    },
    {
      name: "Amol Salunkhe",
      role: "Senior Painter",
      image: amolImg,
      experience: "8+ Years",
      specialties: ["Interior Painting", "Exterior Painting", "Waterproofing"]
    },
  ];

  const achievements = [
    { number: "1500+", label: "Projects Completed" },
    { number: "12+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "500+", label: "Happy Families" }
  ];

  const testimonials = [
    {
      name: "Shrikant Nikam",
      text: "Shree Painting transformed our home beautifully. Professional team, quality materials, and completed on time. Highly recommended!",
      rating: 5
    },
    {
      name: "Shivani Thote",
      text: "Exceptional service for our commercial building. The waterproofing work is outstanding and has prevented all water seepage issues.",
      rating: 5
    },
    {
      name: "Abhijit Deshmukh",
      text: "Best painters in the area! Attention to detail is remarkable. They handled our restaurant renovation perfectly.",
      rating: 5
    },
    {
      name: "Rutuja Taware",
      text: "Very impressed with their professionalism. The team was punctual, clean, and the final result is beautiful. Will definitely hire again!",
      rating: 5
    },
    {
      name: "Aisharya Patil",
      text: "They transformed my kitchen and bathroom completely! The waterproofing in the bathroom is perfect and the colors they suggested are gorgeous.",
      rating: 5
    },
    {
      name: "Akash Katkar",
      text: "I've worked with many painting companies. Shree Painting stands out for consistency and professionalism. Highly reliable partner!",
      rating: 5
    },
    {
      name: "ijay Bosale",
      text: "The entire process was seamless from start to finish. They protected all my furniture and floors. The finish quality is extraordinary!",
      rating: 5
    },
    {
      name: "Sagar Jadhav",
      text: "Hired them for our office. They worked during off-hours to minimize disruption. Professional, skilled, and delivered perfection!",
      rating: 5
    },
    {
      name: "Priya Godse",
      text: "I recommend Shree Painting to all my clients. They understand design concepts and execute them flawlessly. Trust them completely!",
      rating: 5
    },
    {
      name: "Vivek Kumar",
      text: "Painted 25 rooms for our hostel. Amol's team maintained quality across all rooms. Budget-friendly and no compromises. Perfect!",
      rating: 5
    },
    {
      name: "Shalini Wagh",
      text: "My home was their canvas. The color consultation they provided matched my vision perfectly. They make your dreams into reality!",
      rating: 5
    },
    {
      name: "Nikhil Chopra",
      text: "Impressed with their punctuality and communication. They kept me informed throughout the project. Exceptional service!",
      rating: 5
    },
    {
      name: "Dr. Ramesh Pondhe",
      text: "For my dental clinic, I needed sterilized, antibacterial coatings. They delivered exactly that with beautiful aesthetics. Impressed!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "Premium Quality Materials",
      description: "We use only the finest paints and waterproofing products from trusted manufacturers for lasting results."
    },
    {
      title: "Skilled & Experienced Team",
      description: "Our professionals are trained and certified with years of experience in residential and commercial projects."
    },
    {
      title: "Competitive Pricing",
      description: "Get premium quality without breaking the bank. We offer transparent quotes with no hidden charges."
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and complete projects within the agreed deadline consistently."
    },
    {
      title: "Warranty & Guarantee",
      description: "All our work comes with warranty, giving you peace of mind about the durability of our services."
    },
    {
      title: "Excellent Customer Service",
      description: "We're available for consultations, support, and follow-ups to ensure 100% customer satisfaction."
    }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const getPrevTestimonials = () => {
    setTestimonialIndex((i) => (i - 3 + testimonials.length) % testimonials.length);
  };

  const getNextTestimonials = () => {
    setTestimonialIndex((i) => (i + 3) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(testimonialIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 via-red-900 to-amber-900 text-white">
        <div 
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.nerolac.com/sites/default/files/styles/1920x548/public/7-wall-painting-ideas-for-your-living-room-by-nerolac-main.jpg.webp?itok=KX8dSzoU')"
          }}
        ></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-3xl text-center">
            <img src={logo2} alt="Shree Painting Logo" className="h-20 mx-auto mb-4" data-aos="fade-down" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-100 to-amber-100 bg-clip-text text-transparent drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000">
              About Shree Painting & Waterproofing Services
            </h1>
            <p className="text-xl text-white drop-shadow-md">
              With over 12 years of experience in the painting and waterproofing industry, 
              we've built our reputation on quality workmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2012, Shree Painting & Waterproofing Services began as a small family business 
                  with a simple mission: to provide high-quality painting and waterproofing solutions 
                  that exceed customer expectations. What started with just Pravin and a vision has blossomed into something extraordinary.
                </p>
                <p>
                  Over a decade of dedicated service has seen us complete over 1,500 projects—from intimate 
                  residential homes to sprawling commercial complexes across Pimpari Chinchwad and nearby regions. 
                  Each project taught us something valuable, and each satisfied customer became part of our growing family.
                </p>
                <p>
                  Today, we're proud to maintain our promise: premium materials, skilled craftsmanship, transparent pricing, 
                  and respect for your time. Our success isn't measured in numbers alone—it's measured in 
                  the trust of families who've invited us into their homes, and businesses who've chosen us for their most important spaces.
                </p>
                <p className="font-semibold text-gray-800">
                  This is more than just a business for us. It's about creating spaces people love to be in.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img 
                src="https://goodhomes.wwmindia.com/content/2022/dec/wall-painting-design-david-pisnoy-on-unsplash1670857733.jpg"
                alt="Our team at work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center" data-aos="zoom-in-up" data-aos-delay={`${index * 150}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Meet our skilled professionals who bring years of experience and dedication to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-style text-center hover:shadow-xl transition-shadow border-t-4 border-orange-500" data-aos="flip-right" data-aos-delay={`${index * 200}`}>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2 text-lg">{member.role}</p>
                <p className="text-gray-600 font-medium mb-4">{member.experience} in the industry</p>
                
                <div className="mb-4 pb-4 border-b border-orange-200">
                  <p className="text-sm text-gray-500 uppercase font-semibold mb-3">Specialties</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 italic text-sm">
                  {member.role === "Founder & Lead Contractor" 
                    ? "Visionary leader ensuring every project exceeds expectations"
                    : "Dedicated professional mastering the art of quality workmanship"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
              Our Values
            </h2>
            <p className="text-xl text-gray-50" data-aos="fade-up" data-aos-delay="200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-50">
                We never compromise on quality. Every project receives the same attention to detail and commitment to excellence.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-50">
                Our customers are at the heart of everything we do. We listen, understand, and deliver exactly what you need.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-50">
                We stay updated with the latest techniques and materials to provide the best possible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Why Choose Shree Painting?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4" data-aos="zoom-in"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Here's what sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all" data-aos="zoom-in-up" data-aos-delay={`${index * 100}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4" data-aos="zoom-in"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Real feedback from real customers who've experienced our service
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {getVisibleTestimonials().map((testimonial, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-600"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center pt-4 border-t border-orange-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-6">
              <button 
                onClick={getPrevTestimonials} 
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <span className="text-xl">←</span> Back
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i * 3)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      Math.floor(testimonialIndex / 3) === i 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 w-8' 
                        : 'bg-gray-300 hover:bg-orange-400'
                    }`}
                    aria-label={`Go to testimonial group ${i + 1}`}
                  ></button>
                ))}
              </div>

              <button 
                onClick={getNextTestimonials} 
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Next <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in" data-aos-duration="1000">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-50 max-w-2xl mx-auto">
            Experience the difference that comes from working with experienced professionals who care about your project as much as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Get Started Today
            </Link>
            <a href={`tel:${contactNumber}`} className="btn-secondary border-2 border-white hover:bg-white hover:text-orange-600 font-semibold">
              Call: {contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;