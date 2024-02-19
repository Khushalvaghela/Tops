import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import "./SecondCard.css";
import img1 from "./../../../images/card1.jpg";
import img2 from "./../../../images/card2.jpg";
import img3 from "./../../../images/card3.jpg";
import img4 from "./../../../images/symbol1.png";
import img5 from "./../../../images/symbol2.png";
import img6 from "./../../../images/symbol3.png";
import img7 from "./../../../images/symbol4.png";
import video from "./../../../images/Fastrack.mp4";

export default function SecondCard() {
  return (
    <>
      <div className="card_two mt-5 m-3">
        <div className="conteiner ">
          <div>
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={img1}
                style={{
                  height: 500,
                  width: 350,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle className="classtag">ELEVATED CASUAL</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
          <div>
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={img2}
                style={{
                  height: 500,
                  width: 350,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle className="classtag">PARTY</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
          <div>
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={img3}
                style={{
                  height: 500,
                  width: 350,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle className="classtag">STREET</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      </div>
      <div className="video">
        <video src={video} loop autoPlay muted></video>
      </div>
      <div className="symbol mt-5">
        <div className="d-flex">
          <img src={img4} alt="" />
          <h5>SAFE AND SECURE CHECKOUT</h5  >
        </div>
        <div className="d-flex">
          <img src={img5} alt="" />
          <h5>PREMIUM QUALITY PRODUCTS</h5>
        </div>
        <div className="d-flex">
          <img src={img6} alt="" />
          <h5>7 DAY RETURN</h5>
        </div>
        <div className="d-flex"> 
          <img src={img7} alt="" />
          <h5>FREE SHIPPING NATIONWIDE</h5>
        </div>
      </div>
      
    </>
  );
}
