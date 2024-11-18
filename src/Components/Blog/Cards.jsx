import React from 'react';
import img1 from '../../assets/chair-img.jpg';
import img2 from '../../assets/frame-img.jpg';
import img3 from '../../assets/mouse-img.jpg';
import img4 from '../../assets/cup-img.jpg';

const Cards = () => {
  const cardsSectionStyle = {
    padding: '40px 40px', // Increased side padding for more space
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const cardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardContainerStyle = {
    width: '100%',
    textAlign: 'center',
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    marginBottom: '15px',
  };

  const cardImageStyle = {
    width: '100%',
    height: '350px', // Increased image height
    objectFit: 'cover',
    borderRadius: '5px',
  };

  const cardMetaStyle = {
    fontSize: '1.1rem',
    color: '#000',
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };

  const cardDescriptionStyle = {
    fontSize: '0.9rem',
    color: '#555',
  };

  const cardData = [
    { image: img1, title: 'Amplify your blockchain team', date: 'JUNE 01, 2020', author: 'ADMIN', comments: 3 },
    { image: img2, title: 'Enhance your creative workflow', date: 'JULY 15, 2020', author: 'ADMIN', comments: 5 },
    { image: img3, title: 'Boost your digital presence', date: 'AUG 20, 2020', author: 'ADMIN', comments: 2 },
    { image: img4, title: 'Innovative design strategies', date: 'SEP 05, 2020', author: 'ADMIN', comments: 4 },
    { image: img1, title: 'Future of tech innovation', date: 'OCT 10, 2020', author: 'ADMIN', comments: 6 },
    { image: img2, title: 'Building digital experiences', date: 'NOV 25, 2020', author: 'ADMIN', comments: 4 },
    { image: img3, title: 'Creative solutions for growth', date: 'DEC 12, 2020', author: 'ADMIN', comments: 8 },
    { image: img4, title: 'The art of design thinking', date: 'JAN 01, 2021', author: 'ADMIN', comments: 5 },
  ];

  return (
    <section style={cardsSectionStyle}>
      <div style={cardsGridStyle}>
        {cardData.map((card, index) => (
          <div key={index} style={cardContainerStyle}>
            {/* Title Text */}
            <div
              style={cardTitleStyle}
              onMouseEnter={(e) => (e.target.style.color = '#ff0000')}
              onMouseLeave={(e) => (e.target.style.color = '#333')}
            >
              {card.title}
            </div>

            {/* Image Section */}
            <img src={card.image} alt={`Card ${index + 1}`} style={cardImageStyle} />

            {/* Bottom Content */}
            <div style={cardMetaStyle}>
              <span>{card.date}</span>
              <span>{card.author}</span>
              <span style={{ color: '#000' }}>🗨️</span> {/* Black message icon */}
              <span>{card.comments}</span>
            </div>

            <p style={cardDescriptionStyle}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
