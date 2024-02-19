import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Error from "./Error";
import Admin from "./Admin";
import Super_Admin from "./Super_Admin";
import Profile from "./Profile";
import Header from "./Header";
import Employee from "./Employee";
import { AdmPro, EmpPro, ProfilePro, UserPro } from "./Protected";

export default function TaskRouter() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100vw",
            minHeight: "89vh",
            backgroundColor: "lightgray",
          }}
        >
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/User" element={<UserPro Componenet={<User />} />} />
            <Route
              path="/emp"
              element={<EmpPro Componenet={<Employee />} />}
            />
            <Route
              path="/profile"
              element={<ProfilePro Componenet={<Profile />} />}
            />
            <Route path="/admin" element={<AdmPro Componenet={<Admin />} />} />
            <Route
              path="/supadmin"
              element={<supeAdmin Componenet={<Super_Admin />} />}
            />

            <Route path="*" Component={Error} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
