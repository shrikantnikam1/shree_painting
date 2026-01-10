import React from 'react';

const Footer = () => {
  const contactNumber = '7769941729';
  const address = 'Pimpari Chinchwad - 411017';
  const email = 'shreepaintingservices@gmail.com';

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shree Painting & Waterproofing Services</h3>
            <p className="text-gray-300 mb-4">
              Professional painting and waterproofing solutions with years of experience. 
              Quality workmanship guaranteed.
            </p>
            <div className="flex space-x-4">
              <span className="text-secondary font-semibold">Est. Since 2015</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contactNumber}`} className="hover:text-secondary transition-colors">
                  {contactNumber}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="hover:text-secondary transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Interior Painting</li>
              <li>• Exterior Painting</li>
              <li>• Waterproofing</li>
              <li>• Wall Putty & Primer</li>
              <li>• Texture Painting</li>
              <li>• Commercial Projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shree Painting & Waterproofing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;