import React from "react";
import { useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";

const ReadingHistory = () => {
  const history = useSelector((state) => state.blog.history);
  
  return (
    <div>
      <h4 className="text-3xl font-normal leading-normal text-emerald-800">
        Recently read blogs
      </h4>
      <div className="grid grid-cols-4 gap-3">
        {history.map((blog) => (
          <BlogPreviewCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
