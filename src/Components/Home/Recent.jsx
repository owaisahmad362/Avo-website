import img1 from '../../assets/chair-img.jpg';
import img2 from '../../assets/frame-img.jpg';
import img3 from '../../assets/mouse-img.jpg';
import img4 from '../../assets/cup-img.jpg';

const Recent = () => {
  const recentSectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  };

  const blogRowStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  };

  const blogContainerStyle = {
    width: '300px',
    textAlign: 'center',
  };

  const titleTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    marginBottom: '15px',
  };

  const blogImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '1px',
  };

  const blogMetaStyle = {
    fontSize: '1.1rem', // Increased font size
    color: '#000', // Set color to black
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };

  const blogDescriptionStyle = {
    fontSize: '0.9rem',
    color: '#555',
  };

  const blogData = [
    { image: img1, title: 'Amplify your blockchain team', date: 'JUNE 01, 2020', author: 'ADMIN', comments: 3 },
    { image: img2, title: 'Amplify your blockchain team', date: 'JUNE 01, 2020', author: 'ADMIN', comments: 5 },
    { image: img3, title: 'Amplify your blockchain team', date: 'JUNE 01, 2020', author: 'ADMIN', comments: 2 },
    { image: img4, title: 'Amplify your blockchain team', date: 'JUNE 01, 2020', author: 'ADMIN', comments: 4 },
  ];

  return (
    <section style={recentSectionStyle}>
      <h2 style={headingStyle}>RECENT BLOG</h2>
      <div style={blogRowStyle}>
        {blogData.map((blog, index) => (
          <div key={index} style={blogContainerStyle}>
            {/* Title Text */}
            <div
              className="title-text"
              style={titleTextStyle}
              onMouseEnter={(e) => (e.target.style.color = '#ff0000')}
              onMouseLeave={(e) => (e.target.style.color = '#333')}
            >
              {blog.title}
            </div>

            {/* Image Section */}
            <img src={blog.image} alt={`Blog ${index + 1}`} style={blogImageStyle} />

            {/* Bottom Content */}
            <div style={blogMetaStyle}>
              <span>{blog.date}</span>
              <span>{blog.author}</span>
              <span style={{ color: '#000' }}>🗨️</span> {/* Black message icon */}
              <span>{blog.comments}</span>
            </div>

            <p style={blogDescriptionStyle}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent;
