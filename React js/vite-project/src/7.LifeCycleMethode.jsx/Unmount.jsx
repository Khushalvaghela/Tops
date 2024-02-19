import React, { Component } from 'react'

export default class Unmount extends Component {
    ComponentWillUnmount(){
        console.log("-------------ComponentWillUnmount-----")
        alert("componemt is remove");
    }
  render() {
    return (
   <h1 style={{color:"red"}}>Unmount</h1>
    )
  }
}

