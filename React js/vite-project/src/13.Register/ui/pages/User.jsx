import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function User() {
  let [value, setValue] = useState([]);
  // console.log("🚀 ~ file: User.jsx:6 ~ User ~ value:", value)
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataArray")) || [];
    // const filteredData = data.filter((e) => e.userType !== "admin");
    // setValue(filteredData);
    setValue(data)
  }, []);
  return (
    <div>
      {value.length === 0 ? (
        "Data Not Found"
      ) : (
        <Table>
          <thead>
            <tr >
              <th>sr</th>
              <th>Email</th>
              <th>password</th>
              <th>gender</th>
              <th>hobby</th>
              <th>userType</th>
            </tr>
          </thead>
          <tbody>
            {value.map((e, i) => {
              if(e.userType === "user"){
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <th>{e.email}</th>
                  <th>{e.password}</th>
                  <th>{e.gender}</th>
                  <th>{e.hobby}</th>
                  <th>{e.userType}</th>
                </tr>
              );}
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
