import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import GET_CONTENT from "../redux/thunk/blogPosts/GET_CONTENT";
import Navbar from "./Navbar";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_CONTENT());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="w-full lg:w-3/4 mx-auto p-2">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Main;
