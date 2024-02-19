import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <>
        Class props
        <h1>hello, {this?.props?.data?.name}</h1>
        <h2>{this?.props?.data?.greeting}</h2>
      </>
    )
  }
}
