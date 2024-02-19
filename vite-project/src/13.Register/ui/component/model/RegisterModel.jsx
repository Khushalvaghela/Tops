import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import Select from 'react-select';

let gender = ["male", "female", "kids"];
let hobby = ["reading", "traveling", "singning", "sport"];

const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
];

const initializeData = {
  email: "",
  password: "",
  gender: "male",
  hobby: [],
  userType: "user",
};

export default function RegisterModal({ modal, toggle }) {
  let [user, setUser] = useState(initializeData);
  // console.log("🚀 ~ file: RegisterModel.jsx:32 ~ RegisterModal ~ user:", user);

  // to get from data
  const getData = (e) => {
    e?.preventDefault();
    let jsonData = localStorage?.getItem("dataArray");
    let oldJsonData = JSON.parse(jsonData) || [];
    let match = oldJsonData.find((e) => e.email === user.email);
    if (match) {
      toast.warn("same data ");
    } else if (
      user.email === "" ||
      user.password === "" ||
      user.hobby.length === 0
    ) {
      toast.warning("fill the data");
    } else {
      toast.success("done");
      toggle();
      setUser(initializeData);
    }
    setUser(initializeData);
    localStorage?.setItem("dataArray", JSON?.stringify([...oldJsonData, user]));
  };

  const checHandler = (selectHobby) => {
    const updated = user.hobby.includes(selectHobby)
      ? user.hobby.filter((e) => e !== selectHobby)
      : [...user.hobby, selectHobby];
    setUser({ ...user, hobby: updated });
  };

  const toggleBtn = () => {
    setUser(initializeData);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggleBtn} >
          Modal title
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={getData}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={user?.email}
                id="exampleEmail"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                value={user?.password}
                id="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                placeholder="Enter your password"
                type="password"
              />
            </FormGroup>
            <label>Gender</label>
            <div className="d-flex gap-3">
              {gender.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Input
                      name="radio"
                      type="radio"
                      onClick={() => setUser({ ...user, gender: e })}
                    />
                    <Label>{e}</Label>
                  </FormGroup>
                );
              })}
            </div>
            <label>hobby</label>
            <div className="d-flex gap-3">
              {hobby.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Input
                      onChange={() => checHandler(e)}
                      checked={user?.hobbydata?.includes(e)}
                      type="checkbox"
                    />
                    <Label>{e}</Label>
                  </FormGroup>
                );
              })}
            </div>

            <FormGroup className="mt-2">
              <Label>User Type</Label>
              <Select
                value={userTypeOptions?.find((e) => e.value === user?.userType)}
                onChange={(e) => setUser({ ...user, userType: e?.value })}
                options={userTypeOptions}
              />
            </FormGroup>
            <div>
              <Button color="danger" className="w-100 mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

// const checkCoxHandler = (item) => {
//   const match = user?.hobby?.includes?.(item);
//   if (match) {
//     const filter = user?.hobby?.filter?.((e) => e !== item);
//     setUser({ ...user, hobby: filter });
//   } else {
//     setUser({ ...user, hobby: [...user?.hobby, item] });
//   }
// };

// <Label>Gender</Label>
// <FormGroup tag="fieldset" className="d-flex gap-3">
//   <FormGroup check>
//     <Input
//       checked={user?.gender === "male"}
//       onChange={() => setUser({ ...user, gender: "male" })}
//       name="radio1"
//       type="radio"
//     />
//     <Label check>Male</Label>
//   </FormGroup>
//   <FormGroup check>
//     <Input
//       checked={user?.gender === "female"}
//       onChange={() => setUser({ ...user, gender: "female" })}
//       name="radio1"
//       type="radio"
//     />
//     <Label check>Female</Label>
//   </FormGroup>
//   <FormGroup check disabled>
//     <Input
//       checked={user?.gender === "kids"}
//       onChange={() => setUser({ ...user, gender: "kids" })}
//       name="radio1"
//       type="radio"
//     />
//     <Label check>Kids</Label>
//   </FormGroup>
// </FormGroup>
// <div>
//   <Label>Hobby</Label>
// </div>
// <FormGroup check inline>
//   <Input
//     value={user?.hobby}
//     onClick={() => checkCoxHandler("reading")}
//     checked={user?.hobby?.includes("reading")}
//     type="checkbox"
//   />
//   <Label check>Reading</Label>
// </FormGroup>
// <FormGroup>
//   <Input
//     value={user?.hobby}
//     onClick={() => checkCoxHandler("traveling")}
//     checked={user?.hobby?.includes("traveling")}
//     type="checkbox"
//   />
//   <Label>Traveling</Label>

//   <Input
//     value={user?.hobby}
//     onClick={() => checkCoxHandler("singning")}
//     checked={user?.hobby?.includes("singning")}
//     type="checkbox"
//   />
//   <Label>Singing</Label>
//   <Input
//     value={user?.hobby}
//     onClick={() => checkCoxHandler("sport")}
//     checked={user?.hobby?.includes("sport")}
//     type="checkbox"
//   />
//   <Label check>Sports</Label>
// </FormGroup>
