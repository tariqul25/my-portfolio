import React from "react";

const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
  ],
  backend: [
    { name: "Firebase", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "JWT", level: 90 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "npm", level: 80 },
    { name: "VS Code", level: 90 },
  ],
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:scale-105 hover:shadow-2xl transition-all duration-700">
            <h3 className="text-purple-400 text-xl font-semibold mb-6 flex items-center">
              <svg
                className="mr-2 h-5 w-5 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Frontend
            </h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="transform transition-all duration-500 hover:translate-x-2"
                >
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:scale-105 hover:shadow-2xl transition-all duration-700">
            <h3 className="text-purple-400 text-xl font-semibold mb-6 flex items-center">
              <svg
                className="mr-2 h-5 w-5 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              Backend
            </h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div
                  key={skill.name}
                  className="transform transition-all duration-500 hover:translate-x-2"
                >
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:scale-105 hover:shadow-2xl transition-all duration-700">
            <h3 className="text-purple-400 text-xl font-semibold mb-6 flex items-center">
              <svg
                className="mr-2 h-5 w-5 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Tools
            </h3>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div
                  key={skill.name}
                  className="transform transition-all duration-500 hover:translate-x-2"
                >
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
