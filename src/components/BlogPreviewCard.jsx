import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToHistory } from "../redux/actions/blogActions";

const BlogPreviewCard = ({ blog }) => {
  const { title, body, tags = [] } = blog;
  const dispatch = useDispatch();

  return (
    <div className="w-auto border border-emerald-500 rounded-md p-3 flex flex-col justify-between">
      <div>
        <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-slate-800">
          {title.length > 35 ? title.slice(0, 35) + "..." : title}
        </h5>
        {tags.map((tag, index) => (
          <span key={index} className="text-xs font-semibold inline-block py-1 px-2 rounded text-slate-600 bg-emerald-200 uppercase last:mr-0 mr-1">
            {tag}
          </span>
        ))}
        <hr className="mt-3 border-emerald-500" />
        <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-slate-800">
          {body.length > 500 ? body.slice(0, 500) + "..." : body}
        </p>
      </div>
      <Link
        className=" text-emerald-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        to={`/${blog._id}`}
        onClick={() => dispatch(addToHistory(blog))}
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogPreviewCard;
