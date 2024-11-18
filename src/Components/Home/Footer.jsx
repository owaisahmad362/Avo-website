import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '120px 40px',
  };

  const footerRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const footerColumnStyle = {
    flex: '1 1 200px',
    minWidth: '200px',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px',
    position: 'relative',
    paddingLeft: '20px',
  };

  const arrowStyle = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#fff',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // Align to the left
    gap: '15px', // Reduced gap between icons
    marginTop: '10px', // Reduced margin from the text
    marginLeft: '0', // Removed extra space from left border
  };

  const iconStyle = {
    fontSize: '1.8rem',
    color: '#fff',
    cursor: 'pointer',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    marginBottom: '10px',
  };

  const contactIconStyle = {
    marginRight: '10px',
    fontSize: '1.5rem',
  };

  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginTop: '40px',
    color: '#aaa',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerRowStyle}>
        {/* Column 1 */}
        <div style={footerColumnStyle}>
          <h4 style={headingStyle}>Avo</h4>
          <p>Far far away, behind the word mountains, far from the countries.</p>
          {/* Social Media Icons - Below the content */}
          <div style={iconContainerStyle}>
            <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </div>
        </div>

        {/* Column 2 */}
        <div style={footerColumnStyle}>
          <h4 style={headingStyle}>Community</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>Projects <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Team <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Reviews <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>FAQs <span style={arrowStyle}>→</span></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={footerColumnStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>Our Story <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Meet the team <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Careers <span style={arrowStyle}>→</span></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div style={footerColumnStyle}>
          <h4 style={headingStyle}>Company</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={listItemStyle}>About Us <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Press <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Contact <span style={arrowStyle}>→</span></li>
            <li style={listItemStyle}>Careers <span style={arrowStyle}>→</span></li>
          </ul>
        </div>

        {/* Fifth Column: Have a Questions? */}
        <div style={footerColumnStyle}>
          <h4 style={headingStyle}>Have a Questions?</h4>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={contactIconStyle} />
            203 Fake St. Mountain View, San Francisco, California, USA
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faPhone} style={contactIconStyle} />
            +2 392 3929 210
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={contactIconStyle} />
            info@yourdomain.com
          </div>
        </div>
      </div>

      <div style={copyrightStyle}>
        Copyright ©2024 All rights reserved | This template is made with{' '}
        <span style={{ color: 'red' }}>❤</span> by <span style={{ color: 'red' }}>Colorlib</span>.
      </div>
    </footer>
  );
};

export default Footer;
