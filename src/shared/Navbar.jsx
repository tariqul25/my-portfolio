import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
    return (
       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-xl font-bold text-white"><span>TARIQUL</span></h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;