import { useEffect, useRef } from "react";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const education = [
    {
        icon: <FaGraduationCap />,
        degree: "Bachelor of Computer Science (BCS)",
        college: "Balbhim Arts, Science and Commerce College, Beed",
        university: "Dr. Babasaheb Ambedkar Marathwada University (BAMU)",
        year: "2022 - 2025",
        score: "CGPA: 8.04"
    },
    {
        icon: <FaSchool />,
        degree: "Higher Secondary Certificate (Science)",
        college: "Bhalchandra Vidyalay, Limbaganesh",
        year: "2020 - 2021",
        score: "79.50%"
    },
    {
        icon: <FaBook />,
        degree: "Secondary School Certificate",
        college: "Bhalchandra Vidyalay, Limbaganesh",
        year: "2018 - 2019",
        score: "70.60%"
    }
];

function Education() {
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
        <section id="education" className="education py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        My <span className="accent">Education</span>
                    </h2>
                </div>

                <div className="timeline" ref={timelineRef}>
                    {education.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.degree}</h3>
                                <p className="timeline-college">{item.college}</p>
                                {item.university && (
                                    <p className="timeline-university">{item.university}</p>
                                )}
                                <div className="timeline-score">{item.score}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;