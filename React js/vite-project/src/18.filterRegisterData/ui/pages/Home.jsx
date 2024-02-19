import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";

export default function Home() {
  const navigate = useNavigate();
  let [check, setCheck] = useState([]);

  const checkHandler = (item) => {
    const matchItem = check?.includes(item);
    if (matchItem) {
      let filter = check?.filter((e) => e !== item);
      setCheck(filter);
    } else {
      setCheck([...check, item]);
    }
  };
  return (
    <div className="d-flex flex-column ">
      <h1>Home</h1>
      {check.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
     
     
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}