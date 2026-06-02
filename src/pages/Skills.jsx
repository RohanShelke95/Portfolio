import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaJava,
    FaGithub
} from "react-icons/fa";

import {
    SiJavascript,
    SiExpress,
    SiMysql
} from "react-icons/si";

const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> }
];

function Skills() {
    return (
        <section id="skills" className="skills py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        My <span className="accent">Skills</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="icon">{skill.icon}</div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;