import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const handleReviews = async () => {
      setIsLoading(true);
      setReviews([]);

      try {
        const movieReviews = await fetchReviews(movieId);
        setReviews(movieReviews);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    handleReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.length === 0 ? (
          <p>No Reviews</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;