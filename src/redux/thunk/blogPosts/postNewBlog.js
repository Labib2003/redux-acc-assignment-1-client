const postNewBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:6969/api/v1/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = res.json();

    if(data.success) {
        dispatch()
    }
  };
};
