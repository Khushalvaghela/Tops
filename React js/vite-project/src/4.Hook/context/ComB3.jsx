import React, { useContext} from "react";
import { NameContaxt, AgeContaxt } from "./UseContext";
export default function ComB3({ name3 }) {
  const data = useContext(NameContaxt);


  const data2 = useContext(AgeContaxt);
  console.log("-----------  data2----------->", data2);
  return (
    <>
      <h1>1. My Name is {name3}</h1>
      <h1>2. My Name is {data}</h1>
    </>
  );
}