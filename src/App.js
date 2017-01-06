import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleCLick() {
    console.log("bored yet?");
    // gonna put a fetch in here and see what kind of data I get back from NOAA.
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
