import React from "react";
import { useSelector } from "react-redux";
import BlogsTableRow from "./BlogsTableRow";
import Modal from "./Modal";

const AllBlogsTable = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const modalOpen = useSelector((state) => state.ui.modalOpen);

  return (
    <div className="rounded-md overflow-hidden">
      <table className="w-full">
        <thead className="text-left bg-emerald-300">
          <tr>
            <th className="p-3 text-xl font-normal leading-normal mt-0 mb-2 text-slate-800">
              Blog Title
            </th>
            <th className="text-xl font-normal leading-normal mt-0 mb-2 text-slate-800">
              Created at
            </th>
            <th className="p-3 text-center text-xl font-normal leading-normal mt-0 mb-2 text-slate-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-emerald-100">
          {blogs.map((blog) => (
            <BlogsTableRow key={blog._id} blog={blog} />
          ))}
        </tbody>
      </table>
      {modalOpen ? <Modal /> : null}
    </div>
  );
};

export default AllBlogsTable;
