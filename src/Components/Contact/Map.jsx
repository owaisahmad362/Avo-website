import React from 'react';

const Map = () => {
  const mapContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%', // Decreased width to avoid scrollbar
    maxWidth: '800px', // Set a maximum width for better responsiveness
    padding: '20px',
    margin: '20px auto', // Center the map horizontally and add space from top and bottom
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    overflow: 'hidden', // Prevent overflow to hide any potential scrollbar
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const errorMessageStyle = {
    color: '#ff0000',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    maxWidth: '90%',
  };

  return (
    <div style={mapContainerStyle}>
      <div style={iconStyle}>!</div>
      <p style={errorMessageStyle}>
        Oops! Something went wrong. <br />
        This page didn't load Google Maps correctly. See the JavaScript console for technical details.
      </p>
    </div>
  );
};

export default Map;
