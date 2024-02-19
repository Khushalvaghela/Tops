import { Button } from "reactstrap";
import React from "react";
import { useState } from "react";

export default function UsesSteatpro2() {
  const colorarr = ["red", "black", "yellow", "blue", "green"];
  let [index, setindex] = useState(0);
  const changeindex = () => {
    if (index === colorarr.length  -1) {
      let con = window.confirm("this number is last");
      if (con) {
        setindex(0);
      }
    } else {
      setindex(index + 1);  
    }
  };
  return (
    <div className="d-flex flex-column justify-content center">
      <h1>{index}</h1>
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: colorarr[index],
          color: "white",
        }}
        className="m-5"
      >
        <h1> Hello World</h1>
      </div>
      <Button disabled:false color="danger" onClick={() => changeindex()}>
        Change color
      </Button>
    </div>
  );
}

