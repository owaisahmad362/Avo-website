import React, { useState } from 'react';
import personImg from '../../assets/person_3.jpg';

const Clients = () => {
  // State for tracking the current card set
  const [currentSet, setCurrentSet] = useState(0);

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    gap: '40px',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
  };

  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
  };

  const cardStyle = {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '350px',
    textAlign: 'center',
    position: 'relative',
  };

  const quoteStyle = {
    position: 'absolute',
    top: '-15px',
    left: '20px',
    fontSize: '4rem',
    color: '#ff0000',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: '0 5px',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    justifyContent: 'center',
  };

  const profileImageStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ff0000',
  };

  const profileDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const profileNameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: '0.1rem',
  };

  const profileRoleStyle = {
    fontSize: '1rem',
    color: '#999',
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  };

  const dotStyle = (active) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: active ? '#ff0000' : '#ddd',
    cursor: 'pointer',
  });

  // Card data (3 cards per set)
  const cardData = [
    [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    [
      
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  ];

  // Render a card
  const renderCard = (content, index) => (
    <div key={index} style={cardStyle}>
      <span style={quoteStyle}>"</span>
      <p style={contentStyle}>{content}</p>
      <div style={profileContainerStyle}>
        <img src={personImg} alt="Roger Scotte" style={profileImageStyle} />
        <div style={profileDetailsStyle}>
          <span style={profileNameStyle}>R o g e r S c o t t e</span>
          <span style={profileRoleStyle}>Marketing Manager</span>
        </div>
      </div>
    </div>
  );

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSet(index);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Clients Say About Us?</h1>

      {/* Cards Section */}
      <div style={cardsContainerStyle}>
        {cardData[currentSet].map((content, index) => renderCard(content, index))}
      </div>

      {/* Scroll Bubbles */}
      <div style={dotsContainerStyle}>
        {cardData.map((_, index) => (
          <div
            key={index}
            style={dotStyle(currentSet === index)}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
