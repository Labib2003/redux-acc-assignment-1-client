import React from "react";
import { useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <div>
      This is homepage
      {blogs.map((blog) => (
        <BlogPreviewCard blog={blog} />
      ))}
    </div>
  );
};

export default Home;
