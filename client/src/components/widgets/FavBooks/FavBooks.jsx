import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoriteBooks = ({ userId }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(null);

  useEffect(() => {
    // Simulating data fetching from a database or API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        const threeBooks = data.slice(0, 3); // Take the first three posts as favorite books
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

FavoriteBooks.propTypes = {
  userId: PropTypes.number.isRequired,
};

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
