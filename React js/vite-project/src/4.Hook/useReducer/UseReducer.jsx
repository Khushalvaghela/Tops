import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  const reducer = (state, action) => {
    if (action === "INC") {
      return {count: state.count + 1};
    } else if (action === "DEC") {
      return {count: state.count - 1};
    } else {
      return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, {count : 1000});
  return (
    <div>
      <h1>count is{state.count}</h1>
      <Button onClick={() => dispatch("INC")}>INC+1</Button>
      <Button onClick={() => dispatch("DEC")}>DEC-1</Button>
      {/* <Button onClick={() => pro("proo")}>DEC-1</Button> */}
    </div>
  );
}

//   let [count, setCount] = useState(0);

//   const addOne = () => setCount(count + 1);
//   const delOne = () => setCount(count - 1);
