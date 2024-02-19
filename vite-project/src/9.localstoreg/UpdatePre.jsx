import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function UpdatePre() {
  let [todo, setTodo] = useState({
    email: "",
    password: "",
  });
  let [allTodo, setAllTodo] = useState([]);
  let [index, setindex] = useState(null);

  const addData = (e) => {
    if (todo?.email?.length > 0 && todo?.password?.length > 0) {
      e.preventDefault();
      setAllTodo([...allTodo, todo]);
      localStorage.setItem("todo list",JSON.stringify([...allTodo,todo]))
      toast.success("add succesfully");
      setTodo({
        email: "",
        password: "",
      });
    } else {
      toast.error("anter data");
    }
  };
  const deleteHandler = (index) => {
    allTodo.splice(index, 1);
    setTodo([...allTodo]);
  };
  const updateData = () => {
    if (index || index === 0) {
      allTodo.splice(index, 1, todo);
      setTodo([...allTodo]);
      localStorage.setItem("todo list", JSON.stringify([...allTodo]));

      setTodo({
        email: "",
        password: "",
      });
      setindex(null);
    } else {
      toast("sel data");
    }
  };
  const updateHandler = (data, index) => {
    setTodo(data);
    setindex(index);
  };

  useEffect(() => {
    let json_data = localStorage.getItem("todo list");
    let normal_data = JSON.parse(json_data);
    // console.log(normal_data)
    setAllTodo(normal_data || []);
  }, []);
  return (
    <>
      {/* <h1>{todo.email}</h1>
      <h1>{todo.password}</h1> */}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
            value={todo.email}
            onChange={(e) => setTodo({ ...todo, email: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password "
            type="password"
            value={todo.password}
            onChange={(e) => setTodo({ ...todo, password: e?.target?.value })}
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button onClick={updateData}>update</Button>
        ) : (
          <Button onClick={(e) => addData(e)} color="danger">
            Submit
          </Button>
        )}
      </Form>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>password</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {allTodo.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <Button onClick={() => deleteHandler(i)} color="danger">
                    Delete
                  </Button>
                </td>
                <td>
                  <Button onClick={() => updateHandler(e, i)} color="danger">
                    update
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
