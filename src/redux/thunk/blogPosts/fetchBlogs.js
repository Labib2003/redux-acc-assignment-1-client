import { getAllBlogs } from "../../actions/blogActions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:6969/api/v1/blogs");
    const data = await res.json();

    if (data.success) {
      dispatch(getAllBlogs(data.data));
    }
  };
};

export default fetchBlogs;
