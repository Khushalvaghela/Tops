import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class LifePro extends Component {
    constructor(){
        super()
        this.state={
            point:0,
            count:0,
        }
    }

    incrementCount(){
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
        <>
      <h1>Point is{this.state.point}</h1>
      <h1>Count is{this.state.count}</h1>
      <Button>INCRIMENT</Button>
      </>
    )
  }
}
