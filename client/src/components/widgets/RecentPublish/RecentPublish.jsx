import React, { useState, useEffect } from 'react';
import './BookDetail.css'; // Import your CSS file

const BookDetail = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        // Assuming the API returns an array of book objects
        const response = await fetch('/api/books'); // Replace with your actual API endpoint
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books data:', error);
      }
    };

    fetchBooksData();
  }, []);

  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} />
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetail;


