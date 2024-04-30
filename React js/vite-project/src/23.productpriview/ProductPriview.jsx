
import React from 'react';
import './Pro.css'; 

export default function ProductPreview() {
  return (
  <>
    <div class="product-container">
    <div class="product-gallery">
      <div class="main-image">
        <img src="product-image.jpg" alt="Product Image"/>
      </div>
      <div class="thumbnail-images">
        <img src="thumbnail-1.jpg" alt="Thumbnail 1"/>
        <img src="thumbnail-2.jpg" alt="Thumbnail 2"/>
        <img src="thumbnail-3.jpg" alt="Thumbnail 3"/>
      </div>
    </div>
    <div class="product-info">
      <h1 class="product-title">Fastrack Vyb Showstopper Quartz Analog Mother Of Pearl Dial Metal Strap Watch for Girls</h1>
      <div class="product-details">
        <div class="product-price">
          <p class="price">₹ 2,050.00</p>
          <p class="mrp">₹ 2,925.00</p>
          <p class="discount">30% Off</p>
        </div>
        <div class="product-meta">
          <p>Girls Watch</p>
          <p>Only 1 left in stock</p>
        </div>
        <div class="product-actions">
          <button class="add-to-cart">Add to Bag</button>
          <button class="buy-now">Buy Now</button>
        </div>
        <div class="product-features">
          <ul>
            <li>6 Months Warranty</li>
            <li>7 Days Return</li>
            <li>Serviced Across India</li>
            <li>Free Shipping Across India</li>
            <li>Pay on Delivery Available</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="product-reviews">
    <h2>Reviews</h2>
    <div class="review">
      <p class="review-text">"Great product, highly recommended!"</p>
      <p class="review-author">- John Doe</p>
    </div>
    <div class="review">
      <p class="review-text">"This product exceeded my expectations."</p>
      <p class="review-author">- Jane Smith</p>
    </div>
    <div class="review">
      <p class="review-text">"Excellent quality and value for money."</p>
      <p class="review-author">- Bob Johnson</p>
    </div>
    <div class="review">
      <p class="review-text">"I'm very satisfied with this purchase."</p>
      <p class="review-author">- Sarah Lee</p>
    </div>
  </div>
  </>
  );
}
