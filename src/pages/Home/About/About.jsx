import React from 'react';
import animationData from '../../../assets/academic.json'
import Lottie from 'lottie-react';

const About = () => {
    return (
      <div id='about'>
        <h2 className='text-3xl text-center my-6 font-bold'>About Me</h2>
          <div className='w-full flex gap-3'>
           <div className="w-5/12 h-64">
                        <Lottie animationData={animationData} aria-label="Academic animation" />
                    </div>
          <div className='w-7/12'>
              <h1 className='my-2 text-2xl'>Who am I?</h1>
            <p className='text-justify'>Hi, I'm Tariqul -passionate Jr. web developer focused on building user-friendly projects that solve real-world problems.I came into this  tech industry with my deep curiosity for technology and how it works.I am currently pursuing my Diploma in Computer Science and Technology at Kishoreganj Polytechnic Institute, where I am building a solid foundation in computer science. I love learning new tools, exploring ideas, and keeping up with the latest trends.<br />Beyond coding, I actively take on lead roles to grow personally and support my community. I am the Chief Coordinator of Progress-21, a friendship community that brings friends together and contributing Social Welfare. During my school years, I was elected as the Chief of the Student Cabinet, where I led and inspired my fellow students.I always strive to be punctual.</p>
            <br />
            <p>What Drives Me?</p>
            <p>Passion, curiosity, and Initiative fuel me to learn, grow, and make an impact.</p>

          </div>
        </div>
      </div>
    );
};

export default About;