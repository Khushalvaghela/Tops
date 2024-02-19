import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class UseStateClassTask extends Component {
  constructor() {
    super();
    this.colorarr = ["blue", "yellow", "green", "red", "pink"];
    this.state = {
      countIndex: 0,
    };
  }

  changeColor() {
    this.setState({ countIndex: this.state.countIndex + 1 });
    console.log("----->")
  }

  render() {
    return (
        <div className="d-flex flex-column justify-content center">
      <div
        style={{
          padding: "5px",
          textAlign: "center",
          backgroundColor: this.colorarr[this.state.countIndex],
          color:"white",
        }}
        className='m-5'
      >
        <h1>MY color</h1>
        </div>
        <Button onClick={() => this.changeColor()}>Click here</Button>
      </div>
      
    );
  }
}

