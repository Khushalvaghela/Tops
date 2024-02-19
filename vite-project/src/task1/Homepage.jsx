import React, { Component } from 'react'
import Header from './Header'
import NavigetionMenu from './NavigetionMenu'
import MainContent from './MainContent'
import Footer from './footer'
import "./index.css"

export default class Homepage extends Component {
  render() {
    return (
      <div className='home'>
        <Header/>
        <NavigetionMenu/>
        <MainContent/>
        <Footer/>
      </div>
    )
  }
}
