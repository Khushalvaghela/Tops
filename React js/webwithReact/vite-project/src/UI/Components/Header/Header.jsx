import { Button, NavItem } from "reactstrap";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import reactimg1 from "./img1.png";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import { HeartIcon, LogIn, User, User2 } from "lucide-react";
import { Bag } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/fetures/auth/authSlice";


export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("loginUser")) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const logoutHandler = () => {
  //   localStorage.setItem("loginUser", JSON.stringify([]));
  //   navigate("/");
  //   toast.warning("Log Out Successfully !", {
  //     position: "top-center",
  //     autoClose: 10000,
  //     hideProgressBar: false,
  //     theme: "light",
  //   });
  // };
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");}
  const data = useSelector((state) => state.authSlice);
 

  const loginToggle = () => setLoginModal(!loginModal);
  const registerToggle = () => setRegisterModal(!registerModal);
  return (
    <>
      <LoginModal
        toggle={loginToggle}
        modal={loginModal}
        registerToggle={registerToggle}
      />
      <RegisterModal
        toggle={registerToggle}
        modal={registerModal}
        login={loginToggle}
      />
      <header class="header-fixed">
        <div class="header-limiter">
          <h1>
            <a href="#">
              <span style={{ color: "white" }} onClick={() => navigate("/")}>
                {" "}
                𝙁𝙖𝙨𝙩𝙧𝙖𝙘𝙠
              </span>

              <span>
                <img style={{ height: "35px" }} src={reactimg1} />
              </span>
            </a>
          </h1>
          <nav>
            <div>
              <NavItem className="d-flex gap-3">
                {data.user?.userType !== "admin" ? (
                  <>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/watches"}>Watches</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to={"/admin"}>Admin</NavLink>
                    <NavLink to={"/product"}>Product</NavLink>
                    <NavLink to={"/profile"}>profile</NavLink>
                    <NavLink to={"/dashboard"}>dashboard</NavLink>
                    <NavLink to={"/userData"}>userData</NavLink>
                  </>
                )}

                <div>
                  {Object.keys(loginData).length > 0 ? (
                    <div>
                      <LogIn onClick={logoutHandler} />

                      {/* <p>log out</p> */}
                    </div>
                  ) : (
                    <div>
                      <LogIn onClick={loginToggle} />

                      {/* <p>log in</p> */}
                    </div>
                    
                  )}
                </div>
                <NavLink to={"/witchlist"}>
                  <HeartIcon />
                </NavLink>
                <NavLink to={"/Bag"}>
                  <Bag size={20} />
                </NavLink>
              </NavItem>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
