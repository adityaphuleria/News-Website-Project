import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



export default class App extends Component {
  pageSize=9;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Business" pageSize={this.pageSize} country="in" category="Business"/>}/>
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
          <Route path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
          <Route path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>
          <Route path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Sports"  pageSize={this.pageSize} country="in" category="Sports"/>}/>
          <Route path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}






