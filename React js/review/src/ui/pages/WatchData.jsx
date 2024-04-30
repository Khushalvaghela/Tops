import React, { useState } from "react";
import "./Watch.css";

import img1 from "./images/jorden1.png";
import img2 from "./images/jorden2.png";
import img3 from "./images/jorden3.png";

import ReviewModal from "./Component/Modal/ReviewModal";
import { Button } from "reactstrap";
import { useEffect } from "react";

let items = [
  {
    img: img1,
    content:
      "Luka 2 PF",
    
    category: "Men's Shoes",
    price: "₹ 12 795.00",
  },
  {
    img: img2,
    content:
    "Air Jordan 1 Low",
    category:  "Basketball Shoes",
    price: "₹  8 995.00",
  },
  {
    img: img3,
    content:"Jordan Max Aura 5",
    category: "Men's Shoes",
    price: "₹ 11 895.00",
  },
];

export default function WatchData() {
  let [data, setData] = useState([]);
  console.log("🚀 ~ WatchData ~ data:", data);
  const [newData, setNewData] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  let reviewHandler = (product) => {
    setData(product);
    localStorage.setItem("data", JSON.stringify(product));
    toggle();
    console.log("🚀 ~ reviewHandler ~ product:", product);
  };

  console.log("🚀 ~ FunTask ~ newData:", newData);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setNewData(data);
  }, []);

  return (
    <div className="grid-container">
      {items.map((ele, index) => (
        <div className="card" key={index}>
          <div className="relative overflow-hidden">
            <img src={ele.img} alt={ele.content} className="mb-2" />
            <div className="absolute h-full w-full bg-black/0 flex justify-end items-start -top-20 hover:-top-3 pe-2 pt-4 hover:opacity-100 opacity-20 transition-all duration-700">
              {/* Icon or action button */}
            </div>
          </div>
          <h6 className="line-clamp-2 hover:underline">{ele.content}</h6>
          <p className="text-gray-500">{ele.category}</p>
          <h5 className="pb-3 text-black">{ele.price}</h5>
          <Button onClick={() => reviewHandler(ele)}>Give Review</Button>
        </div>
      ))}
      <ReviewModal modal={modal} toggle={toggle} />
    </div>
  );
}
