// import React, { useReducer } from "react";
// import { Button } from "reactstrap";

// export default function ReducerPayload() {
//   const reducer = (state, action) => {
//     if (action.actionType === "INC") {
//       return { count: state.count + action?.payload };
//     } else {
//       return state;
//     }
//   };

//   let [count, dispatch] = useReducer(reducer, { count: 1000 });
//   return (
//     <div>
//       <h1>count is :{count.count}</h1>
//       <Button onClick={() => dispatch({actionType:"INC", payload: 10})}>INC by Number</Button>
//     </div>
//   );
// }

// import React, { useReducer, useState } from "react";
// import { Button, Input } from "reactstrap";

// export default function ReducerPayload() {
//   const reducer = (state, action) => {
//     if (action.actionType === "INC") {
//       return { count: state.count + action.payload };
//     } else {
//       return state;
//     }
//   };

//   const [countState, dispatch] = useReducer(reducer, { count: 1000 });
//   const [inputValue, setInputValue] = useState("");

//   const handler = (e) => {
//     setInputValue(parseInt(e.target.value, 10));
//   };

//   return (
//     <div>
//       <h1>count is: {countState.count}</h1>
//       <Input
//         type="number"
//         value={inputValue}
//         onChange={handler}
//         placeholder="input your number"
//       />
//       <Button
//         color="primary "
//         onClick={() => dispatch({ actionType: "INC", payload: inputValue })}
//       >
//         INC by Number
//       </Button>
//     </div>
//   );
// }

import React, { useReducer, useState } from "react";
import { Button, Input } from "reactstrap";

export default function ReducerPayload() {
  const reducer = (state, action) => {
    if (action.actionType === "INC") {
      return { count: state.count + action.payload };
    } else {
      return state;
    }
  };

  const [countState, dispatch] = useReducer(reducer, { count: 1000 });
  const [inputValue, setInputValue] = useState("");

  const handler = (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value)) {
      setInputValue(value);
    }
  };

  function submitHandler() {
    dispatch({ actionType: "INC", payload: inputValue });
    setInputValue("");
  }
  return (
    <div>
      <h1>count is: {countState.count}</h1>
      <Input
        type="text"
        value={inputValue}
        onChange={handler}
        placeholder="input your number"
      />
      <Button color="primary" onClick={() => submitHandler()}>
        INC by Number
      </Button>
    </div>
  );
}
