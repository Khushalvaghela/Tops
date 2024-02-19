import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Footer from "../UI/Components/Footer/Footer";
import About from "../UI/Pages/about/About";
import Watches from "../UI/Pages/watches/Watches";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/watches" element={<Watches/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
