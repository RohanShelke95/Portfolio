import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from "react-icons/fa";

const projectsData = [
  {
    title: "Full-Stack E-Commerce Platform",
    category: "Full-Stack Web Development",
    image: "/projects/ecommerce.png",
    description: "A comprehensive, enterprise-level full-stack e-commerce marketplace featuring robust backend systems and a highly dynamic, responsive user interface.",
    features: [
      "Secure User Authentication & Authorization using JWT and role-based permissions.",
      "Comprehensive Admin Dashboard for inventory, product, user, and order management.",
      "Seamless Razorpay Payment Gateway integration for safe transactions.",
      "Optimized Database Schema with MySQL for high concurrent users and caching.",
      "Automated Email notification alerts for signup, orders, and payment updates."
    ],
    tech: ["Java", "Spring Boot", "React.js", "Redux", "MySQL", "Material UI", "TailwindCSS", "Razorpay"],
    demoUrl: "#",
    githubUrl: "https://github.com/shelkerohan555"
  },
  {
    title: "AI-Enhanced Internship Platform",
    category: "AI & Web Integration",
    image: "/projects/internship.png",
    description: "A smart platform engineered to automate recruitment workflows, offering intelligent resume screening and applicant matching.",
    features: [
      "AI-driven resume parsing and custom scoring match algorithms.",
      "Intuitive applicant tracking dashboard with visual pipeline stages.",
      "Comprehensive employer dashboard to post job profiles and shortlist candidates.",
      "Automated email updates triggered by application status changes.",
      "SQLite / SQLAlchemy database management with schema migrations."
    ],
    tech: ["Python", "Flask", "SQLite", "SQLAlchemy", "AI Engine", "HTML5", "CSS3", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/shelkerohan555"
  },
  {
    title: "Real-Time ChatBox Application",
    category: "Real-time Messaging",
    image: "/projects/chatbox.png",
    description: "A dynamic real-time communication platform designed to offer lag-free messaging experience across web browsers.",
    features: [
      "Instant real-time message broadcasting using WebSockets (Socket.io).",
      "Dynamic chat room creation and automatic online/offline status indicators.",
      "Message history persistence in database for retrieval.",
      "Typing state notifications and desktop notification integrations."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "CSS3", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/shelkerohan555"
  },
  {
    title: "Book Management System",
    category: "CRUD Inventory App",
    image: "/projects/booksystem.png",
    description: "A structured administration tool created to manage a library's catalog, loan tracking, and inventory status.",
    features: [
      "Complete CRUD functionality for book registry and member directories.",
      "Advanced filtering, full-text search, and multi-column sorting capabilities.",
      "Borrowing tracker that automatically calculates return due dates.",
      "Responsive UI built with Bootstrap components and styled elements."
    ],
    tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "JSON-Server", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/shelkerohan555"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent body scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable body scroll
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">
            My <span className="accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent full-stack applications, AI integrations, and technical challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div className="col-lg-6 col-md-6 col-12" key={index}>
              <div className="project-card" onClick={() => openModal(project)}>
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <span className="view-details-btn">View Details</span>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-badges">
                    {project.tech.slice(0, 4).map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge tech-badge-more">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Detail Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeModal}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className="row g-0 h-100">
              {/* Left column: image */}
              <div className="col-lg-6 modal-img-col">
                <div className="modal-img-wrapper">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-img"
                  />
                </div>
              </div>

              {/* Right column: details */}
              <div className="col-lg-6 modal-details-col">
                <span className="modal-project-category">{selectedProject.category}</span>
                <h3 className="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-project-desc">{selectedProject.description}</p>

                <h4 className="modal-section-heading">Key Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>

                <h4 className="modal-section-heading">Technologies Used</h4>
                <div className="modal-tech-badges">
                  {selectedProject.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="modal-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="modal-actions-wrapper">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github d-inline-flex align-items-center gap-2"
                  >
                    <FaGithub /> GitHub Repository
                  </a>
                  {selectedProject.demoUrl !== "#" && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-demo d-inline-flex align-items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
