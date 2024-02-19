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
import RegisterModel from "./modal/RegisterModel";

function HeaderRS(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const [registerModal, setRegisterModal] = useState(false);

  const registerToggel = () => setRegisterModal(!registerModal);

  return (
    <div>
      <RegisterModel  modal={registerModal} toggle={registerToggel}/>
      <Navbar style={{ width: "100vw" }} {...args}>
        <NavbarBrand href="/">
          <h1>Router</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="  w-100  d-flex align-items-center justify-content-between "
            navbar
          >
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <Button  onClick={registerToggel} className=" me-5" color="danger">
              Login
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderRS;
