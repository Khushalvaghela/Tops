import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleTask() {
  let [user, setUser] = useState({
    name:"",
    city:"",
    email: "",
    password: "",
  });
  let [index, setIndex] = useState(null);
  let [allUser, setAllUser] = useState([]);

  const addData = (e) => {
    if (user?.email?.length > 0 && user?.password?.length > 0) {
      e.preventDefault();
      setAllUser([...allUser, user]);
      toast.success("User Added succesfully");
      setUser({
        name:"",
        city:"",
        email: "",
        password: "",
      });
    } else {
      toast.error("Please fill data");
    }
  };

  const updateData = () => {
    
    if (index || index === 0 && allUser.length > 1 ) {
      allUser.splice(index, 1, user);
      setUser([...allUser]);

      setUser({
        name:"",
        city:"",
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      toast("Please select data");
    }
  };

  const updateHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };
  return (
    <>
      <Form className="border border-dark p-3 rounded-3">
      <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            value={user?.Name}
            id="exampleEmail"
            placeholder="Enter your Name"
            type="text"
            onChange={(e) => setUser({ ...user, Name: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">city</Label>
          <Input
            value={user?.city}
            id="exampleEmail"
            placeholder="Enter your city"
            type="text"
            onChange={(e) => setUser({ ...user, city: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email}
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button onClick={updateData} className="w-100" color="danger">
            Update
          </Button>
        ) : (
          <Button onClick={(e) => addData(e)} className="w-100" color="danger">
            Submit
          </Button>
        )}
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>city</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.Name}</td>
                <td>{e.city}</td>
                <td>{e.email}</td>
                {/* <td style={{ color: "green" }}>{e.password}</td> */}
                <td>
                  {e.password.length < 8 ? (
                    <td style={{ color: "red" }}>{e.password}</td>
                  ) : (
                    <td style={{ color: "green" }}>{e.password}</td>
                  )}
                </td>
                <td>
                  <Button onClick={() => updateHandler(e, i)} color="danger">
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
