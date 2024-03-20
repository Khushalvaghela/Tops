import React, { useState } from 'react'
import First from './First'
import Second from './Second'


export default function TaskInter() {
  let [task, setTask]=useState({
    email:"",
    password:"",
  })
  return (
    <div>
   <First task={task} setTask={setTask}/>
   <Second task={task} setTask={setTask}/>
    </div>
  )
}
