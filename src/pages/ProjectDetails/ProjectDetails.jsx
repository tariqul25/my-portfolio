import { useParams, useNavigate } from 'react-router';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Historical Artifacts Tracker",
      description: "A comprehensive web application designed for browsing, adding, and managing historical artifacts with secure authentication system and interactive like functionality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React", "MongoDB", "Express.js", "JWT", "Node.js", "Tailwind CSS"],
      features: [
        "Complete CRUD operations for artifacts management",
        "JWT-based authentication with protected routes",
        "Real-time like system with toggle functionality",
        "Responsive design for all devices",
        "Search and filter functionality",
        "User profile management"
      ],
      liveLink: "https://historical-artifacts-8b68f.web.app/",
      githubLink: "https://github.com/tariqul25/Historical-Artifacts-Client.git",
      challenges: [
        "Implementing secure JWT authentication while maintaining user experience",
        "Designing an efficient database schema for artifact categorization",
        "Creating responsive layouts that work across all device sizes",
        "Optimizing image loading and storage for artifact photos"
      ],
      improvements: [
        "Add advanced search filters with multiple parameters",
        "Implement user roles (admin, curator, visitor)",
        "Add social sharing functionality for artifacts",
        "Create a mobile app version using React Native",
        "Integrate with museum APIs for expanded artifact database"
      ]
    },
    {
      id: 2,
      title: "Gardening Community Hub",
      description: "A vibrant community platform connecting gardening enthusiasts to share knowledge, discover local gardeners, organize events, and build meaningful connections.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "React Router", "Context API"],
      features: [
        "Full CRUD operations for gardening tips and advice",
        "Multi-authentication system (Email & Google)",
        "Advanced filtering and categorization system",
        "Interactive like and comment system",
        "Event creation and management",
        "Location-based gardener discovery"
      ],
      liveLink: "https://garden-guidance.web.app/",
      githubLink: "https://github.com/tariqul25/Garden-Guidance-Client.git",
      challenges: [
        "Integrating multiple authentication providers seamlessly",
        "Creating an intuitive filtering system for diverse content",
        "Managing real-time updates across multiple users",
        "Optimizing Firebase queries for better performance"
      ],
      improvements: [
        "Add plant identification using AI/ML",
        "Implement weather integration for gardening tips",
        "Create marketplace for gardening tools and plants",
        "Add video tutorial support",
        "Develop notification system for events and updates"
      ]
    },
    {
      id: 3,
      title: "BillEase Manager",
      description: "A secure and user-friendly web application for managing and paying various utility bills including electricity, gas, water, and internet services with integrated balance management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express.js", "Stripe API"],
      features: [
        "Comprehensive bill viewing and payment system",
        "Secure authentication with password recovery",
        "Real-time balance management and deduction",
        "Complete payment history tracking",
        "Profile management and updates",
        "Multiple payment method integration"
      ],
      liveLink: "https://easypaybd.netlify.app",
      githubLink: "https://github.com/tariqul25/Bill-Pay.git",
      challenges: [
        "Implementing secure payment processing with proper validation",
        "Creating reliable balance calculation and transaction tracking",
        "Designing user-friendly interfaces for complex billing data",
        "Ensuring data security and privacy compliance"
      ],
      improvements: [
        "Add automatic bill reminders and notifications",
        "Implement recurring payment scheduling",
        "Create mobile app for on-the-go bill management",
        "Add bill splitting functionality for shared expenses",
        "Integrate with bank APIs for automatic payments"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="text-white hover:text-purple-300 transition-colors flex items-center"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </button>
            <h1 className="text-xl font-bold text-white">Project Details</h1>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">Technology Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-800/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="mr-3 h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">Project Links</h2>
                <div className="space-y-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Challenges */}
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">Development Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="mr-3 h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">Future Improvements</h2>
                <ul className="space-y-4">
                  {project.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="mr-3 h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;