import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdminDashboard from "../pages/AdminDashboard";
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
      },
    ],
  },
]);

export default routes;
