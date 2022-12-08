import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container w-3/4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
