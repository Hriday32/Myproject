import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import OurNews from "./Pages/OurNews";
import Contact from "./Pages/Contact";
import OurCars from "./Pages/Ourcars";
import "./index.css";
import LoginSection from "./Pages/LoginSection";
import SignUp from "./Pages/SignUp";
import Viewdetail from "./components/Rental fleets/Viewdetail";

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
            <Route path="/login" element={<LoginSection />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Viewdetail/:id" element={<Viewdetail />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
