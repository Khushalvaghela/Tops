import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function ChangeNamTask(props) {
    const [name,setstate]=useState(props.name)

    const changeName=()=>{
        setstate("khush")
    }
    const changeName1=()=>{
        props.name
    }
  return (
    <>
      <h1>change value</h1>
      <h1>props{name}</h1>
      <Button color='danger' onClick={()=>changeName()}>changename</Button>
      <hr />

      <h1> propschange{props.name}</h1>
      <Button color='danger' onClick={()=>changeName1()}>changename</Button>
    </>
  )
}



