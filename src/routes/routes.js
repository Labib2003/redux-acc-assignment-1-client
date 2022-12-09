import { createBrowserRouter } from "react-router-dom";
import AllBlogsTable from "../components/AllBlogsTable";
import BlogForm from "../components/BlogForm";
import Main from "../layout/Main";
import AdminDashboard from "../pages/AdminDashboard";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import ReadingHistory from "../pages/ReadingHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <ReadingHistory />,
      },
      {
        path: "/dashboard",
        element: <AdminDashboard />,
        children: [
          {
            path: "/dashboard/",
            element: <BlogForm />,
          },
          {
            path: "/dashboard/edit-blogs",
            element: <AllBlogsTable />,
          },
          {
            path: "/dashboard/edit-blogs/:id",
            element: <BlogForm />,
          },
        ],
      },
      {
        path: "/:id",
        element: <Blog />,
      },
    ],
  },
]);

export default routes;
