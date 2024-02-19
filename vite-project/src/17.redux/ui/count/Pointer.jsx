import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { ispoint } from '../../redux/fetures/pointer'

export default function Pointer() {

    let pointData= useSelector((store)=>{
        return store.Point.point
     })
     let dispatch =useDispatch()
  return (
    <div>
       <h1>point{pointData}</h1>
     <Button color="danger" onClick={() => dispatch (ispoint())}>
        Inc-1
      </Button>
    </div>

  )
}
