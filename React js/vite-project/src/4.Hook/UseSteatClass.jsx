import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class UseSteatClass extends Component {
    constructor(){
        super();
        this.state = { 
            count: 1000,
        };
    }
    incrementHolder() {
         console.log("---->");
         this.setState({count :this.state.count + 1})
    }
  render() {
    return (
      <div>
        <h1>UseSteatclass</h1>
        <h1>count is {this.state.count}</h1>
        <Button color='danger' onClick={() =>this.incrementHolder()}>inc</Button>
      </div>
    )
  }
}
