import React, { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJsonwebtokens,
  SiGit,
  SiNpm
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const frontend = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, percent: 90 },
  { name: "CSS", icon: <SiCss3 className="text-accent" />, percent: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, percent: 80 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, percent: 85 },
  { name: "React", icon: <SiReact className="text-sky-500" />, percent: 80 },
];

const backend = [
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, percent: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, percent: 70 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, percent: 65 },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, percent: 70 },
  { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" />, percent: 60 },
];

const tools = [
  { name: "Git", icon: <SiGit className="text-orange-600" />, percent: 85 },
  { name: "npm", icon: <SiNpm className="text-red-600" />, percent: 80 },
  { name: "VS Code", icon: <VscVscodeInsiders className="text-blue-600" />, percent: 90 },
];

const maxLength = Math.max(frontend.length, backend.length, tools.length);
const itemHeight = 55;
const containerHeight = maxLength * itemHeight;

const fillTimes = (list) => {
  const times = Math.ceil((2 * maxLength) / list.length);
  return Array(times).fill(list).flat();
};

function SkillItem({ skill }) {
  return (
    <div className="mb-4 flex items-center space-x-3 min-h-[45px]">
      <div className="text-2xl">{skill.icon}</div>
      <div className="flex-1">
        <div className="flex justify-between mb-0.5">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-xs text-gray-600">{skill.percent}%</span>
        </div>
        <div className="w-full  rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full"
            style={{ width: `${skill.percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default function VerticalMarqueeSkills() {
  const sectionRef = useRef();
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartScroll(true);
        }
      },
      { threshold: 0.3 } // starts when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          background: white;
          border-radius: 8px;
          box-shadow: 0 0 8px rgb(0 0 0 / 0.1);
          padding: 12px;
        }
        .marquee-content {
          display: flex;
          flex-direction: column;
        }
        .animate {
          animation: scrollUp 12s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

      <section id="skills"
        ref={sectionRef}
        className="py-12 px-3"
      >
        <h2 id="skills" className="text-3xl font-bold text-center mb-10">Skills</h2>

        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-center">Frontend</h3>
            <div
              className="marquee-container"
              style={{ height: `${containerHeight}px` }}
            >
              <div className={`marquee-content ${startScroll ? "animate" : ""}`}>
                {[...frontend, ...frontend].map((skill, i) => (
                  <SkillItem key={i} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div data-aos="fade-up"> 
            <h3 className="text-xl font-semibold mb-3 text-center">Backend</h3>
            <div
              className="marquee-container"
              style={{ height: `${containerHeight}px` }}
            >
              <div
                className={`marquee-content ${startScroll ? "animate" : ""}`}
                style={{ animationDuration: "14s" }}
              >
                {[...backend, ...backend].map((skill, i) => (
                  <SkillItem key={i} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-3 text-center">Tools</h3>
            <div
              className="marquee-container"
              style={{ height: `${containerHeight}px` }}
            >
              <div
                className={`marquee-content ${startScroll ? "animate" : ""}`}
                style={{ animationDuration: "10s" }}
              >
                {fillTimes(tools).map((skill, i) => (
                  <SkillItem key={i} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
