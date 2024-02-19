import "./index.css";
import { FileEdit, Plus, Slash, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Label } from "reactstrap";

export default function ToDoList() {
  let [todo, setTodo] = useState("");
  let [pendingTask, set_pendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [index, setIndex] = useState(null);

  const todoData = (ele) => {
    setTodo(ele.target.value);
  };

  const addTodo = () => {
    if (todo.length > 0) {
      const match = pendingTask.some((e) => {
        return e === todo;
      });
      if (match) {
        toast.error("Same Data Already Exists");
      } else {
        set_pendingTask([...pendingTask, todo]);
        setTodo("");
        localStorage.setItem(
          "task",
          JSON.stringify({ pendingTask: [...pendingTask, task], doneTask })
        );
        toast.success("Data Added Successfully");
      }
    } else {
      toast.error("Please Fill The Input");
    }
  };

  useEffect(() => {
    let json_data = localStorage.getItem("task");
    let parsed_data = JSON.parse(json_data);
    if (parsed_data) {
      set_pendingTask(parsed_data.pendingTask || []);
      setDoneTask(parsed_data.doneTask || []);
    }
  }, []);

  const deleteHandler = (index) => {
    let filter_data = doneTask.filter((e, i) => i != index);
    setDoneTask(filter_data);
    localStorage.setItem(
      "task",
      JSON.stringify({ pendingTask, doneTask: deleteData })
    );
    toast.info("Data Remove Successfully");
  };

  // const updateData = () => {
  //   if (index || (index === 0 && todo.length > 0)) {
  //     pendingTask.splice(index, 1, todo);
  //     setTodo([...pendingTask]);
  //     setTodo("");
  //     setIndex(null);
  //     localStorage.setItem("todo", JSON.stringify([...pendingTask]));
  //     toast.success("Data Update Successfully");
  //   } else {
  //     toast("Please Updata New Data");
  //   }
  // };

  // const updateHandler = (data, index) => {
  //   setTodo(data);
  //   setIndex(index);
  // };

  const doneTaskHandler = (index) => {
    let done = window.confirm("Your Data Go Done Task");
    if (done) {
      setDoneTask([...doneTask, pendingTask[index]]);
      let newData = pendingTask?.filter((e, i) => i !== index);
      setPendingTask(newData);
      localStorage.setItem(
        "task",
        JSON.stringify({
          pendingTask: newData,
          doneTask: [...doneTask, pendingTask[index]],
        })
      );
      toast.success("Your Data Added Done Task Successfully");
    } else {
      toast.warn("Your Data Not Go to done Task");
    }
  };

  const pendingTaskHandler = (index) => {
    let pending = window.confirm("Your Data Go Pending Task");
    if (pending) {
      set_pendingTask([...pendingTask, doneTask[index]]);
      let newData = doneTask?.filter((e, i) => i !== index);
      setDoneTask(newData);
      localStorage.setItem(
        "task",
        JSON.stringify({
          pendingTask: [...pendingTask, doneTask[index]],
          doneTask: newData,
        })
      );
      toast.success("Your Data Added Pending Task Successfully");
    } else {
      toast.warn("Your Data Not Go to Pending Task");
    }
  };

  return (
    <>
      <div className="w-25 m-auto mt-3 p-3">
        <Label className="m-auto p-2 light">
          <h1>TodoList</h1>
        </Label>
        <div className='d-flex align-items-center'>
        <Input
          value={todo}
          style={{
            borderRadius: "50px",
            // backgroundColor: "lightblue",
            width: "450px",
            justifyContent: "center",
            textAlign: "center",
            borderTopRightRadius: "0px", borderBottomRightRadius: "0px"
          }}
          placeholder="Enter Your Todo"
          onChange={(e) => todoData(e)}
        />
        <Button
          color="danger"
          onClick={() => addTodo()}
          style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
        >
          <Plus />
        </Button>
        </div>
        {/* <div className="text-center">
          {index || index === 0 ? (
            <Button
              color="danger"
              className="mt-3"
              onClick={() => updateData()}
            >
              Update
            </Button>
          ) : (
            <Button
              color="danger"
              style={{
                justifyContent: "center",
                margin: "5px",
                width: "450px",
                borderRadius: "50px",
              }}
              onClick={(e) => addTodo(e)}
            >
              Submit
            </Button>
          )}
        </div>*/}
      </div>
      <div className="d-flex w-100 gap-4 p-5">
        <div>
          <div
            class="content"
            className="m-auto"
            style={{
              margin: "40px",
              width: "700px",
              justifyContent: "center",
            }}
          >
            <div class="notebook-page">
              {pendingTask.length > 0 ? (
                <div>
                  <h3 className="text-center p-2"> PendingList</h3>
                  <div className="mt-5">
                    {pendingTask.map((e, i) => {
                      return (
                        <div style={{ width: "100%" }} key={i}>
                          <div
                            className="border-bottom border-1 dark pb-2 w-100  gap-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ paddingRight: "20px" }}>
                              <h
                                className="dud"
                                style={{ paddingLeft: "45px" }}
                              >
                                {i + 1}.
                              </h>
                            </div>
                            <div
                              style={{
                                display: "flex",

                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <h3> {e}</h3>
                              <div className="m-2">
                                {/* <FileEdit
                                  color="red"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => updateHandler(e, i)}
                                /> */}
                                {/* <Slash
                                  color="red"
                                  style={{ rotate: "-20deg" }}
                                /> */}
                                <Input
                                  type="checkbox"
                                  style={{
                                    padding: "10px",
                                    borderRadius: "50px",
                                    marginRight: "2px",
                                    border: "2px solid red",
                                  }}
                                  onClick={() => doneTaskHandler(i)}
                                />
                                {/* <Trash
                                  color="red"
                                  onClick={() => deleteHandler(i)}
                                /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <h1 className="text-center mt-3">Please Add Some Todo</h1>
              )}
            </div>
          </div>
        </div>
        <div>
          <div
            class="content"
            className="m-auto"
            style={{ width: "700px", justifyContent: "center" }}
          >
            <div class="notebook-page">
              {doneTask.length > 0 ? (
                <div>
                  <h3 className="text-center p-2"> Donetask</h3>
                  <div className="mt-5">
                    {doneTask.map((e, i) => {
                      return (
                        <div style={{ width: "100%" }} key={i}>
                          <div
                            className="border-bottom border-1 dark pb-2 w-100  gap-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ paddingRight: "20px" }}>
                              <h
                                className="dud"
                                style={{ paddingLeft: "45px" }}
                              >
                                {i + 1}.
                              </h>
                            </div>
                            <div
                              style={{
                                display: "flex",

                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <h3> {e}</h3>
                              <div className="m-2">
                                {/* <FileEdit
                                  color="red"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => updateHandler(e, i)}
                                /> */}
                                {/* <Slash
                                  color="red"
                                  style={{ rotate: "-20deg" }}
                                /> */}
                                <Input
                                  type="checkbox"
                                  onClick={() => pendingTaskHandler(i)}
                                  style={{
                                    padding: "10px",
                                    borderRadius: "50px",
                                    marginRight: "2px",
                                    border: "2px solid red",
                                  }}
                                />
                                <Trash
                                  color="red"
                                  onClick={() => deleteHandler(i)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <h1 className="text-center mt-3">Please Add Some Todo</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
