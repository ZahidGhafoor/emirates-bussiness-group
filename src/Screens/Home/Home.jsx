import React from "react";

import Header from "../Home/Header/Header"
import LittleDetails from "../Home/companyDetails/LittleDetails";
import Company from "../Home/Companies/Company"
import Footer from "../Home/Footer/Footer"


const Home = () => {
  return (
    <>
      <Header />
      <LittleDetails />
      <Company />
    </>
  );
};

export default Home;
