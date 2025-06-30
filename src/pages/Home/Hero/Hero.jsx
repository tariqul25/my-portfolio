import React from 'react';
import { FaDownload, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import profile from '../../../assets/images/banner1.png';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your/file.pdf"; // Replace with your file path
    link.download = "MyFile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-24 pt-8 gap-6">
      {/* Left Content */}
      <div className="w-full md:w-7/12 text-center md:text-left">
        <h2 className="text-lg md:text-xl mb-2">Hey There!</h2>
        <h1 className="text-2xl md:text-3xl mb-2">
          I'm <span className="font-bold">MD TARIQUL ISLAM</span>
        </h1>
        <p className="text-xl md:text-2xl mb-3">- Jr. Web Developer</p>
        <p className="mb-4">Coding interactive experiences with passion and precision</p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-2 mb-4">
          <a href="#" className="btn btn-circle bg-gray-300"><IoLogoGithub /></a>
          <a href="#" className="btn btn-circle bg-gray-300"><FaLinkedinIn /></a>
          <a href="#" className="btn btn-circle bg-gray-300"><FaXTwitter /></a>
          <a href="#" className="btn btn-circle bg-gray-300"><FaFacebook /></a>
        </div>

        {/* Download Button */}
       <div className='flex justify-center md:justify-start'>
         <button
          onClick={handleDownload}
          className="btn btn-accent text-white flex items-center gap-2"
        >
          Hire Me <FaDownload  />
        </button>
       </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="w-full md:w-5/12 flex justify-center">
       <img
  src={profile}
  alt="Profile"
  className="w-48 md:w-full max-w-[300px] md:max-w-[400px] rounded-full object-cover transform rotate-8 hover:rotate-0"
/>

      </div>
    </div>
  );
};

export default Hero;
