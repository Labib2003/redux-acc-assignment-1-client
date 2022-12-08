import React from "react";

const BlogPreviewCard = ({blog}) => {
  const { title, body } = blog;
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default BlogPreviewCard;
