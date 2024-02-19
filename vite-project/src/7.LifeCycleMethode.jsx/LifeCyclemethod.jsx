import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Unmount from './Unmount';

export default class LifeCyclemethod extends Component {
    constructor(){
        super();
      console.log("-----constructor-------")  
      this.state={
        count:0
      }    
    };

    componentDidMount() {
        console.log("-----componentDidMount-------") 
    }
    componentDidUpdate(){
        console.log("-----componentDidUpdate-------")
    }
  render() {
    console
    return (
      <div>{
        this.state.count<5 ? <Unmount/> : null}
        
        <h1>LifeCyclemethod</h1>
        <h1>count is {this.state.count}</h1>
        <Button onClick={()=>this.setState({count: this.state.count +1 })}>inc</Button>
      </div>
    )
  }
}
