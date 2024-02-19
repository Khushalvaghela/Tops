import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./TaskData";
import User from "./TaskUser";
import Age from "./TaskAge";

export default function TaskRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/age/:age" element={<Age />} />
      </Routes>
    </BrowserRouter>
  );
}