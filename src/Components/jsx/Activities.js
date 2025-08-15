import React from "react";

function Activities() {
  const reads = [
    {
      title: "1984",
      author: "George Orwell",
      type: "favorite",
    },
    {
      title: "Silent Patient",
      author: "Alex Micaelides",
      type: "favorite",
    },
    {
      title: "Crime & Punishment",
      author: "Fyodor Dostoevsky",
      type: "current",
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      type: "current",
    },
  ];

  const articles = [
    {
      url: "https://www.theepochtimes.com/falun-gong-founder-li-hongzhi-publishes-why-do-human-beings-exist_5000952.html",
      name: "Why Do Human Beings Exist? (Epoch Times)",
    },
    {
      url: "https://www.bbc.com/worklife/article/20230402-the-entrepreneurs-who-regret-starting-businesses?utm_source=pocket_mylist",
      name: "Entrepreneurs Who Regret Starting Businesses (BBC)",
    },
    {
      url: "https://medium.com/intuitionmachine/the-dance-of-abstraction-and-reality-discovering-computings-full-potential-48b37bea39bb",
      name: "The Dance of Abstraction and Reality (Medium)",
    },
  ];

  return (
    <div className="activities">
      <div className="content-container">
        <div className="content-header">
          <h1>Reads</h1>
        </div>
        <div className="content">
          <p className="paragraph">
            Only started reading books in the summer after finishing school.
            Mostly sticked to romance novels, as they satisfied what I was not
            experiencing. Over time, I began exploring other genres by browsing
            Amazon for books with above-average reviews and high ratings. That’s
            how I discovered my first crime thrillers, which kept me hooked, and
            classics.
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
            These are the articles I came across and thought were worth sharing:
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
