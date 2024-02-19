import { Target } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Table } from "reactstrap";

export default function User() {
  let [value, setValue] = useState([]);
  const [userType,setUserType]= useState("All")
  // console.log("🚀 ~ User ~ userType:", userType)
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataArray")) || [];
    setValue(data)

    if(userType&&userType!== "All"){
      let selectData = data.filter((e) => e.userType === userType)
      console.log("🚀 ~ useEffect ~ selectData:", selectData)
      setValue(selectData)
    }
    },[userType]);
  return (
    <div>
     

     <FormGroup className='w-25'>
                    <Label for="userType"> User Type</Label>
                    <Input
                        type="select"
                        name="userType"
                        id="userType"
                        value={userType}
                       onChange={(e)=>setUserType(e.target.value)}
                        style={{ boxShadow: "none" }}
                    >
                        <option>All</option>
                        <option>user</option>
                        <option>admin</option>
                        <option>employee</option>
                    </Input>
                </FormGroup>
        <Table>
          <thead>
            <tr >
              <th>sr</th>
              <th>Email</th>
              <th>password</th>
              <th>userType</th>
            </tr>
          </thead>
          <tbody>
            {value.map((e, i) => {
            {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <th>{e.email}</th>
                  <th>{e.password}</th>
                  <th>{e.userType}</th>
                </tr>
              );}
            })}
          </tbody>
        </Table>
      
    </div>
  );
}
