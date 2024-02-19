import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import Service from "./Service/Service";
import BikeService from "./Service/BikeService";
import CarService from "./Service/CarService";
import SportsBike from "./Service/Bike/SportBike";
import NormalBike from "./Service/Bike/NormalBike";
import User from "./user/User";
// import HeaderRS from "./HeaderRS";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Header expand="lg"/>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service">
              <Route index Component={Service} />
              <Route path="bike">
                <Route index Component={BikeService} />
                <Route path="sports" element={<SportsBike />} />
                <Route path="normal" element={<NormalBike />} />
              </Route>
              <Route path="car" Component={CarService} />
            </Route>
            <Route path="*" element={<Error404 />} />
            <Route path="/user/:name" element={<User />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}