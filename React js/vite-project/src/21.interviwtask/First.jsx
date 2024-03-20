import React from 'react'
import { Form } from 'react-router-dom'
import { FormGroup, Input, Label } from 'reactstrap'

export default function First({task,setTask}) {
  console.log("🚀 ~ First ~ task:", task)
  return (
    <div className='d-flex g-2'>
       
        <FormGroup>
          <Label for="Email" hidden>
            Email
          </Label>
          <Input
          value={task.email}
            id="Email"
            placeholder="Email"
            type="email"
            onChange={(e)=>setTask({...task,email:e?.target?.value})}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="password" hidden>
            password
          </Label>
          <Input
          value={task.password}
            id="password"
            placeholder="password"
            type="password"
            onChange={(e)=>setTask({...task,password:e?.target?.value})}
          />
        </FormGroup>{" "}

    </div>
  )
}
