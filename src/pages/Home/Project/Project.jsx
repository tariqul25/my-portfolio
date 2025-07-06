import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Historical Artifacts Tracker",
    description:
      "A web app for browsing, adding, and managing historical artifacts with secure authentication and a like system.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    technologies: ["React", "MongoDB", "Express.js", "JWT"],
    features: [
      "Add, Update & Delete Artifacts (CRUD)",
      "JWT Authentication & Protected Routes",
      "Like System with Toggle & Realtime Count",
    ],
  },
  {
    id: 2,
    title: "Gardening Community Hub",
    description:
      "A community platform for gardening enthusiasts to share tips, find local gardeners, post events, and connect with others.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "Share, Update & Delete Gardening Tips (CRUD)",
      "Authentication with Email/Google & Protected Routes",
      "Filter & Like System for Tips",
    ],
  },
  {
    id: 3,
    title: "BillEase Manager",
    description:
      "A secure web application to view, manage, and pay various utility bills like electricity, gas, water, and internet using your account balance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    features: [
      "View & Pay Utility Bills with Balance Deduction",
      "Secure Authentication with Google & Email + Forget Password",
      "Profile Update & Paid Bill History",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          My Projects
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Showcasing projects that reflect my growth as a developer and passion
          for building user-friendly applications. These works demonstrate my
          ability to turn ideas into functional, real-world solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-black/20 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 transition-all duration-300 hover:scale-105 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link to={`/project/${project.id}`}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
                      View Details
                      <svg
                        className="ml-2 h-4 w-4 animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
