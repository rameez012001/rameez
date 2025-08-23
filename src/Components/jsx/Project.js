import React from "react";
import { Link } from "react-router-dom";
import { projects, contentInfo } from "../assets/data/data";

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
          {contentInfo.projects.split("\n").map((content,index)=><p key={index} className="paragraph">{content}</p>)}  
        </div>
      </div>

      <div className="content-container">
        <div className="content-header">
          <h1><small><i>codes I have typed and things I have built.</i></small></h1>
          <p className="paragraph">

          </p>
        </div>
        <div className="content">

          <p>
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                <a href={project.link} target="_blank">{project.title}</a>
                <span>{project.description}</span>
              </li>
            ))}

          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
