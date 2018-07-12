import React, { Component } from 'react'
// import logo from './logo.svg';
import './styles/css/App.css';

import Chart from './components/Chart.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Chart data={[
        {x: 'A', y: 20, color: 'green'},
        {x: 'B', y: 30, color: 'purple'},
        {x: 'C', y: 40, color: 'purple'},
        {x: 'D', y: 20, color: 'purple'},
        {x: 'E', y: 40, color: 'purple' },
        {x: 'F', y: 25, color: 'purple'},
        {x: 'G', y: 5, color: 'red'}
      ]} size={[500,500]}  />
      </div>
    );
  }
}

export default App;
