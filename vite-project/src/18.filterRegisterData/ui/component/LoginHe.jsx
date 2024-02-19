import { Import } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import LoginModel from "./model/LoginModel";


function LoginHe(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [loginModel, setLoginModel] = useState(false)
 
const LoginToggle =() => setLoginModel(!loginModel);

  return (
    <div>
      <loginModel modal={loginModel} toggle={LoginToggle} />
      

    </div>
  );
}

export default LoginHe;