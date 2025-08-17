import React from "react";
import { about } from "../assets/data/data";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="back-link-container">
        <Link to="/" className="back-link">
          Back to blog
        </Link>
      </div>
      <div className="content-container">
        <div className="content-header">
          <p id="quote">
            <i>
              "the most amazing things that can happen to human being will
              happen to you, if you just lower your expectations"
            </i>
          </p>
        </div>

        <div className="content">
          {about.split("\n").map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
