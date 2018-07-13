import React, { Component } from 'react'
import {Preload} from 'react-preload'

import './styles/css/App.css';
import Chart from './components/Chart.js'

const images = [
  require('./assets/images/macbook.jpg')
]

export default class App extends Component {
  _handleImageLoadError(){
    console.log('React Application is not loading correctly.');
  }
  render() {
    return (
      <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        autoResolveDelay={3000}
        onError={this._handleImageLoadError}
        onSuccess={this._handleImageLoadSuccess}
        resolveOnError={true}
        mountChildren={true}
      >
      <div className="App">
      <Chart />
        <img className="App-logo-spin" source={require('./logo.svg')} />
      </div>
      </Preload>
    );
  }
}
