import React from "react";
import reactimg1 from "../../../assets/images/img1.jpg";
import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTow";
import Cart from "../Cart/Cart";
import SinglePage from "../SinglePage/singlePage";
import SecondCard from "../Cart/SecondCard";
export default function Home() {
  return (
    <div>
      <Carousel />
      <span>
        <img src={reactimg1} className="w-100 mt-4" />
      </span>
      <Cart />
      <SinglePage />
      <CarouselTwo />
      <SecondCard />
    </div>
  );
}
