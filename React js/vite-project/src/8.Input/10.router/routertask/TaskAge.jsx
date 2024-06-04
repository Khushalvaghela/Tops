import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function TaskAge() {
    const navigate = useNavigate()
    let data = useParams()

    return (
        <>
            <div className="text-center">
                <h1>My age {data.age}</h1>
                <Button color='danger' onClick={()=>navigate("/")}> Back</Button>
            </div>
        </>
    )
}