import React, {  useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  
  const [articles, setArticles]=  useState([]);
  const [state, setState]=  useState([]);
  const [loading, setLoading] =  useState(true);
  const [page, setPage]=  useState(1);
  const [totalResults, setTotalResults]=  useState(0);
  
  
  const capitalizeTitle=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `${capitalizeTitle(props.category)} - NewsApp`;

  // async componentDidMount() {
    
  //   updatePages();
  // }

  // const handleNextClick = async () => {
  //   // setState({ Page: state.Page + 1 });
  //   setPage(page+1);
  //     updatePages();
  // };

  // const handlePrevClick = async () => {
  //   // setState({ Page: state.Page - 1 });
  //   setPage(page-1);

  //     updatePages();
  // };

 const updatePages=  async () =>{
    props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&Page=${state.Page}&pagesize=${props.pageSize}`;
    setState({ loading: true });
    let data = await fetch(URL);
    console.log("data : ", data);
    props.setProgress(50);
    props.setProgress(70);
    let parseddata = await data.json();
    console.log("parseddata : ", parseddata);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    updatePages();
  });

  const fetchMoreData = async () => {
    setPage(page+1);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&Page=${page}&pagesize=${props.pageSize}`;
    
    setState({ loading: true });
    setLoading(true);
    let data = await fetch(URL);
    console.log("data : ", data);

    let parseddata = await data.json();
    console.log("parseddata : ", parseddata);
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
    setLoading(false);
  };

  let count=0;
  return (
    <>
    <div className="container my-3">
      <h1 className="text-center" style={{marginTop:'90px'}}>
        NewsApp - Top Headlines from {props.category}
      </h1>
    </div>
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={loading && <Spinner />}
    >
      <div className="container">
        <div className="row my-4">
          {articles.map((element) => {
            count++; // Increment the counter
            return (
              <div className="col-md-4" key={count}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : ""
                  }
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                  author={
                    element.author ? element.author : "Unknown Person"
                  }
                  publishDate={element.publishedAt}
                  source={
                    element.source.name ? element.source.name : "unknown"
                  }
                />
                <p>Article number: {count}</p> {/* Display the counter */}
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  </>
  )
}

// in functional based component props are decalred outside the the  function
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
