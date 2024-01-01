import React, { useState, useEffect } from 'react';

const BestReviews = () => {
  const [bestReviews, setBestReviews] = useState([]);

  useEffect(() => {
    const fetchBestReviews = async () => {
      try {
        const response = await fetch('localhost:8080/review/top', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        const topReviews = result.books.slice(0, 3); 

        const reviewsWithReviewerNames = await Promise.all(
          topReviews.map(async (review) => {
            const reviewerName = await fetchReviewerName(review.reviewer_id);
            return {
              ...review,
              reviewerName,
            };
          })
        );

        setBestReviews(reviewsWithReviewerNames);
      } catch (error) {
        console.error('Error fetching best reviews:', error);
      }
    };

    fetchBestReviews();
  }, []);

  const fetchReviewerName = async (reviewerId) => {
    try {
      const response = await fetch(`localhost:8080/users/${reviewerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const userData = await response.json();
      return `${userData.first_name} ${userData.last_name}`;
    } catch (error) {
      console.error('Error fetching reviewer name:', error);
      return 'Unknown Reviewer';
    }
  };

  return (
    <div>
      <h2>Best Reviews</h2>
      {bestReviews.map((review) => (
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>
            <strong>Rating:</strong> {review.rating}
          </p>
          <p>
            <strong>Review:</strong> {review.review}
          </p>
          <p>
            <strong>Description:</strong> {review.description}
          </p>
          <p>
            <strong>Reviewer:</strong> {review.reviewerName}
          </p>
          <img src={review.cover_image_url} alt={review.title} style={{ maxWidth: '200px' }} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BestReviews;
