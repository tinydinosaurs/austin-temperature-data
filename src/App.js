import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import config from '../public/config';

class App extends Component {
  handleCLick() {
    console.log("bored yet?");
    // gonna put a fetch in here and see what kind of data I get back from NOAA.
    $.ajax({
      url: "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories",
      type: "GET",
      headers:{
        token: config.CDN_TOKEN
      },
      success: function(response) {
        console.log("success!", response);
      },
      error: function(msg) {
        console.log("error 😿", msg)
      }
      })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Goodbye Blue Monday</h2>
          <button onClick={this.handleCLick}>click me</button>
        </div>
      </div>
    );
  }
}

export default App;
