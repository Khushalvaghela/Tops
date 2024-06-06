import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/Pages/Home/Home";
import Header from "../UI/Components/Header/Header";
import Footer from "../UI/Components/Footer/Footer";
import About from "../UI/Pages/about/About";
import Watches from "../UI/Pages/watches/Watches";
import Admin from "../UI/Pages/admin/Admin";
import Witchlist from "../UI/Pages/bag/WitchList";
import Bag from "../UI/Pages/bag/Bag";
import { Provider } from "react-redux";
import DashBoard from "../UI/Pages/dashboard/DashBoard";
import Profile from "../UI/Pages/profilesection/Profile";
import Product from "../UI/Pages/product/Product";
import Contact from "../UI/Pages/contact/Contact";
import UserData from "../UI/Pages/user/UserData";

export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/witchlist" element={<Witchlist />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/product" element={<Product/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/userData" element={<UserData/>} /> 


        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
