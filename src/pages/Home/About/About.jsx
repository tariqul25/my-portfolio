import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 opacity-100 translate-y-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:scale-105 hover:shadow-2xl transition-all duration-1000">
          <h3 className="text-2xl text-purple-400 mb-6">Who am I?</h3>
          <div className="space-y-4 text-gray-300">
            <p className="transform transition-all duration-500 hover:translate-x-2">
              Hi, I'm Tariqul — a passionate junior web developer eager to build
              user-friendly projects that solve real-world problems. My deep
              curiosity about technology led me into this field, and I'm now
              pursuing a Diploma in Computer Science and Technology at
              Kishoreganj Polytechnic Institute to strengthen my skills and
              knowledge.
            </p>
            <p className="transform transition-all duration-500 hover:translate-x-2">
              I love learning new tools, exploring fresh ideas, and keeping up
              with the latest trends in web development. Beyond coding, I
              actively lead Progress-21, a friendship community that connects
              people and supports social welfare.
            </p>
            <p className="transform transition-all duration-500 hover:translate-x-2">
              During school, I served as Chief of the Student Cabinet, where I
              motivated and guided my peers. I always strive to be responsible,
              punctual, and supportive of my community.
            </p>
            <div className="mt-6 transform transition-all duration-500 hover:translate-x-2">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                What Drives Me?
              </h3>
              <p className="italic">
                Passion, curiosity, and initiative fuel me to learn, grow, and
                make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
