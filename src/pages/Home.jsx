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
      <div className="flex flex-col lg:flex-row justify-between mb-5 border-b border-emerald-100 pb-3">
        <h4 className="text-3xl font-normal leading-normal text-emerald-800 mb-3 lg:mb-0">
          Welcome to my blog
        </h4>
        <div className="my-auto flex gap-3 flex-wrap">
          <div className="flex gap-3">
            <p className="text-lg leading-relaxed text-emerald-800 my-auto">Sort by:</p>
            <select
              className="px-2 py-1 placeholder-slate-300 text-emerald-600 relative bg-white rounded text-sm border-0 outline-none focus:outline-none focus:ring my-auto"
              onChange={() => dispatch(toggleSort())}
            >
              <option value="old">Oldest first</option>
              <option value="new">Newest first</option>
            </select>
          </div>
          <div className="flex gap-3">
            <p className="text-lg leading-relaxed text-emerald-800 my-auto">
              Filter by:
            </p>
            <div className="my-auto">
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
