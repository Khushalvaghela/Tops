import React from "react";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function TaskData() {
  let arry = [
    { name: "khush", age: 23 },
    { name: "nimesh", age: 20 },
  ];

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-center mt-3 mb-2">Table</h1>
      <Table striped className="w-50 m-auto mt-5">
        <thead>
          <tr>
            <th>sr</th>
            <th>Name</th>
            <th>age</th>
            <th>allData</th>
          </tr>
        </thead>
        <tbody>
          {arry.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td role="button" onClick={() => navigate(`/user/${e.name}`)}>
                  {e.name}
                </td>
                <td role="button" onClick={() => navigate(`/age/${e.age}`)}>
                  {e.age}
                </td>
                <td role="button" onClick={() => navigate(`/allData/${e.allData}`)}>
                  {e.allData}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
