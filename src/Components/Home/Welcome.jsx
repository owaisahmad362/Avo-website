
import img2 from '../../assets/img-2.jpg'; // Import the image from the assets folder

const Welcome = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    backgroundColor: '#f8f8f8',
  };

  const contentRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    gap: '20px',
  };

  const leftSectionStyle = {
    flex: '1',
    paddingRight: '20px',
    color: '#333',
  };

  const rightSectionStyle = {
    flex: '1',
    paddingLeft: '20px',
    color: '#333',
  };

  // Updated styles for the left section
  const headingStyle = {
    fontSize: '3.5rem', // Increased font size for heading
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subHeadingStyle = {
    fontSize: '2rem', // Increased font size for subheading
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem', // Increased font size for paragraph
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const imageStyle = {
    flex: '1',
    maxWidth: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const bottomSectionStyle = {
    display: 'flex', // Flex to align the items in a row
    justifyContent: 'space-between', // Space between each item
    gap: '40px', // Add gap between items
    marginTop: '40px',
  };

  const numberContentStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    marginLeft: '20px', // Adding margin to space out content from number
  };

  const numberStyle = {
    color: 'red', // Red color for numbers
    fontSize: '3rem', // Increased size for the numbers
    fontWeight: 'bold',
    marginBottom: '10px',
    alignSelf: 'flex-start', // Ensures numbers align with the content
  };

  return (
    <div style={containerStyle}>
      {/* Content Row with Image in the Middle */}
      <div style={contentRowStyle}>
        {/* Left Section */}
        <div style={leftSectionStyle}>
          <h1 style={headingStyle}>Welcome to AVO</h1>
          <h2 style={subHeadingStyle}>A Personal Portfolio Web Agency</h2>
          <p style={paragraphStyle}>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>

        {/* Image Section */}
        <img src={img2} alt="Welcome Image" style={imageStyle} />

        {/* Right Section */}
        <div style={rightSectionStyle}>
          <p style={paragraphStyle}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <button style={buttonStyle}>View All Projects &gt;</button>
        </div>
      </div>

      {/* Bottom Section with Numbers and Content in One Row */}
      <div style={bottomSectionStyle}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={numberStyle}>01</div>
          <div>
            <p style={numberContentStyle}>Search Engine Optimization</p>
            <p style={numberContentStyle}>Far far away, behind the word mountains</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={numberStyle}>02</div>
          <div>
            <p style={numberContentStyle}>Search Engine Optimization</p>
            <p style={numberContentStyle}>Far far away, behind the word mountains</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={numberStyle}>03</div>
          <div>
            <p style={numberContentStyle}>Search Engine Optimization</p>
            <p style={numberContentStyle}>Far far away, behind the word mountains</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
