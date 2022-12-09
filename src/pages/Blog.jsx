import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blog.blogs).find(
    (blog) => blog._id === id
  );

  return (
    <div>
      <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-pink-800">
        {blog?.title}
      </h5>
      {blog?.tags.map((tag, index) => (
        <span
          key={index}
          className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-emerald-200 uppercase last:mr-0 mr-1"
        >
          {tag}
        </span>
      ))}
      <br />
      <small className="font-normal leading-normal mt-0 mb-4 text-pink-800">
        Created at: {new Date(blog?.createdAt).toDateString()}
      </small>
      <hr className="border-emerald-500 mb-3" />
      <p className="text-base font-light leading-relaxed mt-0 mb-4 text-pink-800">
        {blog?.body}
      </p>
      <Link
        className=" text-emerald-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        to="/"
      >
        Return to home
      </Link>
    </div>
  );
};

export default Blog;
