import React from "react";
import "../styles/news.css"; // Make sure to import your unique CSS file

const NewsItem = (props) => {
  let { title, decsription, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="news-card">
      <span className="news-card-badge">{source}</span>
      <img
        src={
          !imageUrl
            ? "https://asset.dr.dk/imagescaler01/https%3A%2F%2Fapi.dr.dk%2Ffreja%2Fimage%2Fraw%2F317&w=700"
            : imageUrl
        }
        className="news-card-img-top"
        alt="news"
      />
      <div className="news-card-body">
        <h5 className="news-card-title">{title}...</h5>
        <p className="news-card-text">{decsription}...</p>
        <p className="news-card-meta">
          By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="news-card-button"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
