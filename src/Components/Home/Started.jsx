import img_1 from '../../assets/img_1.jpg'; // Importing the background image

const Started = () => {
  // Styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligns content to the left
    height: '70vh',
    maxWidth: '90%', // Sets a maximum width (90% of the viewport width)
    margin: '0 auto', // Centers the container horizontally
    backgroundImage: `url(${img_1})`, // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '15px',
    color: '#fff',
    borderRadius: '5px', // Optional: Adds rounded corners for a nicer look
    overflow: 'hidden', // Prevents content overflow
  };

  const contentStyle = {
    maxWidth: '600px',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '1rem',
    color: '#ff0000', // Red color
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '40px',
    color: '#ddd',
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p style={titleStyle}>Get Started</p>
        <h2 style={subTitleStyle}>Fill in the brief and get the project estimate</h2>
        <p style={paragraphStyle}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>
    </div>
  );
};

export default Started;
