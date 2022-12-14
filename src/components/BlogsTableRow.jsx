import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { markForDeletion } from "../redux/actions/blogActions";
import { toggleModal } from "../redux/actions/uiActions";

const BlogsTableRow = ({ blog }) => {
  const { title, createdAt } = blog;
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="p-3 text-base font-light leading-relaxed mt-0 mb-4 text-slate-800">
        {title}
      </td>
      <td className="p-3 text-base font-light leading-relaxed mt-0 mb-4 text-slate-800">
        {new Date(createdAt).toDateString()}
      </td>
      <td className="p-3 flex justify-center">
        <Link
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          to={`/dashboard/edit-blogs/${blog._id}`}
        >
          Update
        </Link>
        <button
          className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            dispatch(toggleModal());
            dispatch(markForDeletion(blog._id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogsTableRow;
