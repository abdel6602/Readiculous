import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookClubs = ({ userId }) => {
  const [userClubs, setUserClubs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        const clubs = data.clubs || [];

        setUserClubs(clubs);
      } catch (error) {
        console.error('Error fetching user book clubs:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userClubs) {
    return <p>Loading user book clubs...</p>;
  }

  return (
    <div>
      <h2>Book Clubs</h2>
      {userClubs.map((club) => (
        <div key={club.id} style={bookClubsContainerStyle}>
          <p>
            <strong>Name:</strong> {club.name}
          </p>
          <p>
            <strong>Description:</strong> {club.description}
          </p>
        </div>
      ))}
    </div>
  );
};

BookClubs.propTypes = {
  userId: PropTypes.number.isRequired,
};

const bookClubsContainerStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
};

export default BookClubs;
