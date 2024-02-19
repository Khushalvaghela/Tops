import React from "react";
import "./Card.css";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import img1 from "./../../../images/cardimg1.jpg";
import img2 from "./../../../images/cardimg2.jpg";
import img3 from "./../../../images/cardimg3.jpg";
import img4 from "./../../../images/cardbtom.jpg";

export default function Cart() {
  return (
    <>
      <div className="d-flex justify-content-end w-auto mt-5 m-5">
        <div className="conteiner">
          <div>
            <Card inverse>
              <CardImg
                className="d-flex g-5 m-6"
                src={img1}
                style={{
                  height: 380,
                  width: "250px",
                }}
                // width="80%"
              />
              <CardImgOverlay>
                <CardTitle className="card_text" tag="h5">
                  ANALOG WATCHES{" "}
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
          <div>
            <Card inverse>
              <CardImg
                src={img2}
                style={{
                  height: 380,
                  width: "250px",
                }}
                // width="40%"
              />
              <CardImgOverlay>
                <CardTitle className="card_text" tag="h5">
                  SMART WATCHES
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
          <div>
            <Card inverse>
              <CardImg
                src={img3}
                style={{
                  height: 380,
                  width: "250px",
                }}
                // width="40%"
              />
              <CardImgOverlay>
                <CardTitle className="card_text" tag="h5">
                  HEARABLES
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
          <div className="fast_text">
            <h1>FASTRACK CATEGORIES</h1>
          </div>
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
