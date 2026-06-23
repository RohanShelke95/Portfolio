import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'];

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActive(link);
    const collapseEl = document.getElementById('portfolioNav');
    if (collapseEl && collapseEl.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) toggler.click();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <span style={{ color: 'var(--primary)', fontSize: '1.3rem' }}>⚙</span>
          Rohan
        </a>

        {/* Action buttons wrapper for mobile alignments */}
        <div className="d-flex align-items-center gap-2 order-lg-3">
          {/* Theme Switcher Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun style={{ color: 'var(--accent)' }} />}
          </button>

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
        </div>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end order-lg-2" id="portfolioNav">
          <ul className="navbar-nav gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link ${active === link ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link)}
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
