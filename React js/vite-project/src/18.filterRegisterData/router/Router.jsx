import React from "react";
import Home from "../ui/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../ui/pages/Error404";
import HeaderRS from "../ui/component/HeaderRS";
import LoginHe from "../ui/component/LoginHe";
import User from "../ui/pages/User";

// import ToDoList from "../../14.ToDoList/ToDoList";

export default function ProtectedRouter() {
  return (
    <>
      <BrowserRouter>
        <HeaderRS expand="lg" />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          // className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/todo" element={<ToDoList />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
