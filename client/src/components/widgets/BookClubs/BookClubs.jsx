import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookClubs = ({ userId }) => {
  const [bookClubs, setBookClubs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`localhost:8080/`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
          }),
        });
        const data = await response.json();
        const userBookClubs = data.slice(0, 3); // Take the first three todos as book clubs
        setBookClubs(userBookClubs);
      } catch (error) {
        console.error('Error fetching user book clubs:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!bookClubs) {
    return <p>Loading user book clubs...</p>;
  }

  return (
    <div>
      <h2>Book Clubs</h2>
      {bookClubs.map((club) => (
        <div key={club.id} style={bookClubsContainerStyle}>
          <p>{club.title}</p>
          <p>{club.completed ? 'Joined' : 'Not Joined'}</p>
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
