import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPreviewCard from "../components/BlogPreviewCard";
import { toggleSort } from "../redux/actions/filterActions";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const { sortByNew } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between">
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
          <span
            className={`text-xs leading-[] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 last:mr-0 mr-1 cursor-pointer bg-emerald-200`}
          >
            React
          </span>
          <span
            className={`text-xs leading-[] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 last:mr-0 mr-1 cursor-pointer bg-emerald-200`}
          >
            JavaScript
          </span>
          <span
            className={`text-xs leading-[] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600  last:mr-0 mr-1 cursor-pointer bg-emerald-200`}
          >
            Other
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {blogs
          .sort(
            sortByNew
              ? (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              : (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
          .map((blog) => (
            <BlogPreviewCard blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Home;
