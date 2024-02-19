import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function CreReaDel() {
    let [preUser, setPreUser]= useState({
        Email:"",
        Password:"",

    })
    let [allData,setAllData] =useState([])
    console.log("🚀 ~ CreReaDel ~ allData:", allData)
    let addData =()=>{
      setAllData([...allData,preUser])
      setPreUser({
        Email:"",
        Password:"",
      })
    }
    let deleteHandler=(index)=>{
      allData.splice(index,1)
      setPreUser([...allData])
    }
    let deletall=()=>{
      setAllData([])
    }
  return (
    <div>
      {/* <h1>{preUser.Email}</h1>
      <h1>{preUser.Password}</h1> */}
      <Form>
        <FormGroup>
          <Label for="Email" hidden>
            Email
          </Label>
          <Input
          value={preUser.Email}
            id="Email"
            placeholder="Email"
            type="email"
            onChange={(e)=>setPreUser({...preUser,Email:e?.target?.value})}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="Password" >
            Password
          </Label>
          <Input
          value={preUser.Password}
            id="Password"
            placeholder="Password"
            type="text"
            onChange={(e)=>setPreUser({...preUser,Password:e?.target?.value})}
          />
        </FormGroup>{" "}
        <Button onClick={addData}>Submit</Button>
      </Form>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.Email}</td>
                <td style={{ color: "green" }}>{e.Password}</td>
                <td>
                  <Button onClick={() => deleteHandler(i)} color="danger">
                    Delete
                  </Button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={deletall}>deletall</Button>
    </div>
    
  );
}
