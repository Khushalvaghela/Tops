import React, { Component } from 'react'
import Content from './Content'
import "./index.css"

export default class MainContent extends Component {
  render() {
    return (
      <div className='main'>
        <Content/>
        <h1>MainContent</h1>
        <Content/>
      </div>
    )
  }
}
