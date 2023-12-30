import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const data = await response.json();
        const booksToRead = data.slice(0, 3); // Take the first three todos as books to read
        setWishlist(booksToRead);
      } catch (error) {
        console.error('Error fetching user wishlist:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!wishlist) {
    return <p>Loading user wishlist...</p>;
  }

  return (
    <div>
      <h2>Books to Read</h2>
      {wishlist.map((book) => (
        <div key={book.id} style={wishlistContainerStyle}>
          <img src={`https://via.placeholder.com/150`} alt={`Book ${book.id}`} style={imageStyle} />
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

Wishlist.propTypes = {
  userId: PropTypes.number.isRequired,
};

const wishlistContainerStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default Wishlist;
