import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function User() {
    const navigate = useNavigate()

    const data = useParams()
  return (
    <div>
      <h1>Hello {data?.name}</h1>

      <Button onClick={() => navigate("/")}>back</Button>
    </div>
  )
}
