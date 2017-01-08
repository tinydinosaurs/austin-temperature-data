import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
import config from './config';



class App extends Component {

  // getData() {

  // }

  handleCLick() {
    console.log("bored yet?");

    fetch("https://www.ncdc.noaa.gov/cdo-web/api/v2/stations/GHCND:USW00013958", {
      method: "GET",
      headers: {
        "token": config.CDN_TOKEN
      }
    }).then(function(res) {
      return res.json();
    }).then(function(data) {
      console.log("success!", data.name);
    }).catch(function(err) {
      console.log("failure", err);
    });

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

// the jQuery version of our AJAX call:
//
// $.ajax({
//   // data about weather station at Camp Mabry, Austin, TX
//   url: "https://www.ncdc.noaa.gov/cdo-web/api/v2/stations/GHCND:USW00013958",
//   type: "GET",
//   headers:{
//     token: config.CDN_TOKEN
//   },
//   success: function(response) {
//     console.log("success!", response);
//
//   },
//   error: function(msg) {
//     console.log("error 😿", msg)
//   }
// });
//
