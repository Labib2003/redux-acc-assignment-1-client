import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import fetchBlogs from "../redux/thunk/blogPosts/fetchBlogs";
import Navbar from "./Navbar";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="w-full lg:w-3/4 mx-auto p-1">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Main;
