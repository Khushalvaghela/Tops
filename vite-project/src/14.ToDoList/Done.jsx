import { Minus, Search, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

export default function Done({
  doneTask,
  setDoneTask,
  pendingTask,
  set_pendingTask,
}) {
  let [remove, setRemove] = useState([]);
  let [searchDone, setsearchDone] = useState("");

  const searchData = () => {
    let data = JSON.parse(localStorage.getItem("removeData")) || "[]";
    let filterData = data.filter((e) =>
      e.includes(searchDone.toLocaleLowerCase())
    );
    setDoneTask(filterData);
  };

  const deleteHandler = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        let filter_data = doneTask.filter((e, i) => i != index);
        setDoneTask(filter_data);
        localStorage.setItem("removeData", JSON.stringify(filter_data));
        toast.info("Data Remove Successfully");
      }
    });
  };

  const removeSelectHandler = (index) => {
    let match = remove.includes(index);
    if (match) {
      setRemove(remove.filter((e) => e !== index));
    } else {
      setRemove([...remove, index]);
    }
  };

  const selectDoAllData = () => {
    if (remove.length !== doneTask.length) {
      setRemove(doneTask.map((e, index) => index));
    } else {
      setRemove([]);
    }
  };

  const removeHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " are u sure",
    }).then((result1) => {
      if (result1.isConfirmed) {
        Swal.fire({
          title: "Are you absolutely sure?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, proceed!",
        }).then((result2) => {
          if (result2.isConfirmed) {
            Swal.fire({
              title: "move!",
              text: "Your file has been move.",
              icon: "success",
            });
            let notDone = [];
            let done = [];
            doneTask.map((e, i) => {
              if (remove?.includes(i)) {
                notDone.push(e);
              } else {
                done.push(e);
              }
              setDoneTask(done);
              set_pendingTask([...pendingTask, ...notDone]);
              localStorage.setItem("removeData", JSON.stringify(done));
              localStorage.setItem(
                "task",
                JSON.stringify([...pendingTask, ...notDone])
              );
              setRemove([]);
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div
        class="content"
        className="m-auto"
        style={{ width: "700px", justifyContent: "center" }}
      >
        <div class="notebook-page">
          {doneTask.length > 0 ? (
            <div>
              <div className="d-flex w-100 justify-content-end p-2 align-item-center">
                <Input
                  className=" w-50"
                  placeholder="search"
                  value={searchDone}
                  onChange={(e) => setsearchDone(e?.target.value)}
                />
                {/* <Search onClick={searchData} /> */}
                <Button onClick={searchData}>serch</Button>
              </div>
              <h3
                className="text-center p-2"
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  padding: "10px",
                  color: "#332556",
                }}
              >
                {" "}
                Donetask
              </h3>
              <div className="text-end m-3">
                <div className="d-flex justify-content-end pb-2">
                  <Input
                    type="checkbox"
                    style={{
                      boxShadow: "none",
                      borderRadius: "50%",
                      fontSize: "22px",
                      border: "none",
                      border: "1px solid gray",
                    }}
                    onChange={selectDoAllData}
                  />
                  <Label
                    role="button"
                    style={{
                      fontWeight: "bold ",
                      fontSize: "22px",
                      paddingLeft: "10px",
                    }}
                  >
                    Select All
                  </Label>
                </div>
              </div>
              <div className="mt-5">
                {doneTask.map((e, i) => {
                  return (
                    <div style={{ width: "100%" }} key={i}>
                      <div
                        className="border-bottom border-1 dark pb-2 w-100  gap-2"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ paddingRight: "20px" }}>
                          <h className="dud" style={{ paddingLeft: "45px" }}>
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
                            <Input
                              type="checkbox"
                              style={{
                                padding: "10px",
                                borderRadius: "50px",
                                marginRight: "2px",
                                border: "2px solid red",
                              }}
                              checked={remove.includes(i)}
                              onChange={() => removeSelectHandler(i)}
                            />
                            <Trash
                              role="button"
                              color="red"
                              onClick={() => deleteHandler(i)}
                            />
                            <Minus
                              role="button"
                              onClick={() => removeHandler(i)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-5">
                <Button onClick={removeHandler} color="danger">
                  Submit
                </Button>
                <Button
                  style={{
                    margin: "5px",
                    backgroundColor: "green",
                  }}
                >
                  all delete
                </Button>
              </div>
            </div>
          ) : (
            <h1 className="text-center mt-3">Please Add Some Todo</h1>
          )}
        </div>
      </div>
    </div>
  );
}
