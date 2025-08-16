import React from "react";
import { reads, articles } from "../assets/data/data";
function Activities() {
  return (
    <div className="activities">
      <div className="content-container">
        <div className="content-header">
          <h1>Reads</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            When I first got into reading, it was all about romance novels.
            They were giving me the stuff I wasn’t living. And when I didn’t
            know what to pick up next, I just hit up Amazon, looking at
            those five-star deals and solid reviews. That’s how I tripped into
            my first crime thrillers, kept me hooked, and then I even slid into
            some classics.
          </p>
          <div>
            <p>
              <b>
                <i>Favorites:</i>
              </b>
            </p>
            <ul className="paragraph">
              {reads
                .filter((r) => r.type === "favorite")
                .map((r, idx) => (
                  <li key={idx}>
                    "{r.title}" by {r.author}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p>
              <b>
                <i>Currently Reading:</i>
              </b>
            </p>
            <ul className="paragraph">
              {reads
                .filter((r) => r.type === "current")
                .map((r, idx) => (
                  <li key={idx}>
                    "{r.title}" by {r.author}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1>Articles</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            Articles that you might find interesting.
          </p>
          <ul>
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activities;
