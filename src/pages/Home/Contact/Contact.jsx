import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Me
        </h2>
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:scale-105 hover:shadow-2xl transform transition-all duration-1000">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center text-gray-300 transform transition-all duration-300 hover:translate-x-2 hover:text-purple-300">
                <svg className="mr-3 h-5 w-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kishoreganj, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center text-gray-300 transform transition-all duration-300 hover:translate-x-2 hover:text-purple-300">
                <svg className="mr-3 h-5 w-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+8801703301137</span>
              </div>
              <div className="flex items-center text-gray-300 transform transition-all duration-300 hover:translate-x-2 hover:text-purple-300">
                <svg className="mr-3 h-5 w-5 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>imtariqul21@gmail.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => window.open('mailto:imtariqul21@gmail.com')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
              <button
                onClick={() => window.open('tel:+8801703301137')}
                className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
