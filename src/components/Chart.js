import React, { Component } from 'react'
import {BarChart} from 'react-easy-chart';

const data = [
  {x: 'A', y: 20, color: 'green'},
  {x: 'B', y: 30, color: 'purple'},
  {x: 'C', y: 40, color: 'purple'},
  {x: 'D', y: 20, color: 'purple'},
  {x: 'E', y: 40, color: 'purple' },
  {x: 'F', y: 25, color: 'purple'},
  {x: 'G', y: 5, color: 'purple'}
]

export default class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data || data
    }
  }
  render(){
    return (
      <BarChart
        colorBars
        data={this.state.data}
      />
    )
  }
}
