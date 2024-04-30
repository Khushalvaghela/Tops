import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./WatchData.css";
import { toast } from "react-toastify";
import { fetchCart } from "../../../redux/fetures/product/cart";
export default function WatchData({ product }) {
  let [data, setData] = useState([]);
  const dataWatch = useSelector((state) => state.authSlice);
const dispatch =useDispatch()
  if (!product) {
    return null;
  }
  // let ViewProduct = (id) => {
  //   setData(id);
  // };

  const addtocardhandler = (id) => {
    // console.log("first-id", id, dataWatch?.token);

    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${id}`,
      headers: {
        authorization: `Bearer ${dataWatch?.token}`,

        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log("cardlog", res?.data?.data);
        dispatch(fetchCart())
        toast.success("success")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="product-card">
        <div class="product-image">
          <img alt="Sample" src={product.thumbnail} />
        </div>
        <div class="product-details">
          <h3 class="product-title">{product.title}</h3>
          <p class="product-description">{product.description}</p>
          <div class="product-price">
            <span class="price">
              <b>Price:</b> {product.price}
            </span>
            <span className="discount">{product.discountPercentage}% off</span>
          </div>
          <button
            class="add-to-cart"
            onClick={() => addtocardhandler(product?._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
