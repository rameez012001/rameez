import React from "react";
import { about } from "../assets/data/data";

export default function About() {
  return (
    <div>
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
