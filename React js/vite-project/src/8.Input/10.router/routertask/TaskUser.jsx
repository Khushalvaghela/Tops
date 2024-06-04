import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function TaskUser() {
    let navigate=useNavigate()
    let data = useParams()

      return (
        <>
            <div className="text-center">
                <h1>My Name  {data.name}</h1>
                <Button color='danger' onClick={()=>navigate("/")}>Back</Button>
            </div>
        </>
  )
}