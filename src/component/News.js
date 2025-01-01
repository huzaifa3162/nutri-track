import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/news.css";

const News = (props) => {
  const [articles, setArticles] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    const response = await fetch(url);
    const data = await response.json();
    setArticles([...articles, ...data.articles]);
  };

  return (
    <>
      <Header />
      <div className="news-section-container">
        <h1 className="news-section-title">
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 40) : " "}
                  decsription={
                    article.description
                      ? article.description.slice(0, 60)
                      : "Click Here To Read More"
                  }
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
      <Footer />
    </>
  );
};

export default News;
