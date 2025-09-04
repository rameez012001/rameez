import React, { useContext, useEffect, useState } from "react";
import { backendURL } from "../assets/data/data";
import DeleteButton from "./DeleteButton";
import { AuthContext } from "../../Authprotocol";

function Home() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const {isAuthenticated} = useContext(AuthContext);
  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendURL}/posts`);
      const data = await response.json();
      setBlog(data.posts);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <div className="skeleton-container">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="skeleton-card"></div>
            ))}
        </div>
      ) : (
        blog.map((post) => (
          <div key={post.id} className="content-container">
            {isAuthenticated && (
              <DeleteButton
                blogId={post.id}
                onDelete={() =>
                  setBlog((prev) => prev.filter((b) => b.id !== post.id))
                }
                onAuthFail={() => {
                  window.location.reload(); 
                }}
              />
            )}
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
        ))
      )}
    </div>
  );
}

export default Home;
