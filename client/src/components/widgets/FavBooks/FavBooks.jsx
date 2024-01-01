import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoriteBooks = ({ userId }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        userId = localStorage.getItem('userID');
        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        const threeBooks = data.favorites.slice(0, 3); 
        setFavoriteBooks(threeBooks);
      } catch (error) {
        console.error('Error fetching favorite books:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!favoriteBooks) {
    return <p>Loading favorite books...</p>;
  }

  return (
    <div>
      <h2>Favorite Books</h2>
      {favoriteBooks.map((book) => (
        <div key={book.id} style={bookContainerStyle}>
          <img src={`https://via.placeholder.com/150`} alt={`Book ${book.id}`} style={imageStyle} />
          <p>{book.title}</p>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
  );
};

// FavoriteBooks.propTypes = {
//   userId: PropTypes.number.isRequired,
// };

const bookContainerStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default FavoriteBooks;
