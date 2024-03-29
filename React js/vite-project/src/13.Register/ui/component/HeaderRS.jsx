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
import RegisterModal from "./model/RegisterModel";
import LoginModel from "./model/LoginModel";

function HeaderRS(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [registerModal, setRegisterModal] = useState(false);

  const registerToggle = () => setRegisterModal(!registerModal);

  const [loginModel, setLoginModel] = useState(false);

  const loginToggle = () => setLoginModel(!loginModel);
  return (
    <div>
      <RegisterModal modal={registerModal} toggle={registerToggle} />
      <LoginModel modal={loginModel} toggle={loginToggle} />
      <Navbar style={{ width: "100vw" }} {...args}>
        <NavbarBrand href="/">ToDo </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className=" w-100  d-flex align-items-center  justify-content-between "
            navbar
          >
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/user">user</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/todo">todo</NavLink>
            </NavItem>
            <div>
              <Button onClick={registerToggle} className="me-3" color="danger">
                Register
              </Button>
              <Button onClick={loginToggle} className="me-5" color="danger">
                login
              </Button>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderRS;
