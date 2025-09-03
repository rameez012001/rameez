import React, { useState } from "react";
import Success from "./Success";
import ErrorComponent from "./ErrorComponent";
import { backendURL } from "../assets/data/data";

function PostBlog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const fillBlog = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const postBlog = async () => {

    try {
      const res = await fetch(`${backendURL}/postablog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(blog),
      });

      if (!res.ok) {
        let errMsg = `Error ${res.status}`;
        setStatus("error");
        setMessage(`${errMsg}. OOPS! Log back in`);
        return;
      }

      const data = await res.json();
      if (data) {
        setStatus("success");
        setMessage("Blog posted");
        setBlog({
          title: "",
          content: "",
        });
      }

    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Network error");
    }
  };
  return (
    <div className="postBlog">
      {status === "success" && <Success message={message} />}
      {status === "error" && <ErrorComponent message={message} />}
      <div className="content-container">
        <input
          type="text"
          name="title"
          placeholder="Give a Title"
          value={blog.title}
          onChange={fillBlog}
        />
        <textarea
          name="content"
          placeholder="Start writing...."
          value={blog.content}
          onChange={fillBlog}
        />
        <button onClick={postBlog}>Publish</button>
      </div>
    </div>
  );
}

export default PostBlog;
