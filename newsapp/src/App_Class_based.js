import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  // Passing the Props to the News Component 

  // exact is used to match the exact path 
  // key is passed to ompoent to uniquely identify the component and render it when compenent mount 
  // api_key= process.env.NEWS_APP_API_KEY
  api_key= "546d508e17b24c65813f217640bd9780"
 
  state={
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <div className="container-fluid">
        {/* <LoadingBar
        height={5}
        color='#f11946'
        progress={this.state.progress}
      > */}
          <Routes> 
          <Route  path="/" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="general" country="in" category="general" />}/>
          <Route  path="/entertainment" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="entertainment" country="in" category="entertainment" />}/>
          <Route  path="/business" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="business" country="in" category="business" />}/>
          <Route  path="/sports" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="sports" country="in" category="sports" />}/>
          <Route  path="/health" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="health" country="in" category="health" />}/>
          <Route  path="/science" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="science" country="in" category="science" />}/>
          <Route  path="/technology" element={<News api_key={this.api_key}setProgress={this.setProgress}pageSize={6} key="technology" country="in" category="technology" />}/>
          </Routes>

          {/* </LoadingBar> */}
        </div>
        </BrowserRouter>
      </div>
    )
  }
}
