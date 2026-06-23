import { useEffect, useRef } from "react";
import { FaBriefcase, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

const experience = [
    {
        icon: <FaBriefcase />,
        title: "Java Full Stack Developer Intern",
        company: "G-soft solution pvt ltd pune",
        year: "2026",
        description: "Gained hands-on experience in building scalable full-stack applications. Developed RESTful APIs using Java, Spring Boot, and Hibernate on the backend, while creating responsive and dynamic user interfaces with React.js and HTML/CSS on the frontend. Collaborated with senior developers to optimize database queries and deploy applications."
    }
];

function Experience() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (timelineRef.current) {
            const items = timelineRef.current.querySelectorAll(".timeline-item");
            items.forEach((item) => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        My <span className="accent">Experience</span>
                    </h2>
                </div>

                <div className="timeline" ref={timelineRef}>
                    {experience.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-college">{item.company}</p>
                                <div className="timeline-desc" style={{ color: "var(--text-medium)", fontSize: "0.95rem" }}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
