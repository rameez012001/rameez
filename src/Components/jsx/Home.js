import React, { useEffect, useState } from "react";

function Home() {
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        "https://blog-backend-dwxk.onrender.com/posts"
      );
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="home">
      {blog.map((post) => (
        <div key={post.id} className="content-container">
          <div className="content-header">
            <span className="date">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <h1>{post.title}</h1>
          </div>
          <div className="content">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="paragraph">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
