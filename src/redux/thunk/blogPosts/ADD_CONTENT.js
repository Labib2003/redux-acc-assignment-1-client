import { toast } from "react-hot-toast";
import { postNewBlog } from "../../actions/blogActions";

const ADD_CONTENT = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://redux-acc-assignment-1-server.vercel.app/api/v1/blogs",
      {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.success) {
      dispatch(postNewBlog(data.data));
      toast.success("New blog posted successfully.");
    } else {
      toast.error(data.message);
    }
  };
};

export default ADD_CONTENT;
