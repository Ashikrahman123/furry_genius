import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Booking from "../pages/Booking";
import Navbar from "../components/Navbar"; 
import Header from "../components/Header";

const AppNavigator = () => {
  return (
    <BrowserRouter>
    <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigator;
