import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation for getting current path
import img1 from '../../assets/img_1.jpg';

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation(); // Hook to get current location/path

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const contactSectionStyle = {
    position: 'relative',
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: '#fff',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    zIndex: 10,
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
  };

  const redVStyle = { color: '#ff0000' };

  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Align the links to the right
    gap: '20px',
    flexWrap: 'wrap', // Allow menu to wrap on small screens
    marginRight: '10px',
  };

  const navLinkStyle = (link) => ({
    textDecoration: 'none',
    color:
      (location.pathname === link || hoveredLink === link) // Check if path matches or if link is hovered
        ? '#ff0000' // Active link color (Red)
        : '#fff', // White for other links
    padding: '10px',
    fontSize: '1rem',
    transition: 'color 0.3s ease-in-out',
  });

  const contentStyle = {
    position: 'absolute',
    bottom: '40px',
    left: '20px',
    zIndex: 10,
    color: '#fff',
  };

  const breadcrumbStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  const arrowStyle = { color: '#ff0000', margin: '0 5px' };

  const mainHeadingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  return (
    <div style={contactSectionStyle}>
      <div style={overlayStyle}></div>

      {/* Navbar */}
      <header style={navbarStyle}>
        <div style={logoStyle}>
          a<span style={redVStyle}>v</span>o
        </div>
        <nav style={navMenuStyle}>
          <Link
            to="/"
            style={navLinkStyle('/')}
            onMouseEnter={() => handleMouseEnter('/')}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={navLinkStyle('/about')}
            onMouseEnter={() => handleMouseEnter('/about')}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Link>
          <Link
            to="/work"
            style={navLinkStyle('/work')}
            onMouseEnter={() => handleMouseEnter('/work')}
            onMouseLeave={handleMouseLeave}
          >
            Work
          </Link>
          <Link
            to="/blog"
            style={navLinkStyle('/blog')}
            onMouseEnter={() => handleMouseEnter('/blog')}
            onMouseLeave={handleMouseLeave}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            style={navLinkStyle('/contact')}
            onMouseEnter={() => handleMouseEnter('/contact')}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div style={contentStyle}>
        <div style={breadcrumbStyle}>
          Home<span style={arrowStyle}>&gt;</span>Contact<span style={arrowStyle}>&gt;</span>
        </div>
        <h1 style={mainHeadingStyle}>CONTACT</h1>
      </div>
    </div>
  );
};

export default Contact;
