import React, { useEffect } from "react";
import { useState } from "react";
import "./reviews.css";

export default function Review() {
  let [reviews, setReviews] = useState([]);

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };
  useEffect(() => {
    let reviewData = JSON.parse(localStorage.getItem("input")) || [];
    setReviews(reviewData);
  }, []);

  const StarRating = ({ rating }) => {
    const filledStars = "★".repeat(rating);
    const mtStars = "☆".repeat(5 - rating);
    return (
      <div>
        {filledStars}
        {mtStars}
      </div>
    );
  };
  return (
    <div className="  rounded-3 mt-5">
        {/* <h2>Reviews</h2> */}

      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">Title: {review.title}</h5>
              {/* <p className="card-text">Rating: {review.rating}</p> */}
              <p>
                <h3>Rating:</h3> <StarRating rating={parseInt(review.rating)} />
              </p>
              <p className="card-text">Description: {review.description}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
