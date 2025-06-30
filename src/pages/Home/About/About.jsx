import React from 'react';
import profile from '../../../assets/images/tariqul.png';
import Lottie from 'lottie-react';

const About = () => {
  return (
    <div id="about" className="mt-4">
      <h2 className="text-2xl md:text-3xl text-center  mb-6 font-bold">About Me</h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        
        {/* Lottie Animation */}
        <div className='flex items-center justify-center'>
          <img className=' md:w-5/12' src={profile} alt="" />
        </div>

        {/* About Content */}
        <div className="w-full md:w-7/12 text-justify">
          <h1 className="mb-2 text-xl md:text-2xl">Who am I?</h1>
          <p className="mb-4">
           Hi, I'm Tariqul — a passionate junior web developer eager to build user-friendly projects that solve real-world problems. My deep curiosity about technology led me into this field, and I’m now pursuing a Diploma in Computer Science and Technology at Kishoreganj Polytechnic Institute to strengthen my skills and knowledge. I love learning new tools, exploring fresh ideas, and keeping up with the latest trends in web development.
          </p>
          <p className="mb-4">
            Beyond coding, I actively lead Progress-21, a friendship community that connects people and supports social welfare. During school, I served as Chief of the Student Cabinet, where I motivated and guided my peers. I always strive to be responsible, punctual, and supportive of my community.
          </p>
          <h3 className="font-semibold mb-1">What Drives Me?</h3>
          <p>Passion, curiosity, and initiative fuel me to learn, grow, and make an impact.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
