import { useState, useEffect } from 'react';
import ParticleCanvas from '../components/ParticleCanvas';

const roles = ['Software Developer', 'Front-end Developer', 'Back-end Developer', 'Full-Stack Web Developer', 'Java Developer', 'React Developer'];

const socialLinks = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fa-brands fa-github', href: 'https://github.com', label: 'GitHub' },
  { icon: 'fa-brands fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'fa-brands fa-telegram', href: 'https://telegram.org', label: 'Telegram' },
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
  { icon: 'fa-solid fa-envelope', href: 'mailto:jigar@email.com', label: 'Email' },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  /* Typewriter effect */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 55);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      {/* Animated particle background */}
      <ParticleCanvas />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center py-5">

          {/* ── Left Content ── */}
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <p className="hero-greeting mb-1">Hi There,</p>

            <h1 className="hero-title mb-2">
              I'm Rohan<span className="accent"> Shelke</span>
            </h1>

            <p className="hero-role mb-4">
              I Am Into&nbsp;
              <span className="typed">
                {displayed}
                <span className="cursor">|</span>
              </span>
            </p>

            <a href="#about" className="btn hero-btn mb-4" id="about-me-btn">
              About Me &nbsp;<i className="fa-solid fa-arrow-right" />
            </a>

            {/* Social Icons */}
            <div className="hero-socials d-flex flex-wrap gap-2 mt-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right Avatar ── */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-1 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-circle">
                <img src="/avatar.png" alt="Rohan Shelke" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
