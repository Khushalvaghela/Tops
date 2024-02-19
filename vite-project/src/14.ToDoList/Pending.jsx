import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

export default function Pending({
  pendingTask,
  set_pendingTask,
  doneTask,
  setDoneTask,
}) {
  let [select, setSelect] = useState([]);
  let [searchPending, setSearchPending] = useState("");

  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem("task")) || "[]";
  //   let filterData = data.filter((e) =>
  //     e.includes(searchPending.toLocaleLowerCase())
  //   );
  //   set_pendingTask(filterData);
  // }, [searchPending]);


  const searchData = () => {
    let data = JSON.parse(localStorage.getItem("task")) || "[]";
    let filterData = data.filter((e) =>
      e.includes(searchPending.toLocaleLowerCase())
    );
    set_pendingTask(filterData);
  };
console.log(searchPending);


  const checkHAndler = (index) => {
    let match = select.includes(index);
    console.log("🚀 ~ checkHAndler ~ match:", match);
    if (match) {
      setSelect(select.filter((e) => e !== index));
    } else {
      setSelect([...select, index]);
    }
  };

  const selectPeAllData = () => {
    if (select.length !== pendingTask.length) {
      setSelect(pendingTask.map((e, index) => index));
    } else {
      setSelect([]);
    }
  };
  const submitHandler = () => {
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
            pendingTask.map((e, i) => {
              if (select?.includes(i)) {
                done.push(e);
              } else {
                notDone.push(e);
              }
              set_pendingTask(notDone);
              setDoneTask([...doneTask, ...done]);
              localStorage.setItem(
                "removeData",
                JSON.stringify([...doneTask, ...done])
              );
              localStorage.setItem("task", JSON.stringify(notDone));
              setSelect([]);
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
        style={{
          margin: "40px",
          width: "700px",
          justifyContent: "center",
        }}
      >
        <div class="notebook-page">
          {pendingTask.length > 0 ? (
            <div>
              <div className="d-flex w-100 justify-content-end p-2 align-item-center">
                <Input
                  className=" w-50"
                  placeholder="search"
                  value={searchPending}
                  onChange={(e) => search    (e?.target.value)}
                />
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
                PendingList
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
                    onChange={selectPeAllData}
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
                {pendingTask.map((e, i) => {
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
                              checked={select.includes(i)}
                              onClick={() => checkHAndler(i)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-5">
                <Button onClick={submitHandler} color="danger">
                  Submit
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
