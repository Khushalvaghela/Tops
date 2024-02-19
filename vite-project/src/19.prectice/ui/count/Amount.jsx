import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../redux/app/store'
import { Button } from 'reactstrap'
import { isone } from '../../redux/fetures/amount'



export default function Amount() {
   let amountData= useSelector((store)=>{
       return store.Amount.amount
    })
    console.log("🚀 ~ amountData ~ amountData:", amountData)
    let dispatch =useDispatch()


  return (
    <div>
     <h1>amount is{amountData}</h1>
     <Button color="danger" onClick={() => dispatch(isone())}>
        Inc-1
      </Button>
    </div>
    
  )
}
