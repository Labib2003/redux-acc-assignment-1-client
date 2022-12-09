import { getAllBlogs } from "../../actions/blogActions";

const GET_CONTENT = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://content-management-site-using-redux.onrender.com/api/v1/blogs"
    );
    const data = await res.json();

    if (data.success) {
      dispatch(getAllBlogs(data.data));
    }
  };
};

export default GET_CONTENT;
