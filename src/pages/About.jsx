const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        {/* ── Section Title ── */}
        <div className="text-center mb-5">
          <h2 className="about-section-title">
            <i className="fa-solid fa-user me-2" />
            About <span className="accent">Me</span>
          </h2>
        </div>

        {/* ── Content Row ── */}
        <div className="row align-items-center g-5">

          {/* Left — Photo */}
          <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center">
            <div className="about-img-wrapper">
              <img
                src="/Rohan_Shelke_Image.jpeg"
                alt="Rohan Shelke"
                className="about-img"
              />
            </div>
          </div>

          {/* Right — Info */}
          <div className="col-lg-7 col-md-6 col-12">
            <h3 className="about-name mb-1">I'm Rohan</h3>
            <p className="about-role mb-3">Full Stack Developer</p>

            <p className="about-bio mb-4">
              I am a Full-Stack Developer based in Pune, India. I am passionate about building modern web applications using React.js, Node.js, Express.js, and MySQL. I enjoy improving my coding skills, developing responsive websites, and working on real-world full-stack projects.

            </p>

            {/* Details */}
            <div className="about-details mb-4">
              <p className="about-detail-item">
                <span className="about-detail-label">Email :</span>
                <a href="mailto:rohanshelke@gmail.com" className="about-detail-value">
                  shelkerohan555@gmail.com
                </a>
              </p>
              <p className="about-detail-item">
                <span className="about-detail-label">Place :</span>
                <span className="about-detail-value">Pune, India - 411001</span>
              </p>
            </div>

            {/* Resume Button */}
            <a
              href="/Rohan_Shelke_Resume.pdf"
              className="btn about-resume-btn"
              id="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume &nbsp;<i className="fa-solid fa-chevron-right" />
            </a>
          </div>

        </div>
      </div>

      {/* ── Scroll to top ── */}
      <a href="#home" className="scroll-top-btn" aria-label="Back to top" id="scroll-top-btn">
        <i className="fa-solid fa-chevron-up" />
      </a>
    </section>
  );
};

export default About;
