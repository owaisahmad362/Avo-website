import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import img1 from '../../assets/img_1.jpg';

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen size for responsive design
  const location = useLocation(); // Get current location to highlight active link

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const aboutSectionStyle = {
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
    flexWrap: 'wrap', // Ensures responsiveness
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
  };

  const redVStyle = { color: '#ff0000' };

  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '20px',
    flexWrap: 'wrap',
    marginRight: '10px', // Add space on the right side
  };

  const navLinkStyle = (link) => ({
    textDecoration: 'none',
    color:
      location.pathname === link // Apply red color if the current path matches
        ? '#ff0000'
        : hoveredLink === link
        ? '#ff0000'
        : '#fff',
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
    fontSize: screenWidth < 768 ? '2.5rem' : '3rem',
    fontWeight: 'bold',
  };

  return (
    <div style={aboutSectionStyle}>
      <div style={overlayStyle}></div>

      {/* Navbar */}
      <header style={navbarStyle}>
        <div style={logoStyle}>
          a<span style={redVStyle}>v</span>o
        </div>
        <div style={navMenuStyle}>
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
        </div>
      </header>

      {/* Content */}
      <div style={contentStyle}>
        <div style={breadcrumbStyle}>
          Home<span style={arrowStyle}>&gt;</span>About Us<span style={arrowStyle}>&gt;</span>
        </div>
        <h1 style={mainHeadingStyle}>ABOUT US</h1>
      </div>
    </div>
  );
};

export default About;
