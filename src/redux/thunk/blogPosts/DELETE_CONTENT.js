import { toast } from "react-hot-toast";

const { deleteBlog } = require("../../actions/blogActions");

const DELETE_CONTENT = (id) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://content-management-site-using-redux.onrender.com/api/v1/blogs/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);

    if (data.success) {
      toast.success("Blog deleted successfully.");
      dispatch(deleteBlog(id));
    } else {
      toast.error("Could not delete this blog.");
    }
  };
};

export default DELETE_CONTENT;
