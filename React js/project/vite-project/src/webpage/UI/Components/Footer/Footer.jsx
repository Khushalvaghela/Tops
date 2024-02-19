import React from "react";
import "./Footer.css";
import reactimg1 from "./img1.png";

export default function Footer() {
  return (
    <div>
      <body>
        <footer class="footer--light">
          <div class="footer-big">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-sm-">
                  <div class="footer-widget">
                    <div class="widget-about">
                      <h1>
                        <a href="#" className="d-flex gap-2 ">
                          <span className="fast">𝙁𝙖𝙨𝙩𝙧𝙖𝙘𝙠</span>
                          <span>
                            <img style={{ height: "40px" }} src={reactimg1} />
                          </span>
                        </a>
                      </h1>
                      <p>
                        There are many variations of users of YouTube available.
                      </p>
                      <ul class="contact-details">
                        <li>
                          <i class="fas fa-phone-alt"></i> Call Us:
                          <a href="#">706-993-0966</a>
                        </li>
                        <li>
                          <i class="fas fa-envelope-open-text"></i>
                          <a href="#">vaghelakhush926@gamil.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="footer-widget">
                    <div class="footer-menu">
                      <h4 class="footer-widget-title">CUSTOMER SERVICE</h4>
                      <ul>
                        <li>
                          <a href="#">Payment Options</a>
                        </li>
                        <li>
                          <a href="#">Track Order</a>
                        </li>
                        <li>
                          <a href="#">Find a Store</a>
                        </li>
                        <li>
                          <a href="#">Encircle Program</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="footer-widget">
                    <div class="footer-menu">
                      <h4 class="footer-widget-title">POLICIES</h4>
                      <ul>
                        <li>
                          <a href="#">Brand Protection</a>
                        </li>
                        <li>
                          <a href="#">Cancellation</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Warranty Policies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="footer-widget">
                    <div class="footer-menu p-0">
                      <h4 class="footer-widget-title">Help Support</h4>
                      <ul>
                        <li>
                          <a href="#">Support Forum</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Support Policy</a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}
