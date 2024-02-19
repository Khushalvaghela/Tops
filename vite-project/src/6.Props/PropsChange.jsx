import React from 'react'
import { Button } from 'reactstrap'

export default function PropsChange(props) {
    const chngename = () => {
        props.name = "user"
    }
  return (
    <>
      <h1>PropsChange{props.name}</h1>
      <Button onClick={chngename} color='danger'>chnge user</Button>
    </>
  )
}
