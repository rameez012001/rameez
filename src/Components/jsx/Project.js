import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="project">
      <div className="back-link-container">
        <Link to="/" className="back-link">
          Back to blog
        </Link>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1>Projects</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            Codes I have typed and things I have built.
          </p>
          <ul>
            <p>
              <i>soon to be updated</i>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
