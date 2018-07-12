import React, { Component } from 'react'
// import logo from './logo.svg';
import './styles/css/App.css';

import Chart from './components/Chart.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Chart />
      </div>
    );
  }
}

export default App;
