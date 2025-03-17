import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [products, setProducts] = useState([]); // Change articles to products
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);

  const { category, pageSize, setProgress } = props;

  const updatePages = async () => {
    setProgress(10);
    const URL = `https://fakestoreapi.in/api/products/category?type=${category}`;
    setLoading(true);

    let data = await fetch(URL);
    setProgress(50);

    let parsedData = await data.json();
    setProgress(70);

    setProducts(parsedData.products);
    setTotalResults(parsedData.products.length);
    setLoading(false);
    setShowDiv(true);

    setProgress(100);
  };

  useEffect(() => {
    updatePages();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
  };

  let count = 0;
  console.log(products.length);

  return (
    <>
      <div className="container-fluid mt-2">
        {showDiv && (
          <h4 className="alert alert-success text-center">
            Product Showcase - Top Products from {category}
          </h4>
        )}
      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row mt-3">
            {products.map((product) => {
              count++;
              return (
                <div className="col-md-4" key={product.id}>
                  {" "}
                  {/* Use unique id */}
                  <NewsItem
                    title={product.title ? product.title.slice(0, 45) : ""}
                    description={
                      product.description
                        ? product.description.slice(0, 88)
                        : ""
                    }
                    imageURL={product.image}
                    price={product.price}
                    brand={product.brand}
                    model={product.model}
                    discount={product.discount}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
