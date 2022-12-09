import { toast } from "react-hot-toast";
import { editBlog } from "../../actions/blogActions";

const patchBlog = (blog) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `http://localhost:6969/api/v1/blogs/${blog._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    if (data.success) {
      dispatch(editBlog(blog));
      toast.success("Blog updated successfully.");
    } else {
      toast.error(data.message);
    }
  };
};

export default patchBlog;
