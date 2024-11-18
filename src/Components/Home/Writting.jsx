
import cassetteImg from '../../assets/writting-img.jpg';
import personIcon from '../../assets/person_2.jpg';

const Writting = () => {
  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    gap: '40px',
    minHeight: '80vh',
  };

  const contentContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
    width: '100%',
  };

  const imageContainerStyle = {
    flex: '1',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const contentStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
    paddingRight: '40px', // Adjusted padding for left-side content
    color: '#333',
  };

  const sectionTitleStyle = {
    fontSize: '1.2rem',
    color: '#ff0000',
    marginBottom: '5px',
  };

  const mainHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginTop: '0',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    maxWidth: '90%',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px',
  };

  const profileImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const profileTextStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const profileNameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const profileDetailsStyle = {
    fontSize: '0.9rem',
    color: '#999',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '20px',
    width: 'fit-content',
  };

  return (
    <div style={containerStyle}>
      {/* Content Section */}
      <div style={contentContainerStyle}>
        {/* Left Side - Content */}
        <div style={contentStyle}>
          <p style={sectionTitleStyle}>Web Development</p>
          <h2 style={mainHeadingStyle}>Hand Writing</h2>
          <p style={descriptionStyle}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>

          {/* Profile Section */}
          <div style={profileContainerStyle}>
            <img src={personIcon} alt="Jamie Jonson" style={profileImageStyle} />
            <div style={profileTextStyle}>
              <span style={profileNameStyle}>Jamie Jonson</span>
              <span style={profileDetailsStyle}>a v o . com</span>
            </div>
          </div>

          {/* View Portfolio Button */}
          <button style={buttonStyle}>VIEW PORTFOLIO</button>
        </div>

        {/* Right Side - Image */}
        <div style={imageContainerStyle}>
          <img src={cassetteImg} alt="Cassette" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Writting;
