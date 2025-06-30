import Lottie from 'lottie-react';
import React from 'react';
import academicLottie from '../../../assets/academic.json';

const Academic = () => {
  return (
    <section id="academic" className="px-4  py-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-6">Academic Journey</h1>
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        
        {/* Lottie Animation */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="w-full h-52 md:h-64 max-w-[300px] md:max-w-full">
            <Lottie animationData={academicLottie} aria-label="Academic animation" />
          </div>
        </div>

        {/* Academic Details */}
        <div className="w-full md:w-7/12 px-0 md:px-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Diploma in Computer Science and Technology (CST)
          </h2>
          <p className="mb-1 font-medium">KPI - Kishoreganj Polytechnic Institute</p>
          <p className="mb-4 text-gray-600">2022 - Present</p>
          <ul className="list-disc list-inside space-y-3 text-justify">
            <li>
              Studying computer science fundamentals with a focus on web development and modern frameworks.
            </li>
            <li>
              Learning to build real-world web projects to sharpen coding, design, and problem-solving skills.
            </li>
            <li>
              Focused on mastering full-stack skills to build complete and efficient web solutions.
            </li>
            <li>
              Continuously expanding practical skills to deliver reliable and impactful web solutions.
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Academic;
