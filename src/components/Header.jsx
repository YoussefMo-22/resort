// components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { text: 'The Resort', href: '/the-resort' },
    { text: 'Hotels', href: '/our-hotels' },
    { text: 'Families', href: '/families' },
    { text: 'Gastronomy', href: '/gastronomy' },
    { text: 'Experiences', href: '/experiences' },
    { text: 'Offers', href: '/offers' },
    { text: 'The Marina', href: '/the-marina' },
    { text: 'Gallery', href: '/gallery' }
  ];

  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="message-wrapper white center animate">
          <div className="message-inner">
            <div className="call-section">
              <p><a href="tel:08009496809" className="top-nav">CALL 0800 949 6809</a></p>
            </div>
          </div>
        </div>
        
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/" aria-label="logo" className="top-nav">
              <svg width="82" height="35" viewBox="0 0 82 35" fill="none">
                {/* Sani Resort Logo SVG */}
                <path d="M12.885 17.6081C12.885 22.4876 9.23169 23.8016 5.03035 23.8016C3.90975 23.8016 2.58542 23.5158 1.14867 23.0313C0.800898 22.9163 0.340717 22.6898 -0.00354004 22.6026C0.168589 21.8881 0.196691 20.9471 0.196691 20.6055C0.196691 20.2082 0.168589 19.5774 0.112383 18.8942H0.456641C0.540949 19.8353 0.829001 20.5498 1.23298 21.0621C2.03741 22.0589 3.50578 22.4319 5.00224 22.4319C6.52681 22.4319 10.8406 22.404 10.8406 18.3226C10.8406 12.272 0.340717 14.0705 0.340717 6.70591C0.340717 3.2554 3.30203 0.627441 8.19541 0.627441C9.77618 0.627441 10.6403 1.08402 11.7328 1.11191C11.501 1.76715 11.4167 2.65244 11.4167 3.1369C11.4167 3.64925 11.4167 4.22085 11.4729 5.1619H11.1286C11.0443 4.16508 10.7246 3.1369 10.1802 2.62107C9.57595 2.08084 8.71179 1.91005 8.19541 1.91005C4.22591 1.91005 2.15334 3.59348 2.15334 6.33298C2.15685 11.6447 12.885 10.5015 12.885 17.6081Z" fill="#AD986E"/>
                {/* Rest of logo paths */}
              </svg>
            </a>
          </div>
          
          <div className="nav-items">
            <div className="book-button white header-booking animate">
              <a href="https://saniresort.swapsystems.com/" aria-label="Book Now" className="top-nav">Book Now</a>
            </div>
            
            <nav className="navigation">
              <ul className="link-list">
                {navItems.map((item, index) => (
                  <li key={item.text} className="link-list-item">
                    <div className="link-item-link animate" style={{ animationDelay: `${2.5 + index * 0.1}s` }}>
                      <a href={item.href} data-text={item.text} className="top-nav">{item.text}</a>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="language-switcher">
                <div className="lang-select">
                  <div className="select-toggle">
                    <span className="select-label">EN</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M10.6504 1.68298L5.98372 6.31713L1.31706 1.68298" stroke="#010400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
            
            <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`hamburger-itm-1 ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-itm-2 ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;