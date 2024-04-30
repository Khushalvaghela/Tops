

import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./ReviewShow.css";

export default function ReviewShow() {
  const [productShow, setProductShow] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    console.log("🚀 ~ useEffect ~ data:", data);
    setProductShow(data);
  }, []);

  return (
    <div className="d-flex">
      <div className="product-card">
        <div className="image-container">
          <div className="cover-image product-image">
            <img src={productShow.img} alt="" />
          </div>
        </div>

        <div>
          <h5>{productShow.content}</h5>
          <p>{productShow.category}</p>
          <h5>{productShow.price}</h5>
        </div>
       
      </div>
      <div className="reviewData">
          <Review />
        </div>
    </div>
  );
}
