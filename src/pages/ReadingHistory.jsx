import React from "react";
import { useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";

const ReadingHistory = () => {
  const history = useSelector((state) => state.blog.history);
  return (
    <div>
      Recently read blogs
      <div className="grid grid-cols-3 gap-3">
        {
            history.map(blog => <BlogPreviewCard blog={blog} />)
        }
      </div>
    </div>
  );
};

export default ReadingHistory;
