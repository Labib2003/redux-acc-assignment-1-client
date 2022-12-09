import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <nav className="w-full lg:w-1/4 lg:border-r border-emerald-100 p-3 flex flex-col gap-1">
          <h5 className="text-2xl font-normal leading-normal text-emerald-800 px-3">
            Admin Dashboard
          </h5>
          <hr className="mt-0 mb-3 border-emerald-100" />
          <Link
            className="text-xl font-normal text-slate-800 p-3 rounded-md bg-emerald-50 hover:bg-emerald-100"
            to="/dashboard/"
          >
            <p>Post new blog</p>
          </Link>
          <Link
            className="text-xl font-normal text-slate-800 p-3 rounded-md bg-emerald-50 hover:bg-emerald-100"
            to="/dashboard/edit-blogs"
          >
            <p>Update/Delete blogs</p>
          </Link>
        </nav>
        <section className="w-full lg:w-3/4 p-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
