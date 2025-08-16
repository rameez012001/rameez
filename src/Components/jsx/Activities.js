import React from "react";
import { reads, articles, websites } from "../assets/data/data";
function Activities() {
  return (
    <div className="activities">
      <div className="content-container">
        <div className="content-header">
          <h1>Reads</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            At first I was all about those romance novels. They
            were giving me the stuff I wasn’t living. Some how I ended up
            reading my first crime thrillers and even
            slid into some classics.
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
          <h1>Websites</h1>
        </div>
        <div className="content">
          <p className="paragraph">Some oddly cool websites</p>
          <ul>
            {websites.map((website, idx) => (
              <a
                key={idx}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {website.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className="content-container">
        <div className="content-header">
          <h1>Articles</h1>
        </div>
        <div className="content">
          <p className="paragraph">Articles that worth sharing</p>
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
