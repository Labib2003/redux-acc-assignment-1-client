import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex">
        <aside className="w-1/4 border-r border-emerald-100 p-3 flex flex-col gap-1">
          <h6 class="text-xl font-normal text-slate-800 p-3 rounded-md bg-emerald-50 hover:bg-emerald-100">
            <Link to="/dashboard/create-blog">Post new blog</Link>
          </h6>
          <h6 class="text-xl font-normal text-slate-800 p-3 rounded-md bg-emerald-50 hover:bg-emerald-100">
            <Link to="/dashboard/create-blog">Update/Delete blogs</Link>
          </h6>
        </aside>
        <main className="w-3/4 p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
