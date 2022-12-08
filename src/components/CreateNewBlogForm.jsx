import React from "react";
import CrossIcon from "../icons/CrossIcon";

const CreateNewBlogForm = () => {
  return (
    <form>
      <legend>
        <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
          Create a new blog
        </h4>
      </legend>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-title">
          <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Title
          </h6>
        </label>
        <input
          type="text"
          id="blog-title"
          placeholder="New blog title"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-body">
          <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Body
          </h6>
        </label>
        <textarea
          type="text"
          id="blog-body"
          placeholder="New blog body"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="mb-3 pt-0">
        <label htmlFor="blog-tags">
          <h6 class="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
            Tags
          </h6>
        </label>
        <select
          type="text"
          id="blog-tags"
          defaultValue="default"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-emerald-50 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        >
          <option disabled value="default">
            Add some tags
          </option>
          <option value="react">React</option>
          <option value="js">JavaScript</option>
          <option value="other">Other</option>
        </select>
        <div className="mt-3 flex gap-1">
          <span class="text-xs font-semibold w-fit p-3 rounded text-slate-600 bg-emerald-200 uppercase flex gap-3">
            React
            <CrossIcon />
          </span>
          <span class="text-xs font-semibold w-fit p-3 rounded text-slate-600 bg-emerald-200 uppercase flex gap-3">
            JavaScript
            <CrossIcon />
          </span>
        </div>
      </div>
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Post Blog
      </button>
    </form>
  );
};

export default CreateNewBlogForm;
