import { toast } from "react-hot-toast";
import { editBlog } from "../../actions/blogActions";

const UPDATE_CONTENT = (blog) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://redux-acc-assignment-1-server.vercel.app/api/v1/blogs/${blog._id}`,
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

export default UPDATE_CONTENT;
