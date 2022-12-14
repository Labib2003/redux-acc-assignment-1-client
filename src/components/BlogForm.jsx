import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CrossIcon from "../icons/CrossIcon";
import { addTag, removeTag, textInput } from "../redux/actions/formActions";
import UPDATE_CONTENT from "../redux/thunk/blogPosts/UPDATE_CONTENT";
import ADD_CONTENT from "../redux/thunk/blogPosts/ADD_CONTENT";

const BlogForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blog.blogs.find((blog) => blog._id === id)
  );

  useEffect(() => {
    if (id) {
      dispatch(removeTag("React"));
      dispatch(removeTag("JavaScript"));
      dispatch(removeTag("Other"));
      dispatch(textInput("title", blog.title));
      dispatch(textInput("body", blog.body));
      blog.tags.forEach((tag) => dispatch(addTag(tag)));
    }
  }, [id, blog, dispatch]);

  return (
    <form>
      <legend>
        <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
          {id ? "Edit blog" : "Create a new blog"}
        </h4>
      </legend>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-title">
          <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Title
          </h6>
        </label>
        <input
          type="text"
          id="blog-title"
          name="title"
          placeholder="New blog title"
          defaultValue={id ? blog.title : ""}
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
          onBlur={(e) => dispatch(textInput(e.target.name, e.target.value))}
        />
      </div>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-body">
          <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Body
          </h6>
        </label>
        <textarea
          type="text"
          id="blog-body"
          name="body"
          placeholder="New blog body"
          defaultValue={id ? blog.body : ""}
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
          onBlur={(e) => dispatch(textInput(e.target.name, e.target.value))}
        />
      </div>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-tags">
          <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Tags
          </h6>
        </label>
        <select
          type="text"
          id="blog-tags"
          defaultValue="default"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
          onChange={(e) => dispatch(addTag(e.target.value))}
        >
          <option disabled value="default">
            Select some tags for your blog
          </option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Other">Other</option>
        </select>
        <div className="mt-3 flex gap-1">
          {form.tags.map((tag, index) => (
            <span key={index} className="text-xs font-semibold w-fit p-3 rounded text-slate-600 bg-emerald-200 uppercase flex gap-3">
              {tag}
              <div onClick={() => dispatch(removeTag(tag))}>
                <CrossIcon />
              </div>
            </span>
          ))}
        </div>
      </div>
      {id ? (
        <button
          disabled={!form.tags.length || !form.title || !form.body}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-emerald-200"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              UPDATE_CONTENT({
                ...blog,
                title: form.title,
                body: form.body,
                tags: [...form.tags],
              })
            );
          }}
        >
          Submit Edit
        </button>
      ) : (
        <button
          disabled={!form.tags.length || !form.title || !form.body}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-emerald-200"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(ADD_CONTENT(form));
          }}
        >
          Post Blog
        </button>
      )}
    </form>
  );
};

export default BlogForm;
