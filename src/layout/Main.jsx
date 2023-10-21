import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="xl:px-64">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
