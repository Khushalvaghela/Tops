import "./index.css";
import {Plus} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import Pending from "./Pending";
import Done from "./Done";

export default function ToDoList() {
  let [todo, setTodo] = useState("");
  let [pendingTask,set_pendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
 

  const handelKey =(e)=>{
    
    if(e.key=== "Enter" && todo.length> 0 ){
      addData();
    }
  }

  const addData = (e) => {

    e?.preventDefault();
    const newTodo = [...pendingTask, todo];
    set_pendingTask(newTodo);
    localStorage.setItem("task", JSON.stringify(newTodo));
    setTodo("");
  };

  useEffect(() => {
    let json_data = JSON.parse(localStorage.getItem("task")) || [];
    set_pendingTask(json_data);
    let removedData = JSON.parse(localStorage.getItem("removeData")) || [];
    setDoneTask(removedData);
  }, []);

 

  
  return (
    <>
      <div className="w-25 m-auto mt-3 p-3">
        <Label className="m-auto p-2 light">
          <h1>TodoList</h1>
        </Label>
        <div>

            <div className="d-flex align-items-center">
              <Input
                value={todo}
                style={{
                  borderRadius: "50px",
                  // backgroundColor: "lightblue",
                  width: "300px",
                  height: "40px",
                  justifyContent: "center",
                  textAlign: "center",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                placeholder="Enter Your Todo"
                onKeyPress={handelKey}
                onChange={(ele) => setTodo(ele.target.value)}
              />

              <Button
                color="danger"
                onClick={() => addData()}
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <Plus />
              </Button>
            </div>
        </div>
      </div>
      <div className="d-flex w-100 gap-4 p-5">
       <Pending pendingTask={pendingTask} set_pendingTask={set_pendingTask} doneTask={doneTask} setDoneTask={setDoneTask}/>
       <Done doneTask={doneTask} setDoneTask={setDoneTask} pendingTask={pendingTask} set_pendingTask={set_pendingTask}/>
        
      </div>
    </>
  );
}
