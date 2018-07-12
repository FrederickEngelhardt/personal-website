import React, { Component } from 'react'
import {BarChart} from 'react-easy-chart';

const data = [
  {x: 'JavaScript', y: 1, color: 'orange'},
  {x: 'NodeJS', y: 1, color: 'green'},
  {x: 'ReactJS', y: .8, color: 'purple'},
  {x: 'React Native', y: .4, color: 'purple'},
  {x: 'HTML', y: 2, color: 'purple' },
  {x: 'SASS', y: .5, color: 'purple'},
  {x: 'CSS', y: 2, color: 'purple'},
  {x: 'C#', y: .2, color: 'purple'},
  {x: 'Unity', y: .2, color: 'purple'},
]

export default class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data || data
    }
  }
  render(){
    return (

      <div style={{display: 'inline-block'}}>
        <BarChart
          axes
          colorBars
          height={400}
          width={900}
          data={this.state.data}
        />
      </div>
    )
  }
}
