import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import Select from 'react-select';

let gender = ["male", "female", "kids"];

const initializeData = {
  email: "",
  password: "",
  gender: "male",
};

export default function LoginModel({ modal, toggle }) {
  let [user, setUser] = useState(initializeData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("🚀 ~ LoginModel ~ user:", user);
    setUser(initializeData);
    toggle();
  };

  // to get from data

  const Loginbtn = () => {
    setUser(initializeData);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={Loginbtn}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={user?.email}
                id="exampleEmail"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                value={user?.password}
                id="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                placeholder="Enter your password"
                type="password"
              />
            </FormGroup>
            <label>Gender</label>
            <div className="d-flex gap-3">
              {gender.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Input
                      name="radio"
                      type="radio"
                      onClick={() => setUser({ ...user, gender: e })}
                    />
                    <Label>{e}</Label>
                  </FormGroup>
                );
              })}
            </div>

            <div>
              <Button color="danger" className="w-100 mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
