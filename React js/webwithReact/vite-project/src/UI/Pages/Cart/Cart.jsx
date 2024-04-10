import React from "react";
import "./Card.css";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


import img1 from "../../../assets/images/cardimg1.jpg";
import img2 from "../../../assets/images/cardimg2.jpg";
import img3 from "../../../assets/images/cardimg3.jpg";
import img4 from "../../../assets/images/cardbtom.jpg";

export default function Cart() {
  return (
    <>
      <div className="mt-5">
        <div className="conteiner-cart ms-5 me-5">
          <div className="imagecard d-flex ">
            <div className="m-5">
              <Card inverse>
                <CardImg
                  className="d-flex g-5 m-6"
                  src={img1}
                  style={{
                    height: 380,
                    width: "250px",
                  }}
                />
                <CardImgOverlay>
                  <CardTitle className="card_text" tag="h5">
                    ANALOG WATCHES{" "}
                  </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="m-5">
              <Card inverse>
                <CardImg
                  src={img2}
                  style={{
                    height: 380,
                    width: "250px",
                  }}
                  width="40%"
                />
                <CardImgOverlay>
                  <CardTitle className="card_text" tag="h5">
                    SMART WATCHES
                  </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="m-5">
              <Card inverse>
                <CardImg
                  src={img3}
                  style={{
                    height: 380,
                    width: "250px",
                  }}
                  width="40%"
                />
                <CardImgOverlay>
                  <CardTitle className="card_text" tag="h5">
                    HEARABLES
                  </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          </div>
          {/* <div className="fast_text">
            <h1>FASTRACK CATEGORIES</h1>
          </div> */}
        </div>
      </div>
      <div className="axius">
        <span>
          <img src={img4} className="w-100 mt-4 mb-5" />
        </span>
      </div>
      <div>
        <ul className="marquee_text">
          <marquee>
            <div className="d-flex gap-4">
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
              <li style={{ color: "white", listStyle: "disc" }}>TRENDING</li>
            </div>
          </marquee>
        </ul>
      </div>
    </>
  );
}
