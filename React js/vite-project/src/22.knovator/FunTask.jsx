import React, { useEffect, useState } from "react";
import "./Fun.css";

export default function FunTask() {

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

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
    <div>
      <div className="hero-container">
        <div className="main-container">
          <div>
            <div className="poster-container">
              <a href="#">
                <img
                  src="https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrHfkMVq4BF5AQlqIqwR1XjcWvDl.jpg"
                  className="poster"
                  alt="Fast X 2023"
                />
              </a>
            </div>
            <div className="ticket-container">
              <div className="ticket__content">
                <h4 className="ticket__movie-title"> Fast X 2023</h4>
                <p className="ticket__movie-slogan">Family Is Always First</p>
                <p className="ticket__current-price">$28.00</p>
                <p className="ticket__old-price">$44.99</p>
                <button className="ticket__buy-btn" onClick={toggle}>
                  give Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="poster-container">
            <a href="#">
              <img
                src="https://assetscdn1.paytm.com/images/cinema/p1-min-297fd340-90a5-11ed-bd95-b7350954b20c.jpg"
                className="poster"
                alt="Pathaan"
              />
            </a>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title"> Pathaan </h4>
              <p className="ticket__movie-slogan"> The King Is Back</p>
              <p className="ticket__current-price">$20.75</p>
              <p className="ticket__old-price">$40.99</p>
              <button className="ticket__buy-btn" onClick={toggle}>
                give Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h2>Reviews</h2>
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
