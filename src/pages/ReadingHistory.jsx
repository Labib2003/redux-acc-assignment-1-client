import React from "react";
import { useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";

const ReadingHistory = () => {
  const history = useSelector((state) => state.blog.history);
  
  return (
    <div>
      <h4 className="text-3xl font-normal leading-normal text-emerald-800 border-b border-emerald-100 pb-3 mb-5">
        Recently read blogs
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {history.map((blog) => (
          <BlogPreviewCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
