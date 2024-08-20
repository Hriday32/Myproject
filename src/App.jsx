import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import OurNews from "./Pages/OurNews";
import Contact from "./Pages/Contact";
import OurCars from "./Pages/OurCars";
import "./index.css";
import LoginSection from "./Pages/LoginSection";
import SignUp from "./Pages/SignUp";
import Viewdetail from "./components/Rental fleets/Viewdetail";
import Booking from "./components/Rental fleets/Booking";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ourCars" element={<OurCars />} />
            <Route path="/ourNews" element={<OurNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="viewdetail/:slug" element={<Viewdetail />} />
            <Route path="/booking/:slug" element={<Booking />} />
          </Route>
          <Route path="/login" element={<LoginSection />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
