import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiSwiper,
  SiNetlify,
  SiVercel,
  SiJsonwebtokens,
  SiReactrouter,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Historical Artifacts Tracker",
    image: "https://via.placeholder.com/600x400",
    description:
      "A web app for browsing, adding, and managing historical artifacts with secure authentication and a like system.",
    coreFeatures: [
      "Add, Update & Delete Artifacts (CRUD)",
      "JWT Authentication & Protected Routes",
      "Like System with Toggle & Realtime Count",
    ],
    modal: {
      name: "Historical Artifacts Tracker",
      features: [
        "Google popup login & register",
        "JWT Protected Private Routes",
        "Dynamic website title per route",
        "Slider + Extra Sections on Home",
        "Loading Spinner on data load",
        "404 Not Found Page",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "JWT",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React Router",
        "Framer Motion",
        "Netlify",
        "Vercel",
      ],
    },
    techStack: [
      { name: "React", icon: <SiReact className="text-sky-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    liveLink: "https://historical-artifacts-tra-b9b41.web.app/",
    githubLink: "https://github.com/tariqul25/Historical-Artifacts-Client",
  },
  {
    id: 2,
    title: "Gardening Community Hub",
    image: "https://via.placeholder.com/600x400",
    description:
      "A community platform for gardening enthusiasts to share tips, find local gardeners, post events, and connect with others.",
    coreFeatures: [
      "Share, Update & Delete Gardening Tips (CRUD)",
      "Authentication with Email/Google & Protected Routes",
      "Filter & Like System for Tips",
    ],
    modal: {
      name: "Gardening Community & Resource Hub",
      features: [
        "Google popup login & register",
        "Fully responsive design",
        "Light/Dark theme toggle",
        "Protected routes with JWT",
        "CRUD: Add/Update/Delete Tips",
        "Like button & count in DB",
        "Integrated animations",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "JWT",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React Router",
        "Framer Motion",
        "Netlify",
        "Vercel",
      ],
    },
    techStack: [
      { name: "React", icon: <SiReact className="text-sky-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    liveLink: "https://garden-guidance.web.app/",
    githubLink: "https://github.com/tariqul25/Garden-Guidance-Client",
  },
  {
    id: 3,
    title: "BillEase Manager",
    image: "https://via.placeholder.com/600x400",
    description:
      "A secure web application to view, manage, and pay various utility bills like electricity, gas, water, and internet using your account balance.",
    coreFeatures: [
      "View & Pay Utility Bills with Balance Deduction",
      "Secure Authentication with Google & Email + Forget Password",
      "Profile Update & Paid Bill History",
    ],
    modal: {
      name: "Bill Management Website",
      features: [
        "Google popup login & register",
        "Password reset (Forget Password)",
        "Fully responsive layout",
        "Protected Routes for Bills/Profile",
        "Real-time balance deduction",
        "No duplicate payments",
        "Filter bills by type",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Firebase Hosting",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "React Router",
        "SwiperJS",
        "Netlify",
      ],
    },
    techStack: [
      { name: "React", icon: <SiReact className="text-sky-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    liveLink: "https://easypaybd.netlify.app",
    githubLink: "https://github.com/tariqul25/Bill-Pay",
  },
];

// Icon map for modal tech badges
const techIconsMap = {
  React: <SiReact className="text-sky-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  "Firebase Hosting": <SiFirebase className="text-orange-500" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-800" />,
  "Express.js": <SiExpress className="text-gray-800" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  JWT: <SiJsonwebtokens className="text-orange-600" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  SwiperJS: <SiSwiper className="text-blue-500" />,
  Netlify: <SiNetlify className="text-green-500" />,
  Vercel: <SiVercel className="text-black" />,
  "React Router": <SiReactrouter className="text-red-600" />,
  "React-Router": <SiReactrouter className="text-red-600" />,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className={`max-w-7xl mx-auto px-4 transition-opacity duration-300 ${
          selectedProject ? "opacity-40" : "opacity-100"
        }`}
      >
        <h2 className="text-3xl font-bold  text-center">My Projects</h2>
        <p className="text-center w-10/12 mx-auto mb-8 ">Showcasing projects that reflect my growth as a developer and passion for building user-friendly applications.These works demonstrate my ability to turn ideas into functional, real-world solutions.</p>

        <div className="space-y-12">
          {projects.map((project) => {
            let aosEffect;
            if (project.id === 1) aosEffect = "fade-down-right";
            else if (project.id === 2) aosEffect = "fade-down-left";
            else if (project.id === 3) aosEffect = "fade-down-right";

            return (
              <div
                key={project.id}
                data-aos={aosEffect}
                className="flex flex-col md:flex-row md:items-center md:space-x-8 border border-gray-300 rounded-xl p-6 shadow-md"
              >
                <div className="flex-1 mb-6 md:mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-3 text-gray-700">{project.description}</p>
                  <h4 className="text-lg font-semibold mb-1">Features:</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    {project.coreFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((item, i) => (
                      <span
                        key={i}
                        className="p-2 -200 rounded-full text-xl"
                        title={item.name}
                      >
                        {item.icon}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-transparent bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="bg-gray-300 p-6 rounded-lg w-full max-w-3xl relative overflow-auto"
            style={{ maxHeight: "70vh" }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-600 text-xl"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {selectedProject.modal.name}
            </h3>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                {selectedProject.modal.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.modal.tech.map((techName, i) => (
                  <span
                    key={i}
                    className="p-2 bg-gray-200 btn btn-circle text-2xl"
                    title={techName}
                  >
                    {techIconsMap[techName] || <span>{techName}</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
