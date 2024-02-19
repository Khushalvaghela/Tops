import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const NameContaxt = createContext();

export const AgeContaxt = createContext();

export default function UseContaxt() {
  let [name, setName] = useState("khush");
  let [age, setAge] = useState(23);

  return (
    <>
      <NameContaxt.Provider value={name}>
        <ComB name={name} />
        <AgeContaxt.Provider value={{ age: age }}>
          <ComA/>
        </AgeContaxt.Provider>
      </NameContaxt.Provider>
    </>
  );
}