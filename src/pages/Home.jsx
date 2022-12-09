import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";
import { handleTags, toggleSort } from "../redux/actions/filterActions";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const { sortByNew, tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between mb-5 border-b border-emerald-100 pb-3">
        <h4 className="text-3xl font-normal leading-normal text-emerald-800">
          Welcome to my blog-site
        </h4>
        <div className="my-auto flex gap-1">
          <p className="text-lg leading-relaxed text-emerald-800">Sort by:</p>
          <select
            className="px-2 py-1 placeholder-slate-300 text-emerald-600 relative bg-white rounded text-sm border-0 outline-none focus:outline-none focus:ring"
            onChange={() => dispatch(toggleSort())}
          >
            <option value="old">Oldest first</option>
            <option value="new">Newest first</option>
          </select>
          <p className="text-lg leading-relaxed text-emerald-800">Filter by:</p>
          <span
            className={`text-xs leading-[unset] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 last:mr-0 mr-1 cursor-pointer ${
              tags.includes("React") ? "bg-emerald-200" : null
            }`}
            onClick={() => dispatch(handleTags("React"))}
          >
            React
          </span>
          <span
            className={`text-xs leading-[unset] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 last:mr-0 mr-1 cursor-pointer ${
              tags.includes("JavaScript") ? "bg-emerald-200" : null
            }`}
            onClick={() => dispatch(handleTags("JavaScript"))}
          >
            JavaScript
          </span>
          <span
            className={`text-xs leading-[unset] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600  last:mr-0 mr-1 cursor-pointer ${
              tags.includes("Other") ? "bg-emerald-200" : null
            }`}
            onClick={() => dispatch(handleTags("Other"))}
          >
            Other
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {blogs
          .filter((blog) =>
            tags.length
              ? tags.some((tag) => {
                  return blog.tags.includes(tag);
                })
              : blog
          )
          .sort(
            sortByNew
              ? (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              : (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
          .map((blog) => (
            <BlogPreviewCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Home;
