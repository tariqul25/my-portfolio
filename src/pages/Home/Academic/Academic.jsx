import React from "react";

export default function Academic() {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Academic Journey
        </h2>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl text-purple-400 mb-2">
            Diploma in Computer Science and Technology (CST)
          </h3>
          <p className="text-gray-300 mb-4">
            KPI - Kishoreganj Polytechnic Institute
          </p>
          <div className="flex items-center text-gray-300 mb-4">
            <svg
              className="mr-2 h-4 w-4 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11m-6 0V9a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h8"
              />
            </svg>
            <span>2022 - Present</span>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="transform transition-all duration-500 hover:translate-x-2">
              • Studying computer science fundamentals with a focus on web
              development and modern frameworks
            </li>
            <li className="transform transition-all duration-500 hover:translate-x-2">
              • Learning to build real-world web projects to sharpen coding,
              design, and problem-solving skills
            </li>
            <li className="transform transition-all duration-500 hover:translate-x-2">
              • Focused on mastering full-stack skills to build complete and
              efficient web solutions
            </li>
            <li className="transform transition-all duration-500 hover:translate-x-2">
              • Continuously expanding practical skills to deliver reliable and
              impactful web solutions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
