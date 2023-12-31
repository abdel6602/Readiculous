import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ReadBooks = ({ userId }) => {
  const [readBooks, setReadBooks] = useState(null);

  useEffect(() => {
    // Simulating data fetching from a database or API
    const fetchData = async () => {
      try {
        const response = await fetch(`localhost:8080/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
          }),
        });
        const data = await response.json();
        const booksRead = data.slice(0, 3); 
        setReadBooks(booksRead);
      } catch (error) {
        console.error('Error fetching user read books:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!readBooks) {
    return <p>Loading user read books...</p>;
  }

  return (
    <div>
      <h2>Books Read</h2>
      {readBooks.map((book) => (
        <div key={book.id} style={readBooksContainerStyle}>
          <img src={`https://via.placeholder.com/150`} alt={`Book ${book.id}`} style={imageStyle} />
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

ReadBooks.propTypes = {
  userId: PropTypes.number.isRequired,
};

const readBooksContainerStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default ReadBooks;
