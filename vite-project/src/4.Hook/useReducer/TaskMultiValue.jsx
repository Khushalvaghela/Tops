import React, { useReducer, useState } from "react";
import { Button, Input } from "reactstrap";
import { toast } from "react-toastify";

export default function TaskMultiValue() {
  const reducer = (state, action) => {
    if (action.actionType === "INC") {
      toast.success("Your Data Added Successfully");
      return { count: state.count + action.payLoad };
    } else {
      return state;
    }
  };
  let [count, dispatch] = useReducer(reducer, { count: 1000 });
  let [inpValue, setInpValue] = useState("");

  const Handler = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setInpValue(value);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center">Count is : {count.count}</h1>
        <div className="mt-3" style={{ textAlign: "center" }}>
          <Input
            type="text"
            placeholder="Enter your Number"
            className="w-25 mb-3 text-center m-auto"
            value={inpValue}
            onChange={Handler}
          />
          <Button
            color="danger"
            onClick={() =>
              inpValue == ""
                ? toast.error("Please Fill Data")
                : dispatch({
                    actionType: "INC",
                    payLoad: +inpValue,
                    blank: setInpValue(""),
                  })
            }
          >
            INC nu
          </Button>
        </div>
      </div>
    </>
  );
}
