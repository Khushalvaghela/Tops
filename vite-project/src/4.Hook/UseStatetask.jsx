import React from "react";
import { Button } from "reactstrap";
import { useState } from "react";

export default function UseStatetask() {
  const colorarr = ["red", "black", "yellow", "blue", "green"];
  let [index, setindex] = useState(0);
  const [ButtonDiseble, setButtonDiseble] = useState(false)
  const changeindex = () => {
    if (index === colorarr.length - 1) {
      let con = window.confirm("continue to count");
      if (con) {
       setindex(index + 1);
       
      }else{
        setindex(0);
        setButtonDiseble(true)
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
      <Button color="danger" onClick={() => changeindex()} disabled={ButtonDiseble}>
        Change color
      </Button>
    </div>
  );
}

