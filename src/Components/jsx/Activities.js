import { Link } from "react-router-dom";
import { books, articles, websites, contentInfo } from "../assets/data/data";
function Activities() {
  return (
    <div className="activities">
      <div className="back-link-container">
        <Link to="/" className="back-link">
          Back to blog
        </Link>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1>Reads</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            {contentInfo.reads}
          </p>
          <div>
            <p>
              <b>
                <i>Favorites:</i>
              </b>
            </p>
            <ul className="paragraph">
              {books
                .filter((book) => book.type === "favorite")
                .map((book, idx) => (
                  <li key={idx}>
                    "{book.title}" by {book.author}
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
              {books
                .filter((book) => book.type === "current")
                .map((book, idx) => (
                  <li key={idx}>
                    "{book.title}" by {book.author}
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
          <p className="paragraph">{contentInfo.websites}</p>
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
          <p className="paragraph">{contentInfo.articles}</p>
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
