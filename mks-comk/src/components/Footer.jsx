import React from "react";

const Footer = () => {
  return (
    <footer className="mks-footer">

      {/* TOP SECTION */}
      <div className="mks-footer-top">

        {/* Decorative Gold Corners */}
        <div className="ornament ornament-left"></div>
        <div className="ornament ornament-right"></div>

        <div className="mks-footer-container">

          {/* ABOUT */}
          <div className="mks-footer-about">
            <div className="mks-footer-logo-title">
              <img src="/logo.png" alt="MKS Logo" />
              <h3>Melbourne Kannada Sangha</h3>
            </div>

            <p>
              Melbourne Kannada Sangha (MKS) was started on 10 April 1986 by a
              group of like-minded volunteers to conduct cultural programs by
              inviting overseas artists and festivals such as Karnataka
              Rajyotsava, Dasara and Ugadi.
            </p>

            <div className="mks-follow">
              <h4>Follow Us</h4>
              <div className="mks-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://wa.me/61401900080" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mks-footer-column">
            <h4>Contact Info</h4>
            <p><i className="fas fa-phone-alt"></i> +61401900080</p>
            <p><i className="fas fa-envelope"></i> melnudi@gmail.com</p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1173 Heatherton Rd,<br />
              Noble Park, VIC 3174,<br />
              Australia
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="mks-footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>› About</li>
              <li>› Disclaimer</li>
              <li>› Privacy Policy</li>
              <li>› Contact</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="mks-footer-bottom">
        <div className="bottom-ornament-left"></div>
        <div className="bottom-ornament-right"></div>

        <p>© 2024 Melbourne Kannada Sangha. All rights reserved.</p>

        <div className="mks-bottom-links">
          <span>Terms of Use</span>
          <span>Disclaimer</span>
          <span>Privacy Policy</span>
          <span>Contact</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;