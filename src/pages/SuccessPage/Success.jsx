import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const { movieId, secondPoster, title, image } = location.state || {};

  // If user refreshed or came directly to /success with no state
  if (!location.state) {
    return (
      <div className="success-details" style={{ color: 'white' }}>
        <h1>Success 💰</h1>
        <p>No movie information was provided.</p>
        <button onClick={() => navigate('/')}>Go back home</button>
      </div>
    );
  }

  return (
    <div className="success-details" style={{ color: 'white' }}>
      <h1>Success 💰</h1>
      <h2>{title}</h2>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
          
          alignItems: 'center',
        }}
      >
        {image && (
          <img
            src={`https://image.tmdb.org/t/p/w185${image}`}
            alt={title}
          />
        )}
        {secondPoster && (
          <img
            src={`https://image.tmdb.org/t/p/w300${secondPoster}`}
            alt={title}
          />
        )}
      </div>

      <p style={{ marginTop: '20px' }}>
        Thanks for your purchase of <strong>{title}</strong>!
      </p>
    </div>
  );
}

export default Success;
