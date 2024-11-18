import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px 60px',
    flexWrap: 'wrap',
  };

  const mainHeadingStyle = {
    textAlign: 'center',
    marginBottom: '5px', // Reduced space between "Contact Us" and "Have a Project?"
  };

  const subHeadingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const leftSectionStyle = {
    width: '45%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingLeft: '100px',
    height: '600px', // Increased form height
  };

  const rightSectionStyle = {
    width: '45%',
    minWidth: '250px',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    maxWidth: '100%',
    height: '100%', // Ensures the form takes the full height of the section
  };

  const inputStyle = {
    padding: '16px',
    fontSize: '1.2rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    margin: '5px 0',
  };

  const halfInputStyle = {
    ...inputStyle,
    flex: '1',
  };

  const buttonStyle = {
    padding: '12px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    color: '#ff0000',
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: '20px',
  };

  const contactTextStyle = {
    fontSize: '1.3rem',
    color: '#333',
  };

  return (
    <div>
      <div style={mainHeadingStyle}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ff0000' }}>Contact Us</h3>
      </div>
      <div style={subHeadingStyle}>
        <h2 style={{ fontSize: '2.7rem', fontWeight: 'bold' }}>Have a Project?</h2>
      </div>

      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <form style={formStyle}>
            {/* First Row: Name and Email */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={halfInputStyle}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={halfInputStyle}
                required
              />
            </div>

            {/* Subject Input */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={inputStyle}
              required
            />

            {/* Message Input */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              style={{ ...inputStyle, height: '150px' }}
              required
            ></textarea>

            {/* Submit Button */}
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>

        <div style={rightSectionStyle}>
          <div style={contactInfoStyle}>
            <div style={iconStyle}>🏠</div>
            <span style={contactTextStyle}>198 West 21th Street, Suite 721 New York NY 10016</span>
          </div>

          <div style={contactInfoStyle}>
            <div style={iconStyle}>📞</div>
            <span style={contactTextStyle}>+ 1235 2355 98</span>
          </div>

          <div style={contactInfoStyle}>
            <div style={iconStyle}>✉️</div>
            <span style={contactTextStyle}>info@yoursite.com</span>
          </div>

          <div style={contactInfoStyle}>
            <div style={iconStyle}>🌐</div>
            <span style={contactTextStyle}>yoursite.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
