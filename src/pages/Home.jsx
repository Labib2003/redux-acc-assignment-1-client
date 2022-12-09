import React from "react";
import { useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <div>
      This is homepage
      <div className="grid grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <BlogPreviewCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
