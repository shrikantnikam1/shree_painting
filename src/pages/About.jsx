import React from 'react';
import { Link } from 'react-router-dom';
import amolImg from '../img/amol.jpeg';
import vaibhavImg from '../img/vaibhav-waterprofing-pic.jpeg';
import pravinImg from '../img/pravin-founder.jpeg';
import logoImg from '../img/shreepainting-logo.png';

const About = () => {
  const contactNumber = '7769941729';
  
  const teamMembers = [
    {
      name: "Pravin Salunkhe",
      role: "Founder & Lead Contractor",
      image: pravinImg,
      experience: "12+ Years"
    },
    {
      name: "Amol Salunkhe",
      role: "Senior Painter",
      image: amolImg,
      experience: "8+ Years"
    },
    {
      name: "Vaibhav Salunkhe",
      role: "Waterproofing Specialist",
      image: vaibhavImg,
      experience: "7+ Years"
    }
  ];

  const achievements = [
    { number: "1500+", label: "Projects Completed" },
    { number: "12+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Repeat Customers" }
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
            <img src={logoImg} alt="Shree Painting Logo" className="h-20 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Shree Painting & Waterproofing Services
            </h1>
            <p className="text-xl text-gray-200">
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, Shree Painting & Waterproofing Services began as a small family business 
                  with a simple mission: to provide high-quality painting and waterproofing solutions 
                  that exceed customer expectations.
                </p>
                <p>
                  What started as a one-man operation has grown into a trusted team of skilled professionals 
                  serving Pimpari Chinchwad and surrounding areas. We've completed over 1,500 projects, 
                  ranging from residential homes to commercial buildings.
                </p>
                <p>
                  Our commitment to using premium materials, maintaining competitive pricing, and 
                  delivering projects on time has earned us the trust of hundreds of satisfied customers 
                  who continue to recommend our services to their friends and family.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our skilled professionals who bring years of experience and dedication to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-style text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-200">
                We never compromise on quality. Every project receives the same attention to detail and commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-200">
                Our customers are at the heart of everything we do. We listen, understand, and deliver exactly what you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-200">
                We stay updated with the latest techniques and materials to provide the best possible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the difference that comes from working with experienced professionals who care about your project as much as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Get Started Today
            </Link>
            <a href={`tel:${contactNumber}`} className="btn-secondary border-2 border-white hover:bg-white hover:text-secondary">
              Call: {contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;