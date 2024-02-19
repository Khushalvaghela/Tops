import { Button, NavItem } from "reactstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import reactimg1 from "./img1.png";

export default function Header() {
  return (
    <>
      <header class="header-fixed">
        <div class="header-limiter">
          <h1>
            <a href="#">
              𝙁𝙖𝙨𝙩𝙧𝙖𝙘𝙠
              <span>
                <img style={{ height: "35px" }} src={reactimg1} />
              </span>
            </a>
          </h1>
          <nav>
            <div>
              <NavItem className="d-flex gap-2">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/watches"}>Watches</NavLink>

                <Button className="register_btn">Register</Button>
                <Button className="login_btn">Log in</Button>
              </NavItem>
            </div>
          </nav>
        </div>
      </header>
      <div class="header-fixed-placeholder"></div>
    </>
  );
}
