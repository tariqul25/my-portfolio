import React from 'react';
import animationData from '../../../assets/academic.json';
import Lottie from 'lottie-react';

const About = () => {
  return (
    <div id="about" className="px-4 md:px-12 py-8">
      <h2 className="text-2xl md:text-3xl text-center my-4 font-bold">About Me</h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        
        {/* Lottie Animation */}
        <div className="w-full md:w-5/12 h-52 md:h-64 flex justify-center">
          <Lottie
            animationData={animationData}
            aria-label="Academic animation"
            className="w-full h-full max-w-[300px] md:max-w-full"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-7/12 text-justify">
          <h1 className="mb-2 text-xl md:text-2xl">Who am I?</h1>
          <p className="mb-4">
            Hi, I'm Tariqul — a passionate Jr. web developer focused on building user-friendly projects that solve real-world problems. I came into this tech industry with my deep curiosity for technology and how it works. I am currently pursuing my Diploma in Computer Science and Technology at Kishoreganj Polytechnic Institute, where I am building a solid foundation in computer science. I love learning new tools, exploring ideas, and keeping up with the latest trends.
          </p>
          <p className="mb-4">
            Beyond coding, I actively take on lead roles to grow personally and support my community. I am the Chief Coordinator of Progress-21, a friendship community that brings friends together and contributes to social welfare. During my school years, I was elected as the Chief of the Student Cabinet, where I led and inspired my fellow students. I always strive to be punctual.
          </p>
          <h3 className="font-semibold mb-1">What Drives Me?</h3>
          <p>Passion, curiosity, and initiative fuel me to learn, grow, and make an impact.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
