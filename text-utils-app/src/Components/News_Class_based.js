import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  constructor() {
    super();
    console.log("News.js Constructor");
    this.state = {
      articles: [],
      loading: false,
      Page: 1,
    };
  }
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  async componentDidMount() {
    console.log("this.componentDidMount");
    // Accessing the props from News.js using this.props
    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=546d508e17b24c65813f217640bd9780&Page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(URL);
    // console.log("data : ", data);

    // let parseddata = await data.json();
    // console.log("parseddata : ", parseddata);

    // this.setState({ articles: parseddata.articles, Page:1 ,
    //     totalResult:parseddata.totalResults,
    //      loading:false
    // });
    this.updatePages();
  }

  handleNextClick = async () => {
    console.log("this.handleNextClick");

    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=546d508e17b24c65813f217640bd9780&Page=${this.state.Page +1}&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(URL);
    // console.log("data : ", data);

    // let parseddata = await data.json();
    // console.log("parseddata : ", parseddata);
    // this.setState({
    //     Page:this.state.Page + 1,
    //     articles:parseddata.articles,
    //     loading:false
    // })

    this.setState({ Page: this.state.Page + 1 });
    this.updatePages();
  };

  handlePrevClick = async () => {
    // console.log("this.handlePrevClick");
    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=546d508e17b24c65813f217640bd9780&Page=${this.state.Page -1}&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});

    // let data = await fetch(URL);
    // console.log("data : ", data);

    // let parseddata = await data.json();
    // console.log("parseddata : ", parseddata);

    // this.setState({
    //     Page:this.state.Page - 1,
    //     articles:parseddata.articles,
    //     loading:false

    // })

    this.setState({ Page: this.state.Page - 1 });
    this.updatePages();
  };

  async updatePages() {
    this.props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&Page=${this.state.Page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(URL);
    console.log("data : ", data);
    this.props.setProgress(50);
    this.props.setProgress(70);

    let parseddata = await data.json();
    console.log("parseddata : ", parseddata);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ Page: this.state.Page + 1 });

    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&Page=${this.state.Page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(URL);
    console.log("data : ", data);

    let parseddata = await data.json();
    console.log("parseddata : ", parseddata);

    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false,
    });
  };

  render() {
    let count = 0; // Initialize the counter

    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            NewsApp - Top Headlines from {this.props.category}
          </h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
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
      // <div className='container my-3'>
      //     <h1 className='text-center my-2 mb-4 '>NewsApp  -  Top Headlines from {this.props.category}</h1>
      //    {this.state.loading && <Spinner/>}
      //     <div className="row">
      //         {!this.state.loading && this.state.articles.map((element) => {
      //             count++; // Increment the counter
      //             return (
      //                 <div className="col-md-4" key={count}>
      //                     <NewsItem
      //                         title={element.title ? element.title.slice(0, 45) : ""}
      //                         description={element.description ? element.description.slice(0, 88) : ""}
      //                         imageURL={element.urlToImage}
      //                         newsURL={element.url}
      //                         author={element.author?element.author:'Unknown Person'}
      //                         publishDate={element.publishedAt}
      //                         source={element.source.name?element.source.name:"unknown"}
      //                     />
      //                     <p>Article number: {count}</p> {/* Display the counter */}
      //                 </div>
      //             );
      //         })}
      //     </div>
      //     <div className="container d-flex justify-content-between">
      //         <button  disabled={this.state.Page <=1}type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prevoius</button>
      //         <button  disabled={this.state.Page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type='button' className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
      //     </div>
      // </div>
    );
  }
}
