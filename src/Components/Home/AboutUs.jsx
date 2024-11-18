
const AboutUs = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8f8f8',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  };

  const servicesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const serviceItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#555',
    gap: '10px',
  };

  const iconStyle = {
    fontSize: '3.5rem', // Increased icon size
    color: '#ff0000',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>

      <div style={servicesContainerStyle}>
        <div style={serviceItemStyle}>
          <i className="fas fa-paint-brush" style={iconStyle}></i>
          <span>UI/UX Design</span>
        </div>
        <div style={serviceItemStyle}>
          <i className="fas fa-code" style={iconStyle}></i>
          <span>Web Development</span>
        </div>
        <div style={serviceItemStyle}>
          <i className="fas fa-cubes" style={iconStyle}></i>
          <span>Product Design</span>
        </div>
        <div style={serviceItemStyle}>
          <i className="fas fa-mobile-alt" style={iconStyle}></i>
          <span>Mobile Apps</span>
        </div>
        <div style={serviceItemStyle}>
          <i className="fas fa-search" style={iconStyle}></i>
          <span>SEO</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
