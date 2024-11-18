import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../assets/img_1.jpg';

const Home = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen size for responsive design

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const homeSectionStyle = {
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
    boxSizing: 'border-box', // Ensure padding does not affect the layout
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
    marginRight: '10px', // Add space on the right side
  };

  const navLinkStyle = (link) => ({
    textDecoration: 'none',
    color:
      location.pathname === link
        ? '#ff0000' // Active link color (Red)
        : hoveredLink === link
        ? '#ff0000' // Hover effect color (Red)
        : '#fff', // White for other links
    padding: '10px',
    fontSize: '1rem',
    transition: 'color 0.3s ease-in-out',
  });

  const homeContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0 20px',
    zIndex: 10,
    height: '80vh',
  };

  const mainHeadingStyle = {
    fontSize: screenWidth < 768 ? '2.5rem' : '3rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    marginTop: '15px',
    maxWidth: '90%',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#ff0000',
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const playButtonStyle = () => ({
    position: 'absolute',
    bottom: screenWidth < 768 ? '20px' : '40px',
    right: screenWidth < 480 ? '20px' : screenWidth < 768 ? '100px' : '200px',
    cursor: 'pointer',
  });

  const playIconStyle = () => ({
    fontSize: screenWidth < 480 ? '30px' : screenWidth < 768 ? '40px' : '60px',
    color: '#ff0000',
  });

  return (
    <div style={homeSectionStyle}>
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

      {/* Main Content */}
      <div style={homeContentStyle}>
        <h1 style={mainHeadingStyle}>
          WE CREATE<br />MODERN &<br />MINIMAL WEBSITE
        </h1>
        <p style={descriptionStyle}>
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
        <button style={buttonStyle}>Explore Projects</button>
      </div>

      {/* Play Button Icon */}
      <div style={playButtonStyle()}>
        <i className="fas fa-play-circle" style={playIconStyle()}></i>
      </div>
    </div>
  );
};

export default Home;
