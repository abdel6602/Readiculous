import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyPastReview = ({ userId }) => {
  const [userReviews, setUserReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`localhost:8080/review/getReviews`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
          }),
        });
        const data = await response.json();
        const threeReviews = data.slice(0, 3); // Take the first three comments as reviews
        setUserReviews(threeReviews);
      } catch (error) {
        console.error('Error fetching user reviews:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userReviews) {
    return <p>Loading user reviews...</p>;
  }

  return (
    <div>
      <h2>User Reviews</h2>
      {userReviews.map((review) => (
        <div key={review.id} style={reviewContainerStyle}>
          <img src={`https://via.placeholder.com/150`} alt={`Book ${review.id}`} style={imageStyle} />
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  );
};

UserReviews.propTypes = {
  userId: PropTypes.number.isRequired,
};

const reviewContainerStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default MyPastReview;
