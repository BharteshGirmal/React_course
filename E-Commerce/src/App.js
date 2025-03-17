import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  // api_key value
  api_key = "546d508e17b24c65813f217640bd9780";

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="container-fluid">
            {/* <LoadingBar
              height={5}
              color='#f11946'
              progress={this.state.progress}
            > */}
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="appliances"
                    category="appliances"
                    country="in"
                  />
                }
              />
              <Route
                path="/appliances"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="appliances"
                    category="appliances"
                    country="in"
                  />
                }
              />
              <Route
                path="/mobile"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="mobile"
                    category="mobile"
                    country="in"
                  />
                }
              />
              <Route
                path="/tv"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="tv"
                    category="tv"
                  />
                }
              />
              <Route
                path="/laptop"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="laptop"
                    category="laptop"
                    country="in"
                  />
                }
              />
              <Route
                path="/gaming"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="gaming"
                    category="gaming"
                    country="in"
                  />
                }
              />
              <Route
                path="/audio"
                element={
                  <News
                    api_key={this.api_key}
                    setProgress={this.setProgress}
                    pageSize={12}
                    key="audio"
                    category="audio"
                    country="in"
                  />
                }
              />
            </Routes>
            {/* </LoadingBar> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
