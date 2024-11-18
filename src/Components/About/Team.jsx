import React from 'react';
import person1 from '../../assets/person_1.jpg';
import person2 from '../../assets/person_2.jpg';
import person3 from '../../assets/person_3.jpg';
import person4 from '../../assets/person_4.jpg';
import person5 from '../../assets/person_5.jpg';
import person6 from '../../assets/person_6.jpg';
import person7 from '../../assets/person_7.jpg';
import person8 from '../../assets/person_8.jpg';

const teamMembers = [
  { name: 'John Wilson', role: 'Web Designer', image: person1 },
  { name: 'Robert Wills', role: 'Web Developer', image: person2 },
  { name: 'Mike Smith', role: 'Graphic Designer', image: person3 },
  { name: 'Adrian Henderson', role: 'System Analyst', image: person4 },
  { name: 'John Wilson', role: 'Web Programmer', image: person5 },
  { name: 'Robert Wills', role: 'Web Designer', image: person6 },
  { name: 'Mike Smith', role: 'Graphic Designer', image: person7 },
  { name: 'Adrian Henderson', role: 'SEO', image: person8 },
];

const Team = () => {
  const teamContainerStyle = {
    padding: '50px',
    textAlign: 'center',
  };

  const teamHeadingStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
  };

  const teamGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyContent: 'center',
  };

  const teamCardStyle = {
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const teamImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
  };

  const teamNameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000',
    marginTop: '10px',
  };

  const teamRoleStyle = {
    fontSize: '1.1rem',
    color: '#ff0000',
    marginTop: '5px',
  };

  const iconContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    color: '#ff0000',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '5px',
    transition: 'color 0.3s, background-color 0.3s',
  };

  return (
    <div style={teamContainerStyle}>
      <h2 style={teamHeadingStyle}>Expert Team</h2>
      <div style={teamGridStyle}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={teamCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.icon-container').style.opacity = 1;
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.icon-container').style.opacity = 0;
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img src={member.image} alt={member.name} style={teamImageStyle} />
            <div className="icon-container" style={iconContainerStyle}>
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.6-2.46.7a4.28 4.28 0 001.88-2.37 8.45 8.45 0 01-2.69 1.02 4.25 4.25 0 00-7.24 3.88 12.08 12.08 0 01-8.76-4.44 4.26 4.26 0 001.32 5.7 4.23 4.23 0 01-1.92-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.29 4.29 0 01-1.9.07c.53 1.64 2.06 2.83 3.87 2.87A8.51 8.51 0 014 19.34a12 12 0 006.29 1.85c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.35-.02-.53A8.35 8.35 0 0024 4.56a8.38 8.38 0 01-2.54.7z"/></svg>
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M22 2H2v20h20V2zm-5.2 10.8h-3V20H9.2v-7.2H7V9.2h2.2V7.2c0-1.6 1.1-3.8 3.8-3.8h2.8v3h-2c-.6 0-1.2.3-1.2 1.2v2h3.2l-.6 3z"/></svg>
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M12 2.2C6.48 2.2 2.2 6.48 2.2 12c0 4.89 3.52 8.94 8.26 9.77v-6.92H8.64V12h1.82V9.76c0-1.79 1.06-2.78 2.69-2.78.78 0 1.59.14 1.59.14v1.75h-.89c-.88 0-1.15.55-1.15 1.11v1.34h2.3l-.37 2.31h-1.93V22c4.74-.83 8.26-4.88 8.26-9.77 0-5.52-4.28-9.8-9.8-9.8z"/></svg>
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M12 12l8-5H4l8 5zm0 2l-8-5v10h16V9l-8 5z"/></svg>
            </div>
            <h3 style={teamNameStyle}>{member.name}</h3>
            <p style={teamRoleStyle}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
