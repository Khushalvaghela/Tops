import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";
import img1 from "../pages/imge.png"

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
      {/* <h1>Home</h1> */}
      <div>
      <img src={img1} style={{height:"700px", width:"1600px"}}alt="" />

      </div>
      {check.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
     
     <div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
}