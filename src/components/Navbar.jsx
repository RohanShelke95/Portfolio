import { useState, useEffect } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center gap-1" href="#home">
          <span style={{ color: 'var(--primary)', fontSize: '1.4rem' }}>⚙</span>
          Rohan
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="portfolioNav">
          <ul className="navbar-nav gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link ${active === link ? 'active' : ''}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
