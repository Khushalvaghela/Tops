import { Button } from 'reactstrap'
import React from 'react'
import { useState } from 'react'

export default function UseSteatpro() {
    let [color, setcolor] =useState("red");
    let [textcolor ,setextcolor] =useState("black")
    const changeColorHendler= () => {
        // console.log("------->")
        setcolor("blue")
        setextcolor("white")

    }
  return (
    <div className='d-flex flex-column justify-content center'>
      
      <div style={{
        padding:"10px",
        textAlign:"center",
        backgroundColor:color,
        color:textcolor,
        
      }}
      className='m-5'>
      <h1>  Hello World</h1>
      </div>
      <Button color='danger' onClick={() => changeColorHendler()}>Change color</Button>
    </div>
  )
}
