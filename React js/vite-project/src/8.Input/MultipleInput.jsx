import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Table,
} from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    Surname: "",
    Name: "",
    email: "",
    city: "",
    password: "",
  });
  let [allUser, setAllUser] = useState([]);

  // {
  //     email:"test@gmail.com"
  //     password:"2345"
  // }
  const addData = (e) => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.Name.length > 0 &&
      user.city.length > 0 &&
      user.Surname.length > 0 
    ){
      e.preventDefault();
      setAllUser([...allUser, user]);
      toast.success("user added succesfully");
    } else {
      toast.error("please fill the data");
    }
  };
  return (
    <>
      {/* <h1>email={user.email}</h1> */}
      {/* <h1>password= {user.password}</h1> */}
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="exampleEmail">Surname</Label>
          <Input
            id="Surname"
            placeholder="Enter your Surname"
            type="text"
            onChange={(e) => setUser({ ...user, Surname: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            id="Name"
            placeholder="Enter your Name"
            type="text"
            onChange={(e) => setUser({ ...user, Name: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">city</Label>
          <Input
            id="city"
            placeholder="Enter your city"
            type="text"
            onChange={(e) => setUser({ ...user, city: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        <Button onClick={(e) => addData(e)} className="w-100" color="danger">
          Submit
        </Button>
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr </th>
            <th>Surname</th>
            <th>Name</th>
            <th>email</th>
            <th>city</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.Surname}</td>
                <td>{e.Name}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td>{e.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
