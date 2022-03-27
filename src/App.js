import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Screens/About-Us/About";
import Footer from "./Screens/Home/Footer/Footer";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
