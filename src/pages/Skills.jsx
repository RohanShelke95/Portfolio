import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaGitAlt, FaJava, FaGithub, FaBootstrap,
} from "react-icons/fa";
import {
    SiJavascript, SiExpress, SiMysql,
    SiSpringboot, SiRedux, SiPostman, SiMongodb,
} from "react-icons/si";

/* ── Skills grouped by row ── */
const rows = [
    {
        label:     "Frontend",
        emoji:     "🎨",
        color:     "#00d8ff",
        direction: "left",          // right → left
        skills: [
            { name: "HTML5",       icon: <FaHtml5 />,      color: "#e34f26" },
            { name: "CSS3",        icon: <FaCss3Alt />,     color: "#264de4" },
            { name: "JavaScript",  icon: <SiJavascript />,  color: "#f7df1e" },
            { name: "React.js",    icon: <FaReact />,       color: "#00d8ff" },
            { name: "Redux",       icon: <SiRedux />,       color: "#764abc" },
            { name: "Bootstrap",   icon: <FaBootstrap />,   color: "#7952b3" },
        ],
    },
    {
        label:     "Backend",
        emoji:     "⚙️",
        color:     "#6db33f",
        direction: "right",         // left → right
        skills: [
            { name: "Java",        icon: <FaJava />,        color: "#f89820" },
            { name: "Spring Boot", icon: <SiSpringboot />,  color: "#6db33f" },
            { name: "Node.js",     icon: <FaNodeJs />,      color: "#6cc24a" },
            { name: "Express.js",  icon: <SiExpress />,     color: "#b8b8b8" },
        ],
    },
    {
        label:     "Database",
        emoji:     "🗄️",
        color:     "#00a8cc",
        direction: "left",          // right → left
        skills: [
            { name: "MySQL",   icon: <SiMysql />,   color: "#00758f" },
            { name: "MongoDB", icon: <SiMongodb />, color: "#4db339" },
        ],
    },
    {
        label:     "Tools",
        emoji:     "🔧",
        color:     "#ff6c37",
        direction: "right",         // left → right
        skills: [
            { name: "Git",     icon: <FaGitAlt />,  color: "#f05032" },
            { name: "GitHub",  icon: <FaGithub />,  color: "#a0a0a0" },
            { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
        ],
    },
];

/* Repeat items enough times so the strip is always wider than the viewport */
const pad = (arr, times = 6) => Array.from({ length: times }, () => arr).flat();

function MarqueeRow({ row }) {
    const items = pad(row.skills);

    return (
        <div className="marquee-row">
            {/* Side label */}
            <div
                className="marquee-row-label"
                style={{ color: row.color, borderColor: row.color + "55" }}
            >
                <span className="marquee-row-emoji">{row.emoji}</span>
                <span>{row.label}</span>
            </div>

            {/* Scroll strip */}
            <div className="marquee-outer">
                <div className="marquee-fade marquee-fade-left" />
                <div className="marquee-fade marquee-fade-right" />

                <div
                    className={`marquee-track marquee-track--${row.direction}`}
                >
                    {items.map((skill, i) => (
                        <div className="marquee-card" key={i}>
                            <div className="marquee-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <p className="marquee-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section id="skills" className="skills py-5">
            {/* Title inside container */}
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        My <span className="accent">Skills</span>
                    </h2>
                    <p className="section-subtitle" style={{ marginBottom: 0 }}>
                        Technologies I build with, every day
                    </p>
                </div>
            </div>

            {/* 4 alternating marquee rows */}
            <div className="marquee-rows-wrapper">
                {rows.map((row) => (
                    <MarqueeRow key={row.label} row={row} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
