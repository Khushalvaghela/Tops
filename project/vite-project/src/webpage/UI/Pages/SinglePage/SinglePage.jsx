import React from "react";
import "./SinglePage.css"

import img1 from "./../../../images/product1.jpg";
import img2 from "./../../../images/product2.jpg";
import img3 from "./../../../images/product3.jpg";
import img4 from "./../../../images/product4.jpg";
import img5 from "./../../../images/product5.jpg";
import img6 from "./../../../images/product6.jpg";
import img7 from "./../../../images/product7.jpg";
import img8 from "./../../../images/moodimg.jpg";

export default function singlePage() {
  return (
	<>
    <div>
      <div class="owl-carousel owl-theme mt-5 w-auto">
        
        <div class="item">
          <img src={img1} alt="" />
          <h6>
            Fastrack Automatics Brown Dial Stainless Steel Strap Watch for Girls
          </h6>
		  <p>Girls Watch <br />₹ 8,995.00</p>
        </div>
        <div class="item">
          <img src={img2} alt="" />
		  <h6>
		  Fastrack Automatics Silver Dial Stainless Steel Strap Watch for Girls
          </h6>
		  <p>Girls Watch <br /> ₹ 8,995.00</p>
        </div>
        <div class="item">
          <img src={img3} alt="" />
		  <h6>
		  Fastrack Automatics Brown Dial Stainless Steel Strap Watch for Girls
          </h6>
		  <p>Guys Watch <br /> ₹ 2,795.00</p>
        </div>
        <div class="item">
          <img src={img4} alt="" />
		  <h6>
		  Fastrack Glitch Quartz Analog Rose Gold Dial Metal Strap Watch for Girls
          </h6>
		  <p>Girls Watch <br />₹ 5,795.00</p>
        </div>
        <div class="item">
          <img src={img5} alt="" />
		  <h6>
		  Fastrack Cerame Quartz Multifunction Black Dial Steel & Ceramic Strap Watch for Guys
          </h6>
		  <p>Guys Watch <br />₹ 7,995.00</p>
        </div>
        <div class="item">
          <img src={img6} alt="" />
		  <h6>
		  Fastrack Glitch Quartz Analog Silver Dial Metal Strap Watch for Girls
          </h6>
		  <p>Girls Watch <br />₹ 5,195.00</p>
        </div>
        <div class="item">
          <img src={img7} alt="" />
		  <h6>
		  Fastrack Glitch Quartz Analog Black Dial Metal Strap Watch for Girls
          </h6>
		  <p>Girls Watch <br />₹ 5,595.00</p>
        </div>
      </div>
    </div>
	<div className="mood">
        <span>
          <img src={img8} className="w-100 mt-4 mb-5" />
        </span>
      </div>
	</>
  );
}
