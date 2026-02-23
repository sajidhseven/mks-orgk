import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const toggleDropdown = (menu, e) => {
    if (e) e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="mks-header">
      <div className="mks-container">

        {/* LOGO */}
        <div className="mks-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Melbourne Kannada Sangha" />
          </Link>
        </div>

        {/* CENTER */}
        <div className="mks-center">
          <h1 className="mks-title">Melbourne Kannada Sangha</h1>

          <nav className={`mks-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>

              {/* ABOUT */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 991 && setActiveDropdown("about")}
                onMouseLeave={() => window.innerWidth > 991 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <Link to="/about" className="mks-nav-link" onClick={closeMenu}>
                    About
                  </Link>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "about" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("about", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "about" ? "show" : ""}`}>
                  <Link to="/committee-members" className="mks-drop-item" onClick={closeMenu}>
                    Committee Members
                  </Link>
                </div>
              </li>

              {/* EVENTS */}
              <li
                className="has-dropdown"
                onMouseEnter={() => window.innerWidth > 991 && setActiveDropdown("events")}
                onMouseLeave={() => window.innerWidth > 991 && setActiveDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <span className="mks-nav-link no-link">
                    Events
                  </span>
                  <i
                    className={`fas fa-chevron-down ${activeDropdown === "events" ? "rotate" : ""}`}
                    onClick={(e) => toggleDropdown("events", e)}
                  ></i>
                </div>

                <div className={`mks-dropdown ${activeDropdown === "events" ? "show" : ""}`}>
                  <Link to="/upcoming-events" className="mks-drop-item" onClick={closeMenu}>
                    Upcoming Events
                  </Link>
                  <Link to="/past-events" className="mks-drop-item" onClick={closeMenu}>
                    Past Events
                  </Link>
                </div>
              </li>

              <li><Link to="/news" onClick={closeMenu}>News</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              <li><Link to="/library" onClick={closeMenu}>Library</Link></li>
              <li><Link to="/memberships" onClick={closeMenu}>Memberships</Link></li>
              <li><Link to="/melnudi" onClick={closeMenu}>Melnudi</Link></li>
              <li><Link to="/sponsors" onClick={closeMenu}>Sponsors</Link></li>
            </ul>
          </nav>
        </div>

        {/* RIGHT SECTION: HAMBURGER & CONTACT */}
        <div className="mks-right">
          <div className="mks-contact">
            <Link to="/contact" className="contact-btn">
              Contact Us ▸
            </Link>
          </div>

          <div
            className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;