import { Button } from "reactstrap";
import React from "react";
import { useState } from "react";

export default function UseStaefun() {
let [count,setCount] = useState(1)
  let x = 0;

  const incrementCount = () => {
    setCount (count+1)
    x += 1;
    console.log(" x:", x);
  };

  return (
    <>
    <h1>x is {x}</h1>
      <h1>Count is{count} </h1>
      <Button color="danger" onClick={() => incrementCount()}>
        inc
      </Button>
    </>
  );
}
