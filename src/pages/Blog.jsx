import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blog.blogs).find(
    (blog) => blog._id === id
  );

  return (
    <div>
      This is blog {id}
      <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-pink-800">
        {blog?.title}
      </h5>
      {blog?.tags.map((tag, index) => (
        <span key={index} className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-emerald-200 uppercase last:mr-0 mr-1">
          {tag}
        </span>
      ))}
      <br />
      <small className="font-normal leading-normal mt-0 mb-4 text-pink-800">
        Uploaded at: {new Date(blog?.createdAt).toDateString()}
      </small>
      <hr className="border-emerald-500 mb-3" />
      <p className="text-base font-light leading-relaxed mt-0 mb-4 text-pink-800">
        {blog?.body}
      </p>
    </div>
  );
};

export default Blog;
